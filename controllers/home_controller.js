const Tasks = require('../models/todo')
module.exports.home = (req,res)=>{
    // return res.end('<h1>Express is up for Fasten-up</h1>')
    // return res.render('home',{
    //     title:"Home"
    // });

    Tasks.find({},(err,task)=>{
       
            return res.render('home',{
                title:'Home',
                tasks_list:task,
                
            });
        
    })
}
