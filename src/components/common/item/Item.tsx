import emotionStyled from "@emotion/styled";
import { Cheese } from "../../../types";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { CheeseContext } from "../../../context/CheeseContext";

type Props = {
    cheese: Cheese;
}

const CheeseContainer = emotionStyled.div<{ isHighlighted: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 0.25rem;
    height: min-content;
    border-color: ${props => props.isHighlighted ? 'yellow' : '#e0e0e0'};
    overflow: hidden;
`;

const CheeseNameStyle = emotionStyled.h2`
    text-align: center;
`;

const CheesePhotoStyle = emotionStyled.img`
    width: 20rem;
`;

const Item = ({cheese}: Props) => {

    const {isSelected} = useContext(CheeseContext);

    const {user} = useContext(UserContext);

    if (cheese.isAdmin && !user?.isAdmin) {
        return <></>;
    }
    return (
        <CheeseContainer isHighlighted={isSelected}>
            <CheeseNameStyle>{cheese.name}</CheeseNameStyle>
            <CheesePhotoStyle src={cheese.photo} style={{width:"20rem"}}/>
        </CheeseContainer>
    );
}

export default Item;