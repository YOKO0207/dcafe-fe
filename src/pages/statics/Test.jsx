import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../components/groups/bars/MenuBar';
import ListLayout from '../../components/layouts/ListLayout';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';

import Text from '../../components/parts/Text';

function Test (props) {

    // const listItems = [
    //     <BOX1/>,
    //     <BOX2/>,
    //     <BOX3/>
    // ]
    // return (
    //     <div>
    //         <ListLayout
    //         top={<BOXTOP/>}
    //         contents={listItems}
    //         />
    //     </div>
        
    // )
    return (
        <div>
            <ThreeLayersLayout
            top={<BOXTOP/>}
            middle={<BOX1/>}
            bottom={<BOX2/>}/>
        </div>
        
    )
}

export default Test;
const BOXTOP = styled.div`
background:green;
width:100%;
height:100%;`
const BOX1 = styled.div`
padding-top : 100% ;
background:pink;`
const BOX2= styled(BOX1)`
background:skyblue;`

const BOX3= styled(BOX1)`
background:yellow;
`
