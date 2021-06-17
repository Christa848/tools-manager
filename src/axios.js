import axios from 'axios';

axios.defaults.baseURL = "http://itrackdevs.geo-fuel.com/tools_manager_api/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";