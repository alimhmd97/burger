import { useNavigate, useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  const match = { params: useParams(), path: "/", URL: "/" };
  let navigate = useNavigate();

  return (
    <WrappedComponent
      {...props}
      match={match}
      navigate={navigate}
      params={params}
    />
  );
};
export { withRouter };
