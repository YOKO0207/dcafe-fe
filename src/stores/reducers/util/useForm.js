import { useReducer } from "react";

const useForm = (initialState = {}) => {
    const formReducer = (state, { name, value }) => ({ ...state, [name]: value });
    const [formState, formDispatch] = useReducer(formReducer, initialState);
    const handleChange = ({ target: { name, value } }) => formDispatch({ name, value });
    return [formState, handleChange];
};

export default useForm;