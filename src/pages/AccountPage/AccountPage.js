import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./AccountPage.scss"
import API_URL from "../../utils/api"

function AccountPage( isLoggedIn) {
    const [isLoading, setIsLoading] = useState(true);
    const [pdfs, setPdfs] = useState(null);
  
    useEffect(() => {
      const token = sessionStorage.getItem("authToken");
      axios.get(`${API_URL}/pdf`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },})
        .then((response)=>{
          setIsLoading(false)
          setPdfs(response.data)
          console.log(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
    }, [isLoggedIn]);

    if (!isLoggedIn){
      return <Navigate to="/"/>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
  
    return (
        <>
        <div className="account">
        <h1 className="account__title">Your Saved PDFs</h1>
        <div className="account__grid">
        {pdfs.length === 0 ? <h2 className="account__error">You have no saved pdfs yet</h2> : pdfs.map((pdf, index) => {
            return (
              <div className="account__pdf" key={index}>
                <a className="account__link" href={API_URL.pdf.file_link}  target="_blank" rel="noreferrer">
                    {pdf.file_name}
                </a>
                <iframe className="account__preview" src={API_URL+pdf.file_link} title={pdf.file_name}></iframe>
                </div>
            )
        })}
        </div>
         </div>
         </>
    )
}

export default AccountPage