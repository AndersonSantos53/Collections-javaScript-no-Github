import PromptSync = require("prompt-sync");

const prompt = PromptSync();


export function handleAtualizarItem (estoque:string[]){
    
    console.log('Atualizar item: ');
    const AtualizarItem = prompt ('--> ');
    console.log('Digite o novo Item: ')
    const novoItem = prompt ('--> ');
    let contador: number= 0;
    let atualizadoCS = false;

    estoque.forEach(item =>{
        if(item == AtualizarItem){
            console.log('Digite novo item');

            estoque.splice(contador,1,novoItem)
            console.clear()
            console.log(`O item foi atualizado de (${AtualizarItem}) para (${novoItem})!`);
            atualizadoCS = true;
        }
        contador ++;
    })

    if(!atualizadoCS){
        console.clear();
        console.log(`O item foi digitado errado ou é inexistente!`);
    }
}
