
const model = require('../models/friendModel')








function  postFriend(req, res) {
    //validating incoming data from request  
  if(!req.body.name){

        return  res.status(400).json({
        error : 'Missing freind name '
    });

  }
     const newFriend = {
        name :  req.body.name ,
        id : model.length
        
     }


   model.push(newFriend)

   res.json(newFriend);

}


function getfriend (req , res) { 

    const friendId = Number(req.params.friendId);
   
    const friend = model[friendId] ;

     if(friend) { 
      res.status(200).json(friend);   


     } else {
          res.status(200).json({error : 'friend not found'})
      

}          
}


function getAllFriends (req, res) {
    res.json(model);
    
} 

 module.exports = {
    postFriend,
    getfriend,
    getAllFriends
 }