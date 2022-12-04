const handleEmptyInput = (req, res) => {
  const {name, password} = req.body
  let errorMessage = {}
  if (name.trim() === '' && password.trim() === '') {
    errorMessage = {message: 'Please enter your name and password!'}
  }

  if (name.trim() === '' && password.trim() !== '') {
    errorMessage = {message: 'Please enter your name!'}
  }

  if (name.trim() !== '' && password.trim() === '') {
    errorMessage = {message: 'Please enter your password!'}
  }
  res.render('./home/login', {errorMessage})
}

const handleWrongName = (req, res) => {
  const errorMessage = {message: 'You are not the person I\'m looking for!'}
  res.render('./home/login', {errorMessage})
}

const handleWrongPassword = (req, res) => {
  const errorMessage = {message: 'Do you remember the thing you don\'t eat?'}
  res.render('./home/login', {errorMessage})

}


exports.globalErrHandler = function (err, req, res, next) {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (err.message === 'emptyInput') handleEmptyInput(req, res)
  if (err.message === 'wrongName') handleWrongName(req, res)
  if (err.message === 'wrongPassword') handleWrongPassword(req, res)

}
