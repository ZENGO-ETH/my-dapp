import axios from "axios";

function main(){
const instance = axios.create({
  baseURL: 'https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa',
  timeout: 1000,
  method: 'GET',
  url: 'posts'
})

  console.log(instance)
}

main()
