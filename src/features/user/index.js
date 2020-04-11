import React from 'react';
import { Create } from './create';
import { Get } from './get';

function UserComponent() {
    return (
        <div>
            <h4>Redux with toolkit : </h4>
            <Create />
            <Get />
        </div>
    );
}

export default UserComponent;
