import { createContext } from "react";

export const BalanceContext = createContext({
    input: [
        {
            id: '1',
            name: 'Dinheiro',
            value: 900
        },
        {
            id: '2',
            name: 'Cartão de Crédito',
            value: 230
        },
        {
            id: '3',
            name: 'Pix',
            value: 670
        },
        {
            id: '4',
            name: 'Transferência',
            value: 340
        }
    ],
    output: [
        {
            id: '1',
            name: 'Hortifruti',
            value: 120
        },
        {
            id: '2',
            name: 'Reparos',
            value: 560
        },
        {
            id: '3',
            name: 'Copos',
            value: 200
        },
        {
            id: '4',
            name: 'Pães',
            value: 440
        }
    ]
})