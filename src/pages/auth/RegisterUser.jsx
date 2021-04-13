import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import TextButton from '../../components/groups/buttons/TextButton';
import FormContainer from '../../components/groups/forms/FormContainer';
import InputGroup from '../../components/groups/forms/InputGroup';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';

function RegisterUser () {
    return (
        <div>
            <ThreeLayersLayout
            middle={<div>
                <FormContainer header="Sign Up" formContainer={
                <div>
                    <InputGroup
                        label="email"
                        />
                    <MARGIN/>
                    <InputGroup
                        label="email(confirmation)"
                        />
                    <MARGIN/>
                    <InputGroup
                    label="password"/>
                    <MARGIN/>
                    <InputGroup
                    label="password(confirmation)"/>
                    <MARGIN/>
                    <TextButton text="Sign Up" isCenter={true} />
                </div>
                }/>
            </div>}/>
        </div>
        
    )
}

export default RegisterUser;

const MARGIN=styled.div `
width:100%;
height:30px;
`;
