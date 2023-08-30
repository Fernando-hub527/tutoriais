import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    if (isLoggedIn === undefined) return null
    if(isLoggedIn)return children
    else keycloak.login()
};
export default PrivateRoute;