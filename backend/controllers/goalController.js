const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
const User = require('../model/userModel')

// @desc get goals
// @route GET /api/goals
// @access PRIVATE

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    
    res.status(200).json(goals)

})

// @desc set goals
// @route POST /api/goals
// @access PRIVATE

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    };

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc update goals
// @route PUT /api/goals
// @access PRIVATE

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found!')
    }

    const user = await User.findById(req.user.id)

    //check for user

    if(!user) {
        res.status(401)
        throw new Error('User not found!')
    }
    
    //Make sure the logged in user matches the goal user
if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authoriezd')
}

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    } )
    res.status(200).json(updatedGoal)
})

// @desc update goals
// @route PUT /api/goals
// @access PRIVATE

const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found!')
    }

    const user = await User.findById(req.user.id)

    //check for user

    if(!user) {
        res.status(401)
        throw new Error('User not found!')
    }
    
    //Make sure the logged in user matches the goal user
if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authoriezd')
}

    const deledGoal = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}