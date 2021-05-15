import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSavedOrder } from '../../stores/actions/savedOrder';

function useSavedOrder () {
    const dispatch = useDispatch()

    const asyncLocalStorage = {
        getItem: async function (key) {
            await null;
            return localStorage.getItem(key);
        }
    };
    
    useEffect(()=>{
        asyncLocalStorage.getItem('order').then(function (value) {
            let order = JSON.parse(value);
            return order
        }).then(function(value){
            dispatch(setSavedOrder(value))
        });
    },[])
}

export default useSavedOrder;