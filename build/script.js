"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./menu/menu");
var menu2_1 = require("./menu/menu2");
var adicionar_1 = require("./fun\u00E7\u00E3o/adicionar");
var remover_1 = require("./fun\u00E7\u00E3o/remover");
var atualizar_1 = require("./fun\u00E7\u00E3o/atualizar");
var lista_1 = require("./fun\u00E7\u00E3o/lista");
var estoque = [];
var escolha;
do {
    escolha = (0, menu2_1.handlemenu2)();
    switch (escolha) {
        case menu_1.menu.adicionar:
            (0, adicionar_1.handleAdicionarItem)(estoque);
            break;
        case menu_1.menu.remover:
            (0, remover_1.handleRemoverItem)(estoque);
            break;
        case menu_1.menu.atualizar:
            (0, atualizar_1.handleAtualizarItem)(estoque);
            break;
        case menu_1.menu.lista:
            (0, lista_1.handlelistaItens)(estoque);
            break;
        case menu_1.menu.sair:
            console.log('Encerrado!');
            break;
    }
} while (escolha != menu_1.menu.sair);
