import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 75f732e6a65e6b4d4d6af0c6f7472eff33055ed6586d36902ba943674ee17eeb'
    }

});