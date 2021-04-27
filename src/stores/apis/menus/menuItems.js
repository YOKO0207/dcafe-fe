import axios from 'axios';
import {getMenuItems} from '../../urls/index';

export const fetchMenuItems = async () => {
    try {
        const res = await axios.get(getMenuItems);
        return res.data;
    } catch (e) {
        return console.error(e);
    }
}


    