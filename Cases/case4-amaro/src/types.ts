export type product = {
    id: number,
    name: string
    tag: string[]
}

export type tag = {
    name: string
}

export const productsTableName = 'amaro_products'
export const tagsTableName = 'amaro_tags'
export const productsTagsRelations = 'amaro_relations'