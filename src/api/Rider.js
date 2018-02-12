import axios from 'axios';
import config from "../config/config";

const riderApi = () => {
    return {
        all: (success,fail)=>(axios.get(config.apiUrl + '/riders')),
        top_ten:()=>(axios.get(config.apiUrl + '/riders/topTen'))
    }
};
export default riderApi;