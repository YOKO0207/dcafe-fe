import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Color from "../../../constants/styles/Color"
import Link from '../../parts/Link';
import SNSIcons from '../cards/SNSIcons';

function Footer () {
    
    return (
        <div>
            <FOOTER>
                <LIST>
                    <LOGO>
                    <Link
                    color="white"
                    font-weight="bold"
                    small_font_size="28px"
                    middle_font_size="37px"
                    large_font_size="60px"
                    link="Dior"
                    />
                    </LOGO>
                    <LISTITEM>
                    <Link
                    color="white"
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="16px"
                    large_font_size="22px"
                    link="Menu"
                    />
                    </LISTITEM>
                    <LISTITEM>
                    <Link
                    color="white"
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="16px"
                    large_font_size="22px"
                    link="Order"
                    />
                    </LISTITEM>
                    <LISTITEM>
                    <Link
                    color="white"
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="16px"
                    large_font_size="22px"
                    link="Access"
                    />
                    </LISTITEM>
                    <LISTITEM>
                    <Link
                    color="white"
                    font-weight="bold"
                    small_font_size="18px"
                    middle_font_size="16px"
                    large_font_size="22px"
                    link="Contact"
                    />
                    </LISTITEM>
                    <SNSICONS><SNSIcons/></SNSICONS>
                </LIST>
            </FOOTER>
            
        </div>
        
    )
}

export default Footer;

const FOOTER = styled.div `
background: ${Color.HEADER_BG};
color:white;
width:100%;
display:flex;
align-items:center;
justify-content:center;
z-index:2;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height:55px ;
    font-size:;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height:70px ;
    font-size:;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height:75px ;
    font-size:;
  `}
`;
const LIST = styled.div`
display:flex;
align-items:center;
`;
const LOGO = styled.div`
margin:0 50px;
position:absolute;
left:0%;
`;
const LISTITEM = styled.div`
margin:0 60px;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display:none;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    display:none;
  `}
`;
const SNSICONS = styled.div`
  position:absolute;
  right:3%;
`;


