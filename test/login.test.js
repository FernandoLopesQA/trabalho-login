import { efetuarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes no fluxo de login de usuário', () => {

    it('Deve retornar: "Login realizado com sucesso", quando informadas credenciais válidas para login', () => {

        //Arrange
        const email = 'ghostofsparta@monteolimpo.com';
        const senha = 'IAmTheGodOfWar';

        // Act
        const validarLogin = efetuarLogin(email, senha);

        // Assert
        assert.equal(validarLogin, 'Login realizado com sucesso!');
    });

    it('Deve retornar: "Credencial expirada...", quando usuário estiver setado como expirado = true na base', () => {

        //Arrange
        const email = 'estacanocoracao@transilvania.com';
        const senha = 'Aluc@rD';

        // Act
        const validarLogin = efetuarLogin(email, senha);

        // Assert
        assert.equal(validarLogin, 'Credencial expirada. Contate o administrador do sistema.');
    });

    it('Deve retornar: "Credencial de e-mail informada não encontrada", quando e-mail de usuário informado não encontrado na base', () => {

        //Arrange
        const email = 'johnkramer@jigsaw.com';
        const senha = 'iwanttoplayagame';

        // Act
        const validarLogin = efetuarLogin(email, senha);

        // Assert
        assert.equal(validarLogin, 'Credencial de e-mail informada não encontrada.');
    });

    it('Deve retornar: "Credencial informada está incorreta", para usuário encontrado na base mas com a senha informada incorreta.', () => {

        //Arrange
        const email = 'peregrinopinzento@terramedia.com';
        const senha = 'YouShallNotPass!';

        // Act
        const validarLogin = efetuarLogin(email, senha);

        //Assert
        assert.equal(validarLogin, 'Credencial informada está incorreta. Verifique a senha informada.');
    });

    it('Deve retornar: "Informe e-mail e senha do usuário para efetuar o login no site", quando o e-mail não for informado', () => {

        //Arrange
        const email = '';
        const senha = 'IKnowWhatYouDidLastSummer!';

        // Act & Assert
        assert.throws(
            function () { efetuarLogin(email, senha) },
            {
                message: 'Informe e-mail e senha do usuário para efetuar o login no site.'
            }
        );
    });

    it('Deve retornar: "Informe e-mail e senha do usuário para efetuar o login no site", quando a senha não for informada', () => {

        //Arrange
        const email = 'IKnowWhatYouDid@LastSummer.com';
        const senha = '';

        // Act & Assert
        assert.throws(
            function () { efetuarLogin(email, senha) },
            {
                message: 'Informe e-mail e senha do usuário para efetuar o login no site.'
            }
        );
    });
});