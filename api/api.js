import axios from 'axios';
import { backendUrl } from './backendurl';

export const getDataOfPosts = async (type) => {
    
    return axios.get(backendUrl + '/' + type, {
        // to increase result limit from 100 to 300
        params:{
            _limit: 300
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));

}

export const getIdsOfPosts = async (type) => {

    const data = await axios.get(backendUrl + '/' + type, {
        // to increase result limit from 100 to 300
        params:{
            _limit: 300
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));

    return data.map(({ id }) => {
        return {
            params: {
                id: id.toString()
            }
        }
    });
}

export const getSlugsOfPosts = async (type) => {

    const data = await axios.get(backendUrl + '/' + type, {
        // to increase result limit from 100 to 300
        params:{
            _limit: 300
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));

    return data.map(({ slug }) => {
        return {
            params: {
                id: slug
            }
        }
    });
}