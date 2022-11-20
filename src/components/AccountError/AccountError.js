import { Link } from "react-router-dom"
import "./AccountError.scss"

function AccountError() {
  return (
    <div className="account-error">
          <h2 className="account-error__title">There don't seem to be any PDFs saved into your account</h2>
          <h3 className="account-error__subtitle">Go to Templates to create some pdfs</h3>
          <Link className="account-error__cta" to="/templates">Templates</Link>
    </div>
  )
}

export default AccountError