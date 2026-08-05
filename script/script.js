$(document).ready(function () {

    $(".accordion-titulo").click(function () {

        const botaoClicado = $(this);

        const itemClicado = botaoClicado.closest(
            ".accordion-item"
        );

        const conteudoClicado = botaoClicado.next(
            ".accordion-conteudo"
        );

        const itemEstavaAberto = itemClicado.hasClass(
            "ativo"
        );

        // Fecha todos os itens
        $(".accordion-item").removeClass("ativo");

        $(".accordion-conteudo").stop(true, true).slideUp();

        $(".accordion-icone").text("+");

        $(".accordion-titulo").attr(
            "aria-expanded",
            "false"
        );

        // Abre o item clicado somente se ele estava fechado
        if (!itemEstavaAberto) {

            itemClicado.addClass("ativo");

            conteudoClicado
                .stop(true, true)
                .slideDown();

            botaoClicado
                .find(".accordion-icone")
                .text("−");

            botaoClicado.attr(
                "aria-expanded",
                "true"
            );
        }

    });

});