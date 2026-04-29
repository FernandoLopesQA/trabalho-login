const usuarios = [
    { id: 1, nome: 'Van Helsing', email: 'estacanocoracao@transilvania.com', senha: 'Aluc@rD', expirado: true },
    { id: 2, nome: 'Olórin Galdalf', email: 'peregrinopinzento@terramedia.com', senha: 'YouShallNotPass', expirado: false },
    { id: 3, nome: 'Darth Vader', email: 'anakinskywalker@imperiogalactico', senha: 'Sithrules', expirado: false },
    { id: 4, nome: 'Kratos', email: 'ghostofsparta@monteolimpo.com', senha: 'IAmTheGodOfWar', expirado: false },
    { id: 5, nome: 'Eddie Brock', email: 'venom@klyntar.com', senha: 'MelhorSimbionte', expirado: false }
];

export function efetuarLogin(email, senha) {

    if (email == '' || senha == '') {
        return 'Informe e-mail e senha do usuário para efetuar o login no site';
    };

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].email == email) {

            if (usuarios[i].expirado == true) {
                return 'Credenciais expiradas. Contate o administrador do sistema.';
                break;
            };

            if (usuarios[i].senha !== senha) {
                return 'Credencial informada está incorreta. Revise e-mail e senha informados.';
                break;
            };

            return 'Login realizado com sucesso!';

        };
    };

    return 'Credencial de e-mail informado não encontrado';

};