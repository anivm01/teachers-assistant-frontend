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
        {pdfs.map((pdf, index) => {
            const newFileName = pdf.file_name;
            const splitFileName = newFileName.split("-")
            console.log(splitFileName)
            return (
                <a className="account__pdfs" href={pdf.file_link} key={index} >
                    {splitFileName[0]}
                </a>
            )
        })}
         </div>
         </>
    )
}

export default AccountPage