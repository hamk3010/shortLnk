import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';



import '../imports/api/users';
import {Links } from '../imports/api/links';
import '../imports/startup/simpl-schema-configuration.js';


//requ = HTTP request
// res= HTTP response
// next keeps the app moving
Meteor.startup(() => {

    WebApp.connectHandlers.use( (req, res, next) =>{
        const _id= req.url.slice(1); //we need to ignore the '/' and get the id after it
        const link= Links.findOne({_id});

        if(link){
            res.statusCode = 302;
            res.setHeader('Location', link.url);
            res.end();
        }
        else{
            next();
        }

    });

});
