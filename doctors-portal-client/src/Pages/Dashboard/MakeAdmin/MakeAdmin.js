import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained" style={{ backgroundColor: "#5CE7ED", color: 'black', margin: 8 }}>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;