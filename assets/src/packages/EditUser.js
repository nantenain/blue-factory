import React from "react";
import {
    HydraAdmin,
    ResourceGuesser,
    EditGuesser,
    InputGuesser
} from "@api-platform/admin";

const EditUser = props => (
    <EditGuesser {...props}>
        <InputGuesser source="email" />
        <InputGuesser source="name" />
        <InputGuesser source="firstname" />
        <InputGuesser source="age" />
        <InputGuesser source="post" />
        <InputGuesser source="experiences" />
    </EditGuesser>
);

export default EditUser