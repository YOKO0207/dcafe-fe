import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function Top () {
    return (
        <div>
            {/* auth */}
            <Link to={'/auth/login'}>login</Link><br/>
            <Link to={'/auth/register_user'}>register_user</Link><br/>
            {/* orders/menus */}
            <Link to={'/orders/menus/all'}>menus/all</Link><br/>
            {/* orders */}
            <Link to={'/orders/cart'}>orders/cart</Link><br/>
            <Link to={'/orders/complete'}>orders/complete</Link><br/>
            {/* posts */}
            <Link to={'/posts/edit_post'}>edit_post</Link><br/>
            <Link to={'/posts/register_post'}>register_post</Link><br/>
            {/* product */}
            <Link to={'/posts/edit_product'}>edit_product</Link><br/>
            <Link to={'/posts/register_product'}>register_product</Link><br/>
            {/* statics */}
            <Link to={'/statics/maintenance'}>statics/maintenance</Link><br/>
            <Link to={'/statics/sorry'}>statics/sorry</Link><br/>
            <Link to={'/statics/Test'}>statics/Test</Link><br/>
        </div>
        
    )
}

export default Top;

