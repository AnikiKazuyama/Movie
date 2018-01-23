import axios from 'axios';

function callApi(url){
    return axios.get(url)
                .then(response => response.data)
                .then(data => data)
                .catch(error => {
                    console.log(error.response)
                    if(error.response){
                        return { 
                            error: {
                                errorStatus: error.response.status,
                                errorText: error.response.statusText
                            }
                        }
                        console.log(error.response.status);
                    } else if (error.request) {
                        console.log(error.request);
                    }else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
}

export default callApi;