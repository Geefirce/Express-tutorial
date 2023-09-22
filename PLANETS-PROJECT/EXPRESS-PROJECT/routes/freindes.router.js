const express = require('express');
const friendController = require('../Controllers/friends.controller');




const friendsRouter = express.Router();

//checking for ip address

friendsRouter.use((req,res,next)=>{
  console.log('ip address:' , req.ip)

  next();
});

friendsRouter.post('/',friendController.postFriend)
friendsRouter.get('/', friendController.getAllFriends);    
friendsRouter.get('/:friendId',friendController.getfriend);


module.exports =  friendsRouter;

