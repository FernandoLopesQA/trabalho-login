import { efetuarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes fluxo de login', () => {

    it('Login com Sucesso', () => {

        //Arrange e Act
        const validarLogin = efetuarLogin('ghostofsparta@monteolimpo.com', 'IAmTheGodOfWar');

        //Assert
        assert.equal(validarLogin, 'Login realizado com sucesso!');
    });

    it('Credencial expirada', () => {

        //Arrange e Act
        const validarLogin = efetuarLogin('estacanocoracao@transilvania.com', 'Aluc@rD');

        //Assert
        assert.equal(validarLogin, 'Credenciais expiradas. Contate o administrador do sistema.');

    });

    it('Usuario não encontrado', () => {

        //Arrange e Act
        const validarLogin = efetuarLogin('johnkramer@jigsaw.com', 'iwanttoplayagame');

        //Assert
        assert.equal(validarLogin, 'Credencial de e-mail informado não encontrada.');

    });

    it('Senha incorreta para o usuário encontrado.', () => {

        //Arrange e Act
        const validarLogin = efetuarLogin('peregrinopinzento@terramedia.com', 'YouShallNotPass!');

        //Assert
        assert.equal(validarLogin, 'Credencial informada está incorreta. Verifique a senha informada.');

    });

    it('e-mail não informado', () => {

        // Act & Assert
        assert.throws(
            function () { efetuarLogin('', 'IKnowWhatYouDidLastSummer') },
            {
                message: 'Informe e-mail e senha do usuário para efetuar o login no site.'
            }
        );

    });

    it('senha não informada', () => {

        // Act & Assert
        assert.throws(
            function () { efetuarLogin('IKnowWhatYouDid@LastSummer.com', '') },
            {
                message: 'Informe e-mail e senha do usuário para efetuar o login no site.'
            }
        );

    });

});