var MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');


MongoClient.connect('mongodb://127.0.0.1:27017/mongofirst', function(err, db){
  if (err) throw err;
  db.collection('homework7').findOne({},{_id:false}, function(err, doc){
    if(err) throw err;    
    
   

    
    const decipher = crypto.createDecipher('aes256', 'asaadsaad');
    
    const encrypted = doc.message;
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    module.exports.data = decrypted;

    //console.log(doc);
    db.close();
  });
 
});
