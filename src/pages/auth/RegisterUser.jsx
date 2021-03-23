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
                        label="メールアドレス"
                        placeholder="メールアドレスを入力"
                        />
                    <MARGIN/>
                    <InputGroup
                        label="メールアドレス(確認)"
                        placeholder="メールアドレス(確認)を入力"
                        />
                    <MARGIN/>
                    <InputGroup
                    label="パスワード"
                    placeholder="パスワードを入力"/>
                    <MARGIN/>
                    <InputGroup
                    label="パスワード(確認)"
                    placeholder="パスワード(確認)を入力"/>
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
