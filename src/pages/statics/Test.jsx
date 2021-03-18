import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../components/groups/bars/MenuBar';
import Layout from '../../components/layouts/Layout';
import Text from '../../components/parts/Text';

function Test (props) {
    return (
        <div>
            <Layout
            middle_middle={<BOX3/>}
            middle_right={<BOX/>}
            middle_left={<BOX2/>}
            />
        </div>
        
    )
}

export default Test;

const BOX = styled.div`

padding-top : 100% ;
background:pink;`

const BOX2= styled(BOX)`
background:skyblue;`

const BOX3= styled(BOX)`
background:yellow;
`
