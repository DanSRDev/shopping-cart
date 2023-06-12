export interface ContextType {
    state: State,
    dispatch: React.Dispatch<Actions>
}

export interface Products {
    id: string,
    name: string,
    price: string,
    image: string,
    instock: number,
    fastDelivery: boolean,
    ratings: number

}

export interface State {
    products: Products[],
    cart: []
}
  
export interface Actions {
    type: 'x' ; 
    payload: string;
}