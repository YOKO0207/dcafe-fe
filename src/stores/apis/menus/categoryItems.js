import axios from 'axios';
import {getMenuItemsByCategory} from '../../urls/index';

export const fetchCategoryItems = async (categoryId) => {
    try {
        const res = await axios.get(getMenuItemsByCategory(categoryId));
        return res.data;
    } catch (e) {
        return console.error(e);
    }
}

    