import React from 'react';
import ReactDOM from 'react-dom';
import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import UserList from "./packages/UserList";
import UserView from "./packages/UserView";
import EditUser from "./packages/EditUser";

const Admin = () => (
    <HydraAdmin entrypoint="http://localhost/api">
        <ResourceGuesser name="users" list={UserList} show={UserView} edit={EditUser} />
        <ResourceGuesser name="experiences" />
    </HydraAdmin>
);



ReactDOM.render(<Admin />, document.getElementById('root'));