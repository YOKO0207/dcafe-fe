import axios from 'axios';
import {saveOrder} from '../../urls/index';

export const postOrder = (data) => {
        return axios.post(saveOrder,
        {
            customerName: data.name,
            comment: data.comment,
            totalPrice: data.totalPrice,
            eatinTakeout: true,
            shopId:2,
            orderDetails:data.orderDetails
        },
        )
        .then(res => {
        return res.data
        })
        .catch((e) => console.error(e))
    }