import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';

function Maintenance () {
    return (
        <div>
            <ThreeLayersLayout middle={
                <CONTAINER>
                <HEADING>Site under Maintenance</HEADING>
            </CONTAINER>
            }/>
            
        </div>
        
    )
}

export default Maintenance;

const CONTAINER = styled.div `
text-align:center;
`
const HEADING = styled.h1 `
font-size:60px
`
const TEXT = styled.p `
font-size:20px;
`