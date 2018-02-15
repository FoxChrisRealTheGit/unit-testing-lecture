//purpose - function to return all users
//edge cases:
// -no users
// -check for duplicates
// -server, network, etc... error

const axios = require('axios')

module.exports = {
    getAllUsers: (url)=>{
        
    return axios.get(url).then(res=>{
           return res.data; 
        }).catch(err=>err)
    }
}