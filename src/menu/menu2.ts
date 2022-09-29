import PromptSync = require("prompt-sync");
import { menu } from "./menu";

const prompt = PromptSync()

let opicao: number;

export function handlemenu2(){

    do{
    
        console.log('1: Adicione um item');
        console.log('2: Remover item');
        console.log('3: Atualizar Lista');
        console.log('4: Mostrar Lista');
        console.log('5: Sair');
    
        opicao = Number(prompt('--> '));

        switch(opicao){
            case 1: 
                return menu.adicionar;
           
            case 2: 
                return menu.remover;
           
            case 3: 
                return menu.atualizar;
           
            case 4: 
                return menu.lista;
           
            case 5:
                return menu.sair;

            default:
                console.clear();
                console.log(`Opção invalida!`)
        }       

    }while(opicao <  1 || opicao > 5);
  
    
}



