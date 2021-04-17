import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Textarea from '../../parts/Textarea'
import Label from '../../parts/Label'


function TextareaGroup (props) {
    return (
        <div>

            <Label
            color={props.color}
            font_weight={props.font_weight}
            font_family={props.font_family}
            small_font_size={props.small_font_size}
            middle_font_size={props.middle_font_size}
            large_font_size={props.large_font_size}
            label={props.label}/>
            <MARGIN/>
            <Textarea 
            color={props.color}
            bg_color={props.bg_color}
            border={props.border}
            box_shadow={props.box_shadow}
            border_radius={props.border_radius}
            small_width={props.small_width}
            middle_width={props.middle_width}
            large_width={props.large_width}
            small_height={props.small_height}
            middle_height={props.middle_height}
            large_height={props.large_height}
            small_font_size={props.small_font_size}
            middle_font_size={props.middle_font_size}
            large_font_size={props.large_font_size}
            placeholder={props.placeholder}
            type={props.type || "text"}
            />
            
        </div>
        
    )
}

export default TextareaGroup;

const MARGIN = styled.div `
width:100%;
height:5px;
`
