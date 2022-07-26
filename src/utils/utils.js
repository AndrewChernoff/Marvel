import Loading from "../components/Common/Loading/Loading"
import Error from "../components/Common/Error/Error";

const componentContent = (processName, component) => {
  switch (processName) {
    case "waiting":
      return <Loading />;
      break;
    case "loaded":
      return (
        component
      );
      break;
    case "error":
      return <Error />;
      break;
    default:
      return <Error />;
  }
};

export default componentContent;
