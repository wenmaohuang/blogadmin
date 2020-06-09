const express = require('express')
let router = express.Router()
const articleDB = require("../../db/article");



router.post('/add', (req, res) => {

  let { type, title, tag, content, surface } = req.body;
  console.log(type, ',,,,,,');
  console.log(req.body,'mmm');

  //后端数据验证
  if (!type || !title || !tag || !content) {
    res.send({
      code: 1,
      msg: "数据不完整",
    });
    return;
  }

  /*数据库存储*/
  articleDB.create(
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

router.post('/delete',(req,res)=>{
  console.log(req.body);
  
})

module.exports = router
