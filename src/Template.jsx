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
