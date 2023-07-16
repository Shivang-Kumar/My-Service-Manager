const express=require('express');
const routes=express.Router();
const detail=require('../models/detail');
const Service=require('../models/service.js');
const Contact=require('../models/contact.js');
const banner=require('../models/banner');

routes.get('/',async (req,res)=>{
    const services= await  Service.find();
    const bannerr=await banner.findOne({"_id":"6472001f2e33b9e1e53d5363"});
    const details=await detail.findOne({"_id":"6471ccb6a820ad1049e5ecfc"});
    return res.render("index",{
        detail:details,
        sendservice:services,
        banner:bannerr
    });
})

routes.get('/gallery',async(req,res)=>{
    const details=await detail.findOne({"_id":"644966ce449dab46faadcd12"});
    
    return res.render("gallery",{
        detail:details,
        
    });
});


//processing contact form
routes.post("/process-contact-form",async(request,response)=>{
try{
    const data=await Contact.create(request.body);

}
catch(E)
{
   console.log("Error in post route ${e}",E);
}

response.redirect('/');
});

module.exports=routes;