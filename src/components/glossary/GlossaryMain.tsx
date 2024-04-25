import SearchBar from "../searchbar/SearchBar";
import DataList from "../list/DataList";
import React from "react";
import {HorizontalBox} from "../../App.style";

export default function GlossaryMain() {
    return (
        <>
            <HorizontalBox>
                <SearchBar/>
                <DataList/>
            </HorizontalBox>
        </>
    );
}