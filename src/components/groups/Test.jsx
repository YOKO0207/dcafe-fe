import React from 'react';
import styled from 'styled-components';
import Delete from '../parts/buttons/Delete';


function Test (props) {
    return (
        <div>
            <Delete bgColor={props.bgColor}/>
        </div>
        
    )
}

export default Test;