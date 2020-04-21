//backendapp routes.js
//import the model About we just created
var About = require('./models/contacts');
    module.exports = function(expobj){

        //server routes******************
        //handle Api calls
        //authenticate routes

        //api route

        expobj.get('/api/abouts', function(req, res){

            About.find(function(err, abouts){
                //if error occurs show error
                if(err)
                    res.send(err);
                
                res.json(abouts);    //return all data in json formate
            });
        });

        //add data
        expobj.post('/api/abouts',(req , res)=>{
            //logic to display data on console
            console.log('First Name : '+req.body.first_name+'\nLast Name : '+req.body.last_name+'\nPhone no : '+req.body.phone);

            //logic to add contact
            let newContact = new About({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone
            });
            
            newContact.save(function(err, contact){
                if(err)
                {
                    res.json({msg: 'Failed to add contact'});
                }
                else
                {
                    res.json({msg: 'Contact Added Successfully'});
                }
            });
        });
        
        //RETURNS THE DATA of a particular id
		expobj.get('/api/abouts/:id', function(req, res){

            About.find({_id:req.params.id},function(err, dataoupd){
                //if error occurs show error
                if(err)
                    res.send(err);
                
                res.json(dataoupd);    //return all data in json formate
            });
        });

        //update data
        expobj.put('/api/abouts/:id', function(req, res){

            //logic to update contact
            console.log("Updated Data "+req.body._id+req.body.first_name);
            About.update({_id: req.body._id},{$set:{first_name:req.body.first_name,last_name:req.body.last_name,phone:req.body.phone}},{
                multi:true}, function(err, update){
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(update);
                    }
                }
            );
        });

        // delete data
        expobj.delete('/api/abouts/:id', function(req, res){
            About.remove({_id:req.params.id},function(err, opt){
                //if error occurs show error
                if(err)
                    res.send(err);
                res.json(opt);
             });
        });


	}
        