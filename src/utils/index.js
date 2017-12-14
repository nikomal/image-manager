/**
 * Created by niko on 2017/12/14.
 */

import axios from 'axios';
export const request = (url,option) => {
    return axios({
        url:url,
        method:option.method,
        data:option.data
    }).then(function (response) {
        return response.data
    })
};