const { autentica, verificaToken } = require('./auth');

// Exemplo de uso da função autentica
const usuario = {
  nome: 'admin',
  senha: 'admin'
};

autentica(usuario)
  .then((usuario) => {
    console.log('Usuário autenticado:', usuario);
  })
  .catch((error) => {
    console.log('Erro ao autenticar usuário:', error);
  });

// Exemplo de uso da função verificaToken
const req = {
  headers: {
    'x-access-token': 'token_jwt_aqui'
  }
};

const res = {
  status: function(code) {
    this.statusCode = code;
    return this;
  },
  json: function(data) {
    console.log(data);
  }
};

verificaToken(req, res, () => {
  console.log('Token válido! Próximo passo...');
});
