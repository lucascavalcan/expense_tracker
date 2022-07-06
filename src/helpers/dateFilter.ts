// Lista de funções que vai fazer filtragens baseado em data
// Tudo que for relacionado a manipulação de datas

import {Item} from "../types/Item";

//Função para pegar o mês atual
export const getCurrentMonth = () => {
    let now = new Date();   /*pegar a data atual*/
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

//Filtra a lista pelo mês (recebe a lista geral e retorna uma nova lista baseada no mês escolhido)
export const filterListByMonth = (list: Item[], date: string): Item[] => { //vai retornar um array de Item (pois retorna uma nova lista)  
    let newList: Item[] = [];
    let [year, month] = date.split("-");

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

//Função para formatar uma data
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZero(day)}/${addZero(month)}/${year}`;
}

const addZero = (n: number): string => n < 10 ? `0${n}` : `${n}`;


//Função que formata o currentMonth (para mostrar no InfoArea)
export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split("-");
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


    return `${months[parseInt(month) - 1]} de ${year}`
}