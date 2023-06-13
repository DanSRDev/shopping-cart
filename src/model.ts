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
    cart: []
}
  
export interface Actions {
    type: 'x' ; 
    payload: string;
}