import { useState } from 'react';

export const SignForm = ({ onSubmit }) => {
    const { email, setEmail } = useState("");
    const { pass, setPass } = useState("");
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, pass);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={handleChangeEmail} />
            <input type="password" value={pass} onChange={handleChangePass} />
            <input type="submit" />
        </form>
    )
}
