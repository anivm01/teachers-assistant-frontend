import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./AccountPage.scss"
import API_URL from "../../utils/api"
import AccountError from "../../components/AccountError/AccountError";

function AccountPage( isLoggedIn) {
    const [isError, setIsError] = useState(false)
    const [pdfs, setPdfs] = useState([]);
  
    useEffect(() => {
      const token = sessionStorage.getItem("authToken");
      axios.get(`${API_URL}/pdf`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },})
        .then((response)=>{
          setPdfs(response.data)
          console.log(response.data)
        })
        .catch((error)=>{
          setIsError(true)
          console.log(error)
        })
    }, [isLoggedIn]);

    if(isError) {
      return (
        <AccountError />
      )
    }

    if (!isLoggedIn){
      return <Navigate to="/"/>
    }
    if (pdfs.length===0) {
        return <h1>Loading...</h1>
    }
  
    return (
        <>
        <div className="account">
        <h1 className="account__title">Your Saved PDFs</h1>
        <div className="account__grid">
        {pdfs.map((pdf, index) => {
            return (
              <div className="account__pdf" key={index}>
                <a className="account__link" href={API_URL+pdf.file_link}  target="_blank" rel="noreferrer">
                    {pdf.file_name}
                </a>
                <iframe title={pdf.file_name} className="account__preview" src={API_URL+pdf.file_link} ></iframe>
              </div>
            )
        })}
        </div>
         </div>
         </>
    )
}

export default AccountPage