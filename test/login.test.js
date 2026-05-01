import { efetuarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes no fluxo de login de usuário', () => {

    it('Deve retornar: "Login realizado com sucesso", quando informadas credenciais válidas para login', () => {

        // Act
        const validarLogin = efetuarLogin('ghostofsparta@monteolimpo.com', 'IAmTheGodOfWar');

        // Assert
        assert.equal(validarLogin, 'Login realizado com sucesso!');
    });

    it('Deve retornar: "Credencial expirada...", quando usuário estiver setado como expirado = true na base', () => {

        // Act
        const validarLogin = efetuarLogin('estacanocoracao@transilvania.com', 'Aluc@rD');

        // Assert
        assert.equal(validarLogin, 'Credencial expirada. Contate o administrador do sistema.');

    });

    it('Deve retornar: "Credencial de e-mail informada não encontrada", quando e-mail de usuário informado não encontrado na base', () => {

        // Act
        const validarLogin = efetuarLogin('johnkramer@jigsaw.com', 'iwanttoplayagame');

        // Assert
        assert.equal(validarLogin, 'Credencial de e-mail informada não encontrada.');

    });

    it('Deve retornar: "Credencial informada está incorreta", para usuário encontrado na base mas com a senha informada incorreta.', () => {

        // Act
        const validarLogin = efetuarLogin('peregrinopinzento@terramedia.com', 'YouShallNotPass!');

        //Assert
        assert.equal(validarLogin, 'Credencial informada está incorreta. Verifique a senha informada.');

    });

    it('Deve retornar: "Informe e-mail e senha do usuário para efetuar o login no site", quando o e-mail não for informado', () => {

        // Act & Assert
        assert.throws(
            function () { efetuarLogin('', 'IKnowWhatYouDidLastSummer') },
            {
                message: 'Informe e-mail e senha do usuário para efetuar o login no site.'
            }
        );

    });

    it('Deve retornar: "Informe e-mail e senha do usuário para efetuar o login no site", quando a senha não for informada', () => {

        // Act & Assert
        assert.throws(
            function () { efetuarLogin('IKnowWhatYouDid@LastSummer.com', '') },
            {
                message: 'Informe e-mail e senha do usuário para efetuar o login no site.'
            }
        );

    });

});