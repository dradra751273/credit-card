const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')


exports.showLoginPage = catchAsync(async (req, res, next) => {
  res.render('./home/login')
})

exports.verifyLogin = catchAsync(async (req, res, next) => {
  const {name, password} = req.body

  // ★Errors
  // 1) Empty input
  if (name.trim() === '' || password.trim() === '') {
    throw new AppError('emptyInput', 400)
  }
  if (name !== '呂涵瑩') {
    throw new AppError('wrongName', 400)
  }

  if (name === '呂涵瑩' && password !== '虧') {
    throw new AppError('wrongPassword', 400)
  }

  // ★
  res.redirect('/restaurants')

})