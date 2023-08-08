import { useState } from "react";

export const useForm = (initialValue, onSubmitHandler) => {
    const [values, setValue] = useState(initialValue);

    const changeHandler = (e) => {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
        setValue(initialValue);
    }

    const changeValue = (newValue) => {
        setValue(newValue);
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValue,
    }
}