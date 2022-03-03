export type Transaction = {
    valor: number,
    data: Date,
    descrição: string
}

export type accounts = {
    name: string,
    cpf: string,
    dateOfBirthday: Date,
    balance: number,
    statement: Array<Transaction>
}
