"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRemoverItem = void 0;
var PromptSync = require("prompt-sync");
var lista_1 = require("./lista");
var prompt = PromptSync();
function handleRemoverItem(estoque) {
    console.clear();
    (0, lista_1.handlelistaItens)(estoque);
    console.log('Remova um item da lista: ');
    var removerItem = prompt('--> ');
    var contador = 0;
    var apagadoCS = false;
    estoque.forEach(function (item) {
        if (item == removerItem) {
            estoque.splice(contador, 1);
            contador++;
            console.clear();
            console.log("O item foi removido!");
            apagadoCS = true;
        }
    });
    if (!apagadoCS) {
        console.log("O item foi digitado errado ou \u00E9 inexistente!");
    }
}
exports.handleRemoverItem = handleRemoverItem;
