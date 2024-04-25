import {Container} from "@mui/material";
import React from "react";
import {Mode} from "../../../constants/Enums";

interface TranslationDetailProps {
    mode: Mode,
}

export const TranslationDetailMain: React.FC<TranslationDetailProps> = ({mode}) => {
    return (
        <Container>
            <h1>Detail A {mode}</h1>
        </Container>
    );
};

export default TranslationDetailMain;