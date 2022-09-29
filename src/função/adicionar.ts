import PromptSync = require("prompt-sync");
import { handlelistaItens } from "./lista";

const prompt = PromptSync()

export function handleAdicionarItem (estoque: string[]){
    
    handlelistaItens(estoque);
    console.log('Digite um item a sua lista: ');
    const item  = prompt('--> ');

    estoque.push(item);

    console.log(`Item ${item} foi adicionado a lista!`);
}