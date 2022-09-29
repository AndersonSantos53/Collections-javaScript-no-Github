"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAtualizarItem = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function handleAtualizarItem(estoque) {
    console.log('Atualizar item: ');
    var AtualizarItem = prompt('--> ');
    console.log('Digite o novo Item: ');
    var novoItem = prompt('--> ');
    var contador = 0;
    var atualizadoCS = false;
    estoque.forEach(function (item) {
        if (item == AtualizarItem) {
            console.log('Digite novo item');
            estoque.splice(contador, 1, novoItem);
            console.clear();
            console.log("O item foi atualizado de (".concat(AtualizarItem, ") para (").concat(novoItem, ")!"));
            atualizadoCS = true;
        }
        contador++;
    });
    if (!atualizadoCS) {
        console.clear();
        console.log("O item foi digitado errado ou \u00E9 inexistente!");
    }
}
exports.handleAtualizarItem = handleAtualizarItem;
