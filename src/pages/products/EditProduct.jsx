import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import TextButton from '../../components/groups/buttons/TextButton';
import FormContainer from '../../components/groups/forms/FormContainer';
import InputGroup from '../../components/groups/forms/InputGroup';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
import TextareaGroup from '../../components/groups/forms/TextareaGroup';

function EditProduct () {
    return (
        <div>
            <ThreeLayersLayout
            middle={<div>
                <FormContainer isLarge={true} header="Edit Product" formContainer={
                <div>
                    <InputGroup
                        label="title"
                        />
                    <MARGIN/>
                    <TextareaGroup
                    label="Description"/>
                    <MARGIN/>
                    <InputGroup
                        label="price"
                        />
                    <MARGIN/>
                    <InputGroup
                        label="image"
                        />
                    <MARGIN/>
                    <TextButton text="Update Product" isCenter={true} />
                </div>
                }/>
            </div>}/>
            
        </div>
        
    )
}

export default EditProduct;

const MARGIN=styled.div `
width:100%;
height:30px;
`;
