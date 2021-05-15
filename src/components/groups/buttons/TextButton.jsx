import React from 'react';
import Button from '../../parts/Button';
import Text from '../../parts/Text';

function TextButton (props) {
    return (
        <div>
            <Button
            isCenter={props.isCenter}
            bg_color="black"
            padding="10px 30px"
            onClick={props.onClick}
            button=
            {<Text 
                color="white"
                small_font_size="15px"
                middle_font_size="20px"
                large_font_size="23px"
                text={props.text}
            />}
            />
        </div>
        
    )
}

export default TextButton;
