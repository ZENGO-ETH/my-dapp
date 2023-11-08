import axios from "axios";

const token = "5a08282e-52cb-43a0-ac72-b55b70d5b5aa"

const instance = axios.create({
  headers: {
    'Authorization': '5a08282e-52cb-43a0-ac72-b55b70d5b5aa',
    'Content-Type': 'application/json'
  }
});

console.log(instance)
