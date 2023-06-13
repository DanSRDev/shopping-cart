export interface ContextType {
    state: State,
    dispatch: React.Dispatch<Actions>
}

export interface ProductType {
    id: string,
    name: string,
    price: string,
    image: string,
    inStock: number,
    fastDelivery: boolean,
    ratings: number
}

export interface State {
    products: ProductType[],
    cart: ProductType[]
}
  
export type Actions =
    | { type: 'ADD_TO_CART' ; payload: ProductType }
    | { type: 'REMOVE_FROM_CART' ; payload: ProductType }
