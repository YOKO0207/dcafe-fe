import axios from 'axios';
import {sendEmail} from '../../urls/index';

export const postEmail = (data) => {
        return axios.post(sendEmail,
        {
            customerName: data.name,
            email: data.email,
            totalPrice: data.totalPrice,
            eatinTakeout: true,
            shopId:2,
            displayOrderedItemDto:data.orderDetails
        },
        )
        .then(res => {
        return res.data
        })
        .catch((e) => console.error(e))
    }