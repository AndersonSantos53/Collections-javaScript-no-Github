"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAdicionarItem = void 0;
var PromptSync = require("prompt-sync");
var lista_1 = require("./lista");
var prompt = PromptSync();
function handleAdicionarItem(estoque) {
    (0, lista_1.handlelistaItens)(estoque);
    console.log('Digite um item a sua lista: ');
    var item = prompt('--> ');
    estoque.push(item);
    console.log("Item ".concat(item, " foi adicionado a lista!"));
}
exports.handleAdicionarItem = handleAdicionarItem;
