import axios from 'axios';
import {login} from '../../urls/index';

export const postLogin = (data) => {
        return axios.post(login,
        {
            shopUserId: data.shopUserId,
            password: data.password
        },
        )
        .then(res => {
        return res.data
        })
        .catch((e) => console.error(e))
    }