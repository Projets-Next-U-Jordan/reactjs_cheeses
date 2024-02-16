import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Button from "../Button";
import emotionStyled from "@emotion/styled";

const UserContainer = emotionStyled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 100%;
    user-select: none;
`;

const User = () => {

    const {user, login, logout} = useContext(UserContext);

    if(user){
        return <UserContainer>
            <span>{user.name}</span>
            <Button onClick={logout}>Logout</Button>
        </UserContainer>
    }
    return <UserContainer>
        <Button onClick={login}>Login</Button>
    </UserContainer>
}

export default User;