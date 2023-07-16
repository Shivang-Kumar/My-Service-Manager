const mongoose=require('mongoose');
const banner=mongoose.Schema({
    onehead:String,
    onedes:String,
    onelink:String,
    twohead:String,
    twodes:String,
    twolink:String,
    threehead:String,
    threedes:String,
    threelink:String,
})

module.exports=mongoose.model('banner',banner);