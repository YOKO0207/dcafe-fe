import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import TextButton from '../../components/groups/buttons/TextButton';
import FormContainer from '../../components/groups/forms/FormContainer';
import InputGroup from '../../components/groups/forms/InputGroup';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
//api
import {postLogin} from '../../stores/apis/auth/loginRequest';
//input 
import useForm from '../../stores/reducers/util/useForm';
const initialStateForInput = {
    shopUserId: "",
    password: ""
};

function Login () {
    const [formState, handleChange] = useForm(initialStateForInput);

    const handleSubmit = () => {
        let data = {
            shopUserId:formState.shopUserId,
            password:formState.password
        }
        postLogin(data);
    }

    return (
        <div>
            <ThreeLayersLayout
            middle={<div>
            
                <FormContainer header="Log In" formContainer={
                <div>
                    <InputGroup
                        label="Shop User Id"
                        name="shopUserId"
                        value={formState.shopUserId}
                        onChange={handleChange}
                    />
                    <MARGIN/>
                    <InputGroup
                        label="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <MARGIN/>
                    <TextButton text="Log In" isCenter={true} onClick={handleSubmit}/>
                </div>
                }/>
            </div>}/>
        </div>
        
    )
}

export default Login;

const MARGIN=styled.div `
width:100%;
height:30px;
`;