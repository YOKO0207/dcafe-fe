import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../components/groups/bars/MenuBar';
import Product from '../../components/groups/cards/Product';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
import Card from '../../components/parts/Card';
import Text from '../../components/parts/Text';
import Image from '../../images/sample.png';
import Textarea from '../../components/parts/Textarea';
import Label from '../../components/parts/Label';
import IncrementDecrementButton from '../../components/groups/buttons/IncrementDecrementButton';
import TextAndNumberButton from '../../components/groups/buttons/TextAndNumberButton';
import axios from 'axios';

function MenuItem () {

  const [item, setItem] = useState("")
  
  useEffect(()=>{
      axios.get("http://localhost:8080/dcafe/menuitem//getmenuitem/1")
          .then(response => {
              setItem(response.data)
              console.log(response.data)
          }).catch(error => {
              console.log(error)
          })
  },[]
  )

    return (
        <div>
          
            <ThreeLayersLayout top={<MenuBar/>} 
            middle={<div>
                <MIDDLE_MARGIN/>
                <CONTAINER>
                    <Product text1={item.menuName} text2={item.price} src={Image}/>
                    <Card padding="0 10px"
                    card={<div>
                    <Text text="title" large_font_size="30px" middle_font_size="25px" small_font_size="20px" text_align="left"/>
                    <Text text={item.description}
                    text_align="left"/>
                    </div>}/>
                </CONTAINER>
                <MIDDLE_MARGIN/>
                <Label label="Add special request"/>
                <SMALL_MARGIN/>
                <TEXTAREA><Textarea/></TEXTAREA>
                <MIDDLE_MARGIN/>
                <CONTAINER_BOTTOM>
                    <IncrementDecrementButton/>
                    <TextAndNumberButton text="Add 1 to order" price="400" display="none"/>
                </CONTAINER_BOTTOM>
                </div>}/>
        </div>
        
    )
}

export default MenuItem;

const CONTAINER=styled.div `
display:flex;
`
const TEXTAREA = styled.div `
width:100%;
`
const CONTAINER_BOTTOM = styled.div `
display:flex;
align-items:center;
justify-content:space-around;
max-width:320px;
margin:0 auto;
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    max-width:450px;
    margin:0 auto;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    max-width:500px;
    margin:0 auto;
  `}
`

const SMALL_MARGIN = styled.div `
width:100%;
height:5px;
`
const MIDDLE_MARGIN = styled(SMALL_MARGIN) `
height:20px;
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height:25px
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height:30px;
  `}
`
