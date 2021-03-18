import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Text from '../../components/parts/Text';

function Test (props) {
    return (
        <div>
            <Text text={props.text} color="black"/>
            <Text text={props.text2}/>
        </div>
        
    )
}

export default Test;
