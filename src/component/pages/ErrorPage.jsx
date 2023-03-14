import { Nav } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/not-found.svg"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center " id="error-page">
      <div className="text-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Nav.Link as={Link} to="/" className="btn d-inline-block">Back to home</Nav.Link>
      </div>
      <img style={{ maxWidth: "42%", height: "auto" }} className="img-fluid py-5" src={errorImage} alt="errorImage" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}