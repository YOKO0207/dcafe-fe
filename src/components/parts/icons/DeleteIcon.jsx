import React from 'react';
import {Delete} from '@styled-icons/material/Delete'
import styled from 'styled-components';
import media from "styled-media-query";
import Color from '../../../constants/styles/Color'

function DeleteIcon (props) {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default DeleteIcon;

const ICON = styled(Delete)`
  color:${Color.ICON};
  width:30px;
`
