import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import Color from '../../../constants/styles/Color'
import Text from '../../parts/Text';

function FormContainer (props) {
    return (
        <div>
            <CONTAINER isLarge={props.isLarge}>
                <Text text={props.header} large_font_size="25px" middle_font_size="23px" small_font_size="20px"/>
                <MARGIN/>
                {props.formContainer}
            </CONTAINER>
        </div>
        
    )
}

export default FormContainer;

const CONTAINER = styled.div `
width:${props => props.isLarge? "100%":"60%"};
margin:0 auto;
border:1px solid #CECECE;
padding:30px;
background:${Color.FORM_BG};
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:90%;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:${props => props.isLarge? "100%":"80%"};
  `}
`
const MARGIN=styled.div `
width:100%;
height:20px;
`;