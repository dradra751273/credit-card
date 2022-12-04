const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')
const USER = require('../models/userModel')


exports.showLoginPage = catchAsync(async (req, res, next) => {
  res.render('./home/login')
})


async function nameChecker(name, users) {
  let userNameList = undefined

  if (users) {
    userNameList = users.map(user => {
      return user['name']
    })
    return userNameList.includes(name)
  }

  return false
}

async function nameAndPasswordChecker(name, password) {
  const users = await USER.find().lean()

  if (!await nameChecker(name, users)) throw new AppError('wrongName', 400)

  const user = users.find(user => {
    return user['name'] === name
  })

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