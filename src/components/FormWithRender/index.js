import { useState } from "react";

export const FormWithRender = ({ render, onSubmit }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        onSubmit(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {render({value, handleChange, handleSubmit})}
        </form>
    );
};