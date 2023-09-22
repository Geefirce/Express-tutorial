
const path = require('path')

function getMessages(req, res) {
    res.render('msgs.hbs', {
      title : 'Messages to my friends!',
      friend : 'Elon Musk',
    })


    // res.sendFile(path.join(__dirname, '..','public','images','16.1 skimountain.jpg'));
  

      
    
}


function postMessage(req, res)  {
    console.log('Updating messages');
  
  
  }


  module.exports = {
    getMessages,
    postMessage

  }