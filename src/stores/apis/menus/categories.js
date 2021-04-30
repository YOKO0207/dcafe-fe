import axios from 'axios';
import {getCategories} from '../../urls/index';

export const fetchCategories = async () => {
    try {
        const res = await axios.get(getCategories);
        return res.data;
    } catch (e) {
        return console.error(e);
    }
}

    