"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlemenu2 = void 0;
var PromptSync = require("prompt-sync");
var menu_1 = require("./menu");
var prompt = PromptSync();
var opicao;
function handlemenu2() {
    do {
        console.log('1: Adicione um item');
        console.log('2: Remover item');
        console.log('3: Atualizar Lista');
        console.log('4: Mostrar Lista');
        console.log('5: Sair');
        opicao = Number(prompt('--> '));
        switch (opicao) {
            case 1:
                return menu_1.menu.adicionar;
            case 2:
                return menu_1.menu.remover;
            case 3:
                return menu_1.menu.atualizar;
            case 4:
                return menu_1.menu.lista;
            case 5:
                return menu_1.menu.sair;
            default:
                console.clear();
                console.log("Op\u00E7\u00E3o invalida!");
        }
    } while (opicao < 1 || opicao > 5);
}
exports.handlemenu2 = handlemenu2;
