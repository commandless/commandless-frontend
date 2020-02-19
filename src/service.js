import axios from 'axios';
export const getRecipes = (keywords) => {
    // return Promise.resolve(JSON.parse('[{"command":{"bin":"mr.bin","github":"www.gh.com","id":1,"inputs":"{}","npm":"mpn"},"commandId":1,"description":"Mock recipe0","id":1,"input":"{}"}]'));
    //return Promise.resolve(JSON.parse('[{"command":{"bin":"mr.bin","github":"www.gh.com","id":1,"inputs":"{}","npm":"mpn"},"commandId":1,"description":"Mock recipe0","id":1,"input":"{}"},{"command":{"bin":"mrs.bina","github":"www.github.com","id":2,"inputs":"{}","npm":"npx"},"commandId":2,"description":"Mock recipe1","id":2,"input":"{}"}]'));
    return axios.get(`http://192.168.100.81:8080/recipes?keywords=${keywords.join(',')}`)
        // .then(function (response) {
        //     // handle success
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
}
