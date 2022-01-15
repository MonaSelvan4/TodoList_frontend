import axios from "axios";

export async function fetch(uri, handleSuccess, handleFailure){
    await axios
    .get(uri)
    .then(response =>{
        handleSuccess(response);
    })
    .catch(error =>{
        handleFailure(error)
    });
}
export async function add(uri, payLoad, handleSuccess, handleFailure){
    await axios
    .post(uri, payLoad)
    .then(response =>{
        handleSuccess(response);
    })
    .catch(error =>{
        handleFailure(error)
    });
}