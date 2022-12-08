"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "FAQ_Questions",
      [
        {
          title: "Não lembro minhas informações de login.",
          text: "Se você não se lembrar da sua senha, use a [página de redefinição de senha](#). \n\nSe não se lembrar do seu e-mail ou nome de usuário, acesse a página de redefinição de senha e insira os endereços de e-mail que você pode ter usado para criar uma conta. Quando o endereço registrado no Spotify for inserido, aparecerá uma mensagem dizendo que o e-mail de redefinição de senha foi enviado.\n\n**Observação:** existem várias maneiras de se inscrever: usando um e-mail, um número de telefone, o Facebook, a Apple ou o Google. Tente fazer login usando essas opções para localizar sua conta.",
        },
        {
          title: "Não consigo redefinir a senha.",
          text: "Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta do Spotify para abrir o link de redefinição de senha que nós enviamos. \n\nCaso você não tenha acesso, estas são algumas opções: \n- Recupere o acesso ao endereço de e-mail, se possível. \n- [Crie uma nova conta](/users/register) e comece do zero.",
        },
        {
          title: "Formas de pagamento.",
          text: "Você pode pagar pelo Spotify Premium de muitas maneiras: \n- Cartão de crédito/débito; \n- Cartões pré-pagos; \n- PayPal; \n- Vales-presente; \n- Pagamento móvel; \n- Plano pré-pago. \n\n**Observação:** os métodos variam de acordo com o país ou região.",
        },
        {
          title: "Como funciona o plano Família.",
          text: "O Premium Família é um plano com desconto para até 6 pessoas que moram juntas. \n\n Como cada membro do plano usa sua própria conta, não é necessário compartilhar uma senha e todo mundo pode manter suas próprias músicas e playlists salvas. \n\n O Premium Família inclui: \n- **Match:** uma playlist compartilhada que combina o seu gosto musical com o de outras pessoas. \n- O **Spotify Kids**, um app repleto de músicas para cantar junto, trilhas sonoras e playlists feitas especialmente para crianças. \n- Filtros de conteúdo explícito, para que o administrador do plano possa permitir ou bloquear músicas com conteúdo explícito para membros específicos do plano.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FAQ_Questions", null, {});
  },
};
