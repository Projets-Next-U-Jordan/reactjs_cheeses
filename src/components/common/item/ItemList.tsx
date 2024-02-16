import emotionStyled from "@emotion/styled";
import Item from "./Item";
import { useContext } from "react";
import { CheeseContext } from "../../../context/CheeseContext";

const ItemListStyle = emotionStyled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

const ItemList = () => {

    const {cheeses} = useContext(CheeseContext);

    return (
        <ItemListStyle>
            {cheeses.map((cheese, index) => (
                <Item key={index} cheese={cheese} />
            ))}
        </ItemListStyle>
    );
}
export default ItemList;