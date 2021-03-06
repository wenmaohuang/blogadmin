const mongoose = require("./connect")
const articleInfoDB = require('./articleInfo')

// let Schema = mongoose.Schema;
// let articleSchema = new Schema({
//   type : {type: String,required: true},
//   title : {type: String,required: true},
//   content : {type:String,required: true},
//   tag : {type: String,required: true},
//   year:{type:String,required:true},
//   month:{type:String,required:true},
//   day:{type:String,required:true},
//   updateDate : {type: Date,default: Date.now},
//   date : {type: Date, default: Date.now},
//   surface : {type:String,default: 'http://www.fyyd.vip/img/4.jpg'},
//   pv : {type: Number,default: 0},
//   comment:[
//         {type:Schema.Types.ObjectID,ref:'articleMessage'}
//     ]
// })


let Schema = mongoose.Schema

let articleSchema = new mongoose.Schema({
  type : {type: String,required: true},
  title : {type: String,required: true},
  content : {type:String,required: true},
  tag : {type: String,required: true},
  year:{type:String,required:true},
  month:{type:String,required:true},
  day:{type:String,required:true},
  updateDate : {type: Date,default: Date.now},
  date : {type: Date, default: Date.now},
  surface : {type:String,default: 'https://www.fyyd.vip/img/4.jpg'},
  pv : {type: Number,default: 0},
  comment:[
        {type:Schema.Types.ObjectID,ref:'articleMessage'}
    ]
})

articleSchema.add({readcount:{type:Number,require:true}})




articleSchema.pre("update",function(next){
  this.update = new Date;
  next();
});

//监听添加文章
articleSchema.pre("save",function(next){
  //保存的时候，更新articleInfo表
  articleInfoDB.findOne({})
    .then(data=>{
      if (data){
        //如果已经存在了data 更新num
        articleInfoDB
          .updateOne({},{$inc:{num:1}})
          .then(d=>{}).catch(e=>{})
      }else{
        //如果还没有数据，就新建一条
        articleInfoDB.create({
          num : 1
        });
      }
    })
  next();
});

//监听删除文章
articleSchema.pre("remove",{ query: true, document: false },function(){
  articleInfoDB.findOne({})
    .then(data=>{
      if (data){
        //如果已经存在了data 更新num
        articleInfoDB
          .updateOne({},{$inc:{num:-1}})
          .then(d=>{}).catch(e=>{})
      }
    })
});




let article = mongoose.model("article",articleSchema);


module.exports = article;
