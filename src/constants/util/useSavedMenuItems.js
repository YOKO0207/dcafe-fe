import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {setSavedMenuItems} from '../../stores/actions/savedMenuItems';

function useSavedMenuItems () {
    const dispatch = useDispatch()

    const asyncLocalStorage = {
        getItem: async function (key) {
            await null;
            return localStorage.getItem(key);
        }
    };
    
    useEffect(()=>{
        asyncLocalStorage.getItem('menuItems').then(function (value) {
            let menuItems = JSON.parse(value);
            return menuItems
        }).then(function(value){
            dispatch(setSavedMenuItems(value))
        });
    },[])
}

export default useSavedMenuItems;