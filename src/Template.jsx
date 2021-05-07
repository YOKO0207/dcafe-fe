import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import useForm from '../../stores/reducers/util/useForm';

const initialStateForInput = {
  lastName: "",
  firstName: ""
};

function X () {
    // useEffect(() => {
    //   fetchMenuItem(props.match.params.menuItemId)
    //   .then((data) =>
    //     console.log(data)
    //   )
    // }, [])
    const [formState, handleChange] = useForm(initialStateForInput);
    return (
        <div>
            <input
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
            
        </div>
        
    )
}

export default X;

// const getMenuItems = new Promise((resolve, reject) => { 
        //     let data = localStorage.getItem('menuItems') 
        //     let menuItems = JSON.parse(data);
            
        //     if (menuItems) {
        //         resolve(menuItems) 
        //         } else {
        //         reject('Failed') 
        //         }
        //     })
        //     getMenuItems.then((message) => { 
        //         //setSavedMenuItems(message)
        //         //console.log(message)
        //         dispatch(setSavedMenuItems({savedMenuItems:message}))
        //         // debugger
        //     }).then(()=>{
        //         console.log(savedMenuItems)
        //     }).catch((message) => { 
        //         console.log(message)
                
        //     })
        // asyncLocalStorage.getItem('menuItems').then(function (value) {
        //     let menuItems = JSON.parse(value);
        //     return menuItems
        // }).then(function(value){
        //     dispatch(setSavedMenuItems(value))
        // });
