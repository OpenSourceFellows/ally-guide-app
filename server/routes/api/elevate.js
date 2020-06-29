const express = require("express");
const axios = require("axios");

const router = express.Router();

// Get Post
router.get('/:zipCode', (req, res) => {
    var congressMembers = [];
    var reps = [];
    var zipCode = req.params.zipCode;
    console.log(req.params)
    axios.get('https://www.googleapis.com/civicinfo/v2/representatives',{
        params:{
            key: '',//add key here
            address: zipCode
        }
    })
    .then(function(response){
        console.log('the start of the test'); 
        reps = response.data.officials;
console.log(response.data.offices);
console.log(reps)
        response.data.offices.forEach(repInfo => {              
            repInfo.officialIndices.forEach(position => {
                if(position > 1){
                var rep = reps[position];           
                
                    var officeInfo = {
                        'name': '',
                        'title': '',
                        'city': '',
                        'state':'',
                        'email':'',
                        'twitter':'',
                        'facebook':'',
                        'contactPage': ''
                    }

                    if (rep.name == undefined || rep.name == ''){
                        
                    }
                    else{
                        officeInfo.name = rep.name;
                    }
                    if (repInfo.name == undefined || rep.name == ''){
                        
                    }
                    else{
                        officeInfo.title = repInfo.name;
                    }
                    if (rep.address == undefined || rep.address == ''){
                        
                    }
                    else{
                        officeInfo.city = rep.address[0].city;
                        officeInfo.state = rep.address[0].state;
                    }
                    if(repInfo.email == undefined) {
                        officeInfo.email = 'Unavailable';
                    } 
                    else{
                        officeInfo.email = rep.email;
                    } 
                    officeInfo = FlattenChannels(rep, officeInfo);
                    if(officeInfo !== undefined){
                        congressMembers.push(officeInfo);
                    }                                                                                                           
                }
            })
        })
        console.log(congressMembers)
        res.send(congressMembers)
    })
    .catch(function(error){
        console.log(error);
    })    
});

function FlattenChannels(rep, flattenRepInfo){  
    if (rep.channels == undefined){
        flattenRepInfo.facebook = 'Not Made Public';
        flattenRepInfo.twitter = 'Not Made Public';
    }
    else{
        rep.channels.forEach(channel => {
            if(channel.type == "Facebook"){
                flattenRepInfo.facebook = channel.id;
            };
            if(channel.type == "Twitter"){
                flattenRepInfo.twitter = channel.id;
            };
        });
        return flattenRepInfo;
    }
};

module.exports = router;