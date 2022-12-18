exports.allAccess = (req, res) => {
  res.status(200).send('public content')
}

exports.userBoard = (req, res) => {
  res.status(200).send('User content')
}

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content')
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator content')
}