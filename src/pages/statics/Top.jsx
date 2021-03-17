import React from 'react';
import styled from 'styled-components';
import Test from '../../components/groups/cards/Test';
import Text from '../../components/parts/Text';
import Color from '../../variables/styles/Color'
import Input from '../../components/parts/Input';
import Header from '../../components/groups/bars/Header'
import Button from '../../components/parts/Button';
import Footer from '../../components/groups/bars/Footer';
import MenuBar from '../../components/groups/bars/MenuBar';


function Top () {
    return (
        <div>
            <Header/>
            samplesample
            <Footer/>
            
            <MenuBar/>
           {/* <Test bgColor="green" name="delete"/>
           <Text 
            text="this is test"
            font_weight="700"
            font_size_small="10px"
            font_size_middle="20px"
            font_size_large="30px"
            color={Color.PRIMARY}
           />
           <Input
           placeholder="入力欄"
           large_width="150px"
           large_height="31px"
           border="black solid 1px"/> */}

        </div>
        
    )
}

export default Top;

