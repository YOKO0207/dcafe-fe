import React from 'react';
import Button from '../../parts/Button';
import Text from '../../parts/Text';

function TextButton (props) {
    return (
        <div>
            <Button
            bg_color="black"
            padding="20px"
            button=
            {<Text 
                color="white"
                small_font_size="15px"
                middle_font_size="20px"
                large_font_size="25px"
                text={props.text}
            />}
            />
        </div>
        
    )
}

export default TextButton;
