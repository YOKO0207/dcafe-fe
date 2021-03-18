import React from 'react';
import Text from '../../parts/Text';
import Button from '../../parts/Button';
import SquareNumber from '../cards/SquareNumber';

function TextAndNumberButton (props) {

    const listItems = [
        <SquareNumber square_number={props.square_number}/>,
        <Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text={props.text}/>,
        <Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text={props.price}/>,
    ]
    return (
        <div>
            <Button 
            bg_color="black"
            small_width="300px"
            middle_width="350px"
            large_width="400px"
            small_height="50px"
            middle_height="66px"
            large_height="80px"
            button= {listItems}
            />
        </div>
        
    )
}

export default TextAndNumberButton;
