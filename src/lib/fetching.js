import axios from 'axios';

export const getUsers = async () => {
    const abortController = new AbortController();
    let res = null;
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
            signal: abortController.signal,
          });
        
        if(response.status === 200){
            console.log("200");
            res = response.data.data;
        }
    }
    catch(e){
        if(e){
            console.error(e);
        }
    }
    return res;
}