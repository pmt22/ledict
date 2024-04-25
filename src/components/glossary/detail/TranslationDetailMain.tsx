import {Button, TextField} from "@mui/material";
import React from "react";
import {Mode} from "../../../constants/Enums";
import {useFormik} from "formik";
import {HorizontalBox} from "../../../App.style";

interface TranslationDetailProps {
    mode: Mode,
}

export const TranslationDetailMain: React.FC<TranslationDetailProps> = ({mode}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <HorizontalBox>
                <TextField id="email" label="Email Address" variant="outlined" onChange={formik.handleChange}
                           value={formik.values.email}/>
                <Button type="submit">Submit</Button>
            </HorizontalBox>
        </form>

    );
};

export default TranslationDetailMain;