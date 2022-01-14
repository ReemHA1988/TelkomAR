import { Redirect, Route } from "react-router-dom";
import userService from "../../services/userService";

const ProtectedRoute = ({ render, component: Component, biz, ...rest }) => {
  const user = userService.getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user || (biz && !user.biz)) {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location },
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
