const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')
const USER = require('../models/userModel')


exports.showLoginPage = catchAsync(async (req, res, next) => {
  res.render('./home/login')
})


async function nameAndPasswordChecker(name, password) {
  const users = await USER.find().lean()
  const user = users.find(user => {
    return user['name'] === name
  })
  // No user found
  if (!user) throw new AppError('wrongName', 400)
  // Wrong password
  if (user['password'] !== password) throw new AppError('wrongPassword', 400)
}

exports.verifyLogin = catchAsync(async (req, res, next) => {
  const {name, password} = req.body

  // ★Errors
  // 1) Empty input
  if (name.trim() === '' || password.trim() === '') {
    throw new AppError('emptyInput', 400)
  }
  // 2) check name and password
  await nameAndPasswordChecker(name, password)

  // ★
  res.redirect('/restaurants')

})