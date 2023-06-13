// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// function autentica(usuario) {
//   // Avaliar se o usuário e a senha existem no banco de dados
//   // A SENHA DEVE SER CRIPTOGRAFADA ANTES DE GRAVAR NO BANCO DE DADOS
//   console.log('Autenticador');

//   if (usuario.nome === 'admin' && usuario.senha === 'admin') {
//     console.log('Existe');
//     const id = 123; 
//     const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: '1h' });
//     usuario.id = id;
//     usuario.auth = true;
//     usuario.token = token;
//   } else {
//     console.log('Não existe');
//     usuario.id = '';
//     usuario.auth = false;
//     usuario.token = '';
//   }

//   return usuario;
// }

// function verificaToken(req, res, next) {
//   const token = req.headers['x-access-token'];
//   if (!token)
//     return res
//       .status(401)
//       .json({ auth: false, message: 'Token não informado' });

//   jwt.verify(token, process.env.SECRET, (err) => {
//     if (err) {
//       return res
//         .status(401)
//         .json({ auth: false, message: 'A autenticação falhou' });
//     }
//     next();
//   });
// }

// module.exports = {
//   autentica,
//   verificaToken
// };
