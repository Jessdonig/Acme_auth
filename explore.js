const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// const token = 
//   jwt.sign({ name: 'penny' }, 'buttons');

//   const transformBack = jwt.verify(token, "buttons")

//   console.log('token________________________',token);
//   console.log('transformedback',transformBack)

  const hashedPW = bcrypt.hashSync("rainbows123", 10)

  console.log(hashedPW)

  const comparison = bcrypt.compareSync('rainbows123', hashedPW)

  console.log(comparison)
