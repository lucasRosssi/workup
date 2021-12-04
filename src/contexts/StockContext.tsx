import { createContext } from "react";

export const StockContext = createContext([
    {
        id: '1',
        name: 'Água Mineral',
        available: true,
    },
    {
        id: '2',
        name: 'Esfiha de Carne',
        available: true,

    },
    {
        id: '3',
        name: 'Suco de Maracujá',
        available: false,
    },
    {
        id: '4',
        name: 'Coca-cola',
        available: true,
    },
    {
        id: '5',
        name: 'Suco de Cranberry',
        available: false,
    },
    {
        id: '6',
        name: 'Pastel de Forno',
        available: true,
    }
]
)