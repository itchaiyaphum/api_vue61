const express = require('express')
const router = express.Router()

//const db = require('../lib/db')//  .. ออกมาก่อน

module.exports = router
//      /student
//      /student/
router.get('/', function (req, res) {
      let db = req.db   //มาจาก middleware req.db = require('./lib/db')
    db('pk_student')
    .where('std_code','=', req.query.id) // ถ้ามีหลาย เงื่อนไข WHERE เรื่อยๆ
    .where('std_gender','=','ญ')
    .then( rows =>{
      res.send({               // ส่งกลับไป รูปแบบ  json   oject
          status : true,
          data: rows,
      })   
    }).catch(error => {
       console.log('ERROR1', error)
      res.send({
         status:false,
         error: 'เกิดข้อผิดพลาด',
      })
    })
})

//      /student/save
router.post('/save', function(req, res){
  let db = req.db
  // db('pk_student').where({std_id: 4395}).update({
  //   std_name:req.body.name,
  // })
  // YPDATE  pk_student
 return db('pk_student').insert({
    std_name: req.body.name
  },'std_id').then(ids =>{
    console.log('ids',ids)
    console.log(ids[0])
    res.send({
      status: true,
    })
  }).catch(error => {
    console.log('ERROR1', error)
   res.send({
      status:false,
      error: 'เกิดข้อผิดพลาด',
    })
  })
  console.log('xxxxxxx')
})
 router.get('/about',function (req, res){
   res.send('About birds')
 })