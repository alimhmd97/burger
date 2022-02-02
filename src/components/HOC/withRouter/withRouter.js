import { useNavigate, useParams, useLocation } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  const location = useLocation();
  const match = { params: useParams() };
  const navigate = useNavigate();
  const history = {
    navigate,
    back: () => navigate(-1),
    goBack: () => navigate(-1),
    location,
    push: (url, state) => navigate(url, { state }),
    replace: (url, state) =>
      navigate(url, {
        replace: true,
        state,
      }),
  };
  return (
    <WrappedComponent
      history={history}
      {...props}
      match={match}
      navigate={navigate}
      params={params}
    />
  );
};
export { withRouter };
