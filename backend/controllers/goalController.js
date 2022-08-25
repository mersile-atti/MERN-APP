const asyncHandler = require('express-async-handler')
// @desc get goals
// @route GET /api/goals
// @access PRIVATE

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get Goals!!!"})

})

// @desc set goals
// @route POST /api/goals
// @access PRIVATE

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    };
    res.status(200).json({message: "Set Goal!!!"})
})

// @desc update goals
// @route PUT /api/goals
// @access PRIVATE

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc update goals
// @route PUT /api/goals
// @access PRIVATE

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}