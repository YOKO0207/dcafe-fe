import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';

function Sorry () {
    return (
        <div>
            <ThreeLayersLayout middle={
                <CONTAINER>
                <HEADING>404 </HEADING>
                <TEXT>Page Not Found, or something went wrong. Please try again. </TEXT>
            </CONTAINER>
            }/>
            
        </div>
        
    )
}

export default Sorry;

const CONTAINER = styled.div `
text-align:center;
`
const HEADING = styled.h1 `
font-size:60px
`
const TEXT = styled.p `
font-size:20px;
`