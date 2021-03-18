import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Link from '../../parts/Link';
import Cart from '../../parts/icons/Cart'


function MenuBar (props) {
    
    return (
        <div>
            <MENUBAR>
                <LIST>
                    <LISTITEM>
                    <Link
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="20px"
                    large_font_size="22px"
                    link="Food"
                    />
                    </LISTITEM>
                    <LISTITEM>
                    <Link
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="20px"
                    large_font_size="22px"
                    link="Dessert"
                    />
                    </LISTITEM>
                    <LISTITEM>
                    <Link
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="20px"
                    large_font_size="22px"
                    link="Beverage"
                    />
                    </LISTITEM>
                    <LISTITEM>
                    <Link
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="20px"
                    large_font_size="22px"
                    link="Other"
                    />
                    </LISTITEM>
                    </LIST>
                    <Cart/>
            </MENUBAR>
            
        </div>
        
    )
}

export default MenuBar;

const MENUBAR = styled.div `
color:black;
width:75%;
margin: 0 auto;
display:flex;
align-items:center;
justify-content:space-between;
position:fixed;
top:13%;
left:0;
right:0;
z-index:2;
border-bottom:1px solid black;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height:55px ;
    width:100%;
    padding:0 8px;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height:70px ;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height:85px ;
  `}
`;
const LIST = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
const LISTITEM = styled.div`
margin:0 40px;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin:0 10px;
  `}
`


