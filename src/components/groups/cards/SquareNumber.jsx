import React from 'react';
import Text from '../../parts/Text';
import Card from '../../parts/Card';

function SquareNumber (props) {
    return (
        <div>
            <Card 
            border={props.border}
            padding="5px 10px"
            card={<Text color={props.color} large_font_size="25px" middle_font_size="22px" large_font_size="19px" text={props.square_number}/>}/>
        </div>
        
    )
}

export default SquareNumber;
