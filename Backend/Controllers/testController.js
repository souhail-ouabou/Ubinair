import asyncHandler from 'express-async-handler'

//@desc  Get goals
//@route  Get /api/test
//@acces  Get Private

const getTests = asyncHandler(async(req,res)=>{
    res.status(200).json({message: 'Get Tests'})
})
// @desc    Set goal
// @route   POST /api/test
// @access  Private
const setTest=  asyncHandler(async(req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    res.status(200).json({message: 'Set Test'})
  })

module.exports={
    getTests,
    setTest
}