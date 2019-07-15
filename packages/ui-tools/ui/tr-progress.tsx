import {Fade, LinearProgress} from "./ui-component";
import React from "react";


export const TrProgress = {
    linear: (state: boolean) => {
        return (
            state ? (<React.Fragment><Fade in={state}><LinearProgress color="primary"/></Fade></React.Fragment>) : ""
        );
    }
};