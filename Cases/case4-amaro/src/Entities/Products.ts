export type product = {
    id: number,
    name: string,
    tag: string
}

export const productsTableName = 'amaroproject_products'

export interface createProductInputDTO {
    name: string,
    tag: string
}