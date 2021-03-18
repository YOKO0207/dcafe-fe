import React from 'react';
import Text from '../../parts/Text';
import Card from '../../parts/Card';

function SquareNumber (props) {
    return (
        <div>
            <Card 
            border="1px solid white"
            padding="5px 10px"
            card={<Text color="white" large_font_size="25px" middle_font_size="22px" large_font_size="19px" text={props.square_number}/>}/>
        </div>
        
    )
}

export default SquareNumber;
