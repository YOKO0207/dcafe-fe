import React from 'react';
import styled from 'styled-components';
import Delete from '../../parts/Button';


function Test (props) {
    return (
        <div>
            <Delete bgColor={props.bgColor} name={props.name}/>
        </div>
        
    )
}

export default Test;