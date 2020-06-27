const express = require('express')
let router = express.Router()
const articleDB = require("../../db/article");



router.post('/add', (req, res) => {

  let { type, title, tag,year,month,day, content, surface } = req.body;
  console.log(type, ',,,,,,');
  console.log(req.body,'mmm');

  //后端数据验证
  if (!type || !title || !tag || !year || !month || !day || !content) {
    res.send({
      code: 1,
      msg: "数据不完整",
    });
    return;
  }

  /*数据库存储*/
  articleDB.create(
    surface ? { type, title, tag,year,month,day, content, surface } : { type, title, tag,year,month,day, content }
  ).then(d => {
    res.send({
      code: 0,
      msg: "发表成功666666!!!!!"
    })
  }).catch(() => {
    res.send({
      code: 4,
      msg: "发表失败，请稍后再试"
    })
  })
})

router.post('/delete',(req,res)=>{
  console.log(req.body,'bbb')
  let title = req.body.title
  articleDB.deleteOne({title:title})
  .then(data=>{
      res.send({
          code:'hhh'
      })
  })
  .catch(err=>{
      res.send({
          code:'err'
      })
  })
  
})

router.post('/getShowTitle', (req, res) => {
  let {skip, limit, tag} = req.body
  let options = tag ? {tag} : {}
  // console.log(skip, limit, tag,'test');

  articleDB.find(options, {__v:0}, {skip, limit,sort:{pv:-1}})
      .then(data => {
          res.send({
              code: 0,
              data,

          })
      })
      .catch(err => {
          res.send({
              code: 4,
              msg: '服务器错误'
          })
      })
})

router.post('/edit',(req,res)=>{

  let { type, title, tag, content, surface } = req.body;
  // console.log(type, ',,,,,,');
  // console.log(req.body,'mmm');

  //后端数据验证
  if (!type || !title || !tag || !content) {
    res.send({
      code: 1,
      msg: "数据不完整",
    });
    return;
  }

  /*数据库存储*/
  articleDB.updateOne(
    surface ? { type, title, tag, content, surface } : { type, title, tag, content }
  ).then(d => {
    res.send({
      code: 0,
      msg: "发表成功666666!!!!!"
    })
  }).catch(() => {
    res.send({
      code: 4,
      msg: "发表失败，请稍后再试"
    })
  })
})

module.exports = router
