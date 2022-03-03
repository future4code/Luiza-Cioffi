export type Transaction = {
    valor: number,
    data: Date,
    descrição: string
}

export type Accounts = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>
}
