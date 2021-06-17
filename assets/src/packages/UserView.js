import React from "react";
import {
    ShowGuesser,
    FieldGuesser
} from "@api-platform/admin";

const UserView = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source="email" addLabel={true} />
        <FieldGuesser source="name" addLabel={true} />
        <FieldGuesser source="firstname" addLabel={true} />

        {/* While deprecated fields are hidden by default, using an explicit FieldGuesser component allows to add them back. */}
        <FieldGuesser source="age" addLabel={true} />

        <FieldGuesser source="post" addLabel={true} />
        <FieldGuesser source="experiencies" addLabel={true} />
    </ShowGuesser>
);

export default UserView;