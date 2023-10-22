import { axios } from "axios";

const res = await axios({
    url: 'https://httpbin.org/get',
    method: 'get'
});

console.log(res.data.json)
