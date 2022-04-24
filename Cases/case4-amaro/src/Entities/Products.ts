export type product = {
    id: string,
    name: string,
    tag: string
};

export const productsTableName = 'amaroproject_products';

export interface createProductInputDTO {
    name: string,
    tag: string
};

export interface getProductByIdDTO {
    id: string,
};

export function toProductModel(obj: any): product{
    return obj && {
        id: obj.id,
        name: obj.name,
        tag: obj.tag
    }
}