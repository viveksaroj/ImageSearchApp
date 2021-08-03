import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9ffc13e80512348a06e8ce87d1a7572ff7b1b1b6b26670115c6aeb176829da68'
    }
});
