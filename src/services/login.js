const { autentica, verificaToken } = require('./auth');

// Exemplo de uso da função autentica
const autenticarUsuario = async (usuario) => {
  try {
    const usuarioAutenticado = await autentica(usuario);
    console.log('Usuário autenticado:', usuarioAutenticado);
  } catch (error) {
    console.log('Erro ao autenticar usuário:', error);
  }
};

const usuario = {
  nome: 'admin',
  senha: 'admin'
};

autenticarUsuario(usuario);

// Exemplo de uso da função verificaToken
const verificarToken = (token) => {
  const req = {
    headers: {
      'x-access-token': token
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
};

const tokenJWT = 'token_jwt_aqui';
verificarToken(tokenJWT);
