import React from "react";
import {
    ListGuesser,
    FieldGuesser
} from "@api-platform/admin";
import { List, Datagrid, TextField } from 'react-admin';
import { FunctionField } from 'react-admin';



const UserList = props => {
    let nexProps = {...props, hasCreate:false}
    return (
        <ListGuesser {...nexProps}>
            <FieldGuesser source={"email"}/>
            <FieldGuesser source={"name"}/>
            <FieldGuesser source={"firstname"}/>
            <FieldGuesser source={"age"}/>
            <FieldGuesser source={"post"}/>
            <FieldGuesser source={"experiences"}/>
        </ListGuesser>
    );
}

export default UserList;