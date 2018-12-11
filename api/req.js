const express = require('express')
const router = express.Router()

module.exports = router

router.use('/trainee',require('./req-trainee'))
// router.use('/a',require('./req-a'))
// router.use('/b',require('./req-b'))
// router.use('/c',require('./req-c'))
router.get('/major', async (req, res) => {
    let data = await req.db('major')
    .orderBy('major_code')
    .select(['major_code','major_name'])
    res.send({
        status: true,
        data,
    })
})

router.post('/manpower', async (req, res) => {
// TODO:
 try {
 // let id =await req.db('req_human_power').insert(req.body).then(ids => ids[0])
  let id =await req.db('req_human_power').insert({
      major_id: req.body.majorId, 
      business_id: req.body.businessId, 
      level: req.body.level, 
      male: req.body.male, 
      female: req.body.female, 
  }).then(ids => ids[0])
  if(!id){
      throw new Error('insert Error')
  }
   res.send({ status: oka })
} catch (e){
    res.send({status: false, error: e.massage})
}
})