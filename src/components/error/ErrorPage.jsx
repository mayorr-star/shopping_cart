import { useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={style.error}>
      <div>
        <h1>Ooops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
