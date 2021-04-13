import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import TextButton from '../../components/groups/buttons/TextButton';
import FormContainer from '../../components/groups/forms/FormContainer';
import InputGroup from '../../components/groups/forms/InputGroup';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';



function Login () {
    return (
        <div>
            <ThreeLayersLayout
            middle={<div>
                <FormContainer header="Log In" formContainer={
                <div>
                    <InputGroup
                        label="email"
                        />
                    <MARGIN/>
                    <InputGroup
                    label="password"/>
                    <MARGIN/>
                    <TextButton text="Log In" isCenter={true} />
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