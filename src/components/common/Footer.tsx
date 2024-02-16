import emotionStyled from "@emotion/styled";
import { useContext } from "react";
import { CheeseContext } from "../../context/CheeseContext";

const FooterStyled = emotionStyled.footer`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: min-content;
    gap: 1rem;
    padding: 1rem;
    border-top: 1px solid #e0e0e0;
`;

const Footer = () => {

    const {isSelected, setSelected} = useContext(CheeseContext);

    return (
        <FooterStyled>
            <button onClick={() => setSelected(!isSelected)}>
                {isSelected ? "Désélectionner" : "Sélectionner"}
            </button>
            © 2021 Cheese Blog
        </FooterStyled>
    );
};

export default Footer;