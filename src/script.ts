import { menu } from "./menu/menu";
import { handlemenu2 } from "./menu/menu2";
import { handleAdicionarItem } from "./função/adicionar";
import { handleRemoverItem } from "./função/remover";
import { handleAtualizarItem } from "./função/atualizar";
import { handlelistaItens } from "./função/lista";

const estoque: string[] = [];

let escolha: menu;

do{
    escolha = handlemenu2();
    
    switch(escolha){
        case menu.adicionar:
            handleAdicionarItem(estoque);
            break;

        case menu.remover:
            handleRemoverItem(estoque);
            break;

        case menu.atualizar:
            handleAtualizarItem(estoque);
            break;

        case menu.lista:
            handlelistaItens(estoque);
            break;

        case menu.sair:
            console.log('Encerrado!');
            break;
    }

}while(escolha != menu.sair);
