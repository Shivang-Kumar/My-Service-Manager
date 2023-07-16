const PORT=process.env.PORT|5556;
const express=require('express');
const app=express();
const routes=require('./routes/main');
const mongoose=require('mongoose');
const path=require('path');
const Service=require('./models/service');
const Detail=require('./models/detail.js');
const bodyParser=require('body-parser');
const banner=require('./models/banner.js');

//setting ejs as template engine
const hbs=require('ejs');
app.set('view engine','ejs');
app.set('views','views'); 

app.use(bodyParser.urlencoded({extended:true}));
//setting database
mongoose.connect('mongodb://127.0.0.1/web').then(console.log("Databse connected succesfully"),
// banner.create({
//     onehead:"1St heading",
//     onedes:'one description',
//     onelink:'www.google.com',
//     twohead:"2nd heading",
//     twodes:"two description",
//     twolink:"www.google.com",
//     threehead:"3rd heading",
//     threedes:"3rd description",
//     threelink:"www.google.com"
// })
// Detail.create({
//     brandName:"Info Technical Solution",
//     brandIconUrl:"https://www.bing.com/images/search?view=detailV2&ccid=tCdTO7SS&id=4CA221B3CF3E921FF9F9E9FED069B0F4B7CB8F0A&thid=OIP.tCdTO7SStYruL1NDaD5qkwHaIe&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b427533bb492b58aee2f5343683e6a93%3frik%3dCo%252fLt%252fSwadD%252b6Q%26riu%3dhttp%253a%252f%252fcdn.onlinewebfonts.com%252fsvg%252fimg_138366.png%26ehk%3dF4mSQQ9S6meroI0L1hgLU2COMR1N%252fzC9tOVNZtVknBA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=980&expw=856&q=brand+icon+images.jpeg&simid=608014258303668700&FORM=IRPRST&ck=F99B49DD3ABE7A5F37F872326CEB8C6C&selectedIndex=0&ajaxhist=0&ajaxserp=0",
//     links:[{
//         label:"Home",
//         url:"/"
//     },{
//         label:"Services",
//         url:"/Services"
//     },
//     {
//         label:"Gallery",
//         url:"/gallery"
//     },{
//         label:"About",
//         url:"/about"
//     },{
//         label:"Contact US",
//         url:"/contact-us"
//     },]
// }),

// Service.create([{
//     icon:'fa-solid fa-users-line service_icon',
//     description:'cxnbzbmcbxnbnxzbhjasbjhdsjhsakjhdskjhs jhbcjhcsjksaghjvsdabsa',
//     title:'Providing best courses for free',
//     linkText:'www.google.com',
//     link:'check'
// },
// {
//     icon:'fa-solid fa-users-line service_icon',
//     description:'cxnbzbmcbxnbnxzbhjasbjhdsjhsakjhdskjhs jhbcjhcsjksaghjvsdabsa',
//     title:'Providing best courses for free',
//     linkText:'www.google.com',
//     link:'checkingnoww'
// },
// {
//     icon:'fa-solid fa-users-line service_icon',
//     description:'cxnbzbmcbxnbnxzbhjasbjhdsjhsakjhdskjhs jhbcjhcsjksaghjvsdabsa',
//     title:'Providing best courses for free',
//     linkText:'www.google.com',
//     link:'yescheck'
// }]),





);
    




app.use('/static',express.static("public"));
app.use('',routes);

app.listen(PORT,()=>{
    console.log(`Server started successfully on port ${PORT}`);
});