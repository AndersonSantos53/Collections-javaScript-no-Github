import PromptSync = require("prompt-sync");
import { handlelistaItens } from "./lista";

const prompt = PromptSync();

export function handleRemoverItem (estoque:string[]){
    
    console.clear();
    handlelistaItens(estoque);

    console.log('Remova um item da lista: ');
    const removerItem = prompt ('--> ');

    let contador: number= 0;
    let apagadoCS = false;

    estoque.forEach(item =>{
        if(item == removerItem){
            estoque.splice(contador,1);
            contador ++;
            console.clear();
            console.log(`O item foi removido!`);
            
            apagadoCS = true;
        }
    
    })
    
    if(!apagadoCS){
        console.log(`O item foi digitado errado ou é inexistente!`);
    }   
    
}