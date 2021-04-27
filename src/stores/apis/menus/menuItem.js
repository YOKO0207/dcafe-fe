import axios from 'axios';
import {getMenuItem} from '../../urls/index';

export const fetchMenuItem = async (menuItemId) => {
    try {
        const res = await axios.get(getMenuItem(menuItemId));
        return res.data;
    } catch (e) {
        return console.error(e);
    }
}

    