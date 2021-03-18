import React from 'react';
import Card from '../../parts/Card';
import Image from '../../parts/Image';
import Text from '../../parts/Text';

function Product (props) {

    const listItems = [
        <Image 
        src={props.src}
        box_shadow={props.image_box_shadow}
        border_radius={props.image_border_radius}
        small_width={props.image_small_width}
        middle_width={props.image_middle_width}
        large_width={props.image_large_width}
        small_height={props.image_small_height}
        middle_height={props.image_middle_height}
        large_height={props.image_large_height}
        src={props.src}
        alt={props.alt}
        />,
        <div>
            <Text 
            text={props.text1} 
            color={props.text1_color}
            font_weight={props.text1_font_weight}
            font_family={props.text1_font_family}
            small_font_size={props.text1_small_font_size}
            middle_font_size={props.text1_middle_font_size}
            large_font_size={props.text1_large_font_size}
            text_align={props.text1_text_align}
            />
            <Text 
            text={props.text2} 
            color={props.text2_color}
            font_weight={props.text2_font_weight}
            font_family={props.text2_font_family}
            small_font_size={props.text2_small_font_size}
            middle_font_size={props.text2_middle_font_size}
            large_font_size={props.text2_large_font_size}
            text_align={props.text2_text_align}
            />
        </div>
    ]
    return (
        <div>
            <Card card={listItems}
            background={props.background}
            border={props.border}
            box_shadow={props.box_shadow}
            border_radius={props.border_radius}
            small_width={props.small_width}
            middle_width={props.middle_width}
            large_width={props.large_width}
            small_height={props.small_height}
            middle_height={props.middle_height}
            large_height={props.large_height}
            padding={props.padding}
            display={props.display}
            />
        </div>
        
    )
}

export default Product;
