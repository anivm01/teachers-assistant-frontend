import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./AccountPage.scss"

function AccountPage( isLoggedIn) {
    const [isLoading, setIsLoading] = useState(true);
    const [pdfs, setPdfs] = useState(null);
  
    useEffect(() => {
      const token = sessionStorage.getItem("authToken");
      axios.get("http://localhost:5000/pdf", {
        headers: {
          Authorization: `Bearer ${token}`,
        },})
        .then((response)=>{
          setIsLoading(false)
          setPdfs(response.data)
        })
    }, [isLoggedIn]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
  
    return (
        <>
        <Header />
        <div className="account">
        <h1 className="account__title">Your Saved PDFs</h1>
        {pdfs.length === 0 ? <h2 className="account__error">You have no saved pdfs yet</h2> : pdfs.map((pdf, index) => {
            return (
              <div className="account__pdf" key={index}>
                <a className="account__link" href={pdf.file_link}  target="_blank" >
                    {pdf.file_name}
                </a>
                <iframe src={pdf.file_link}></iframe>
                </div>
            )
        })}
         </div>
         </>
    )
}

export default AccountPage