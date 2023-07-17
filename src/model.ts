export interface ContextType {
    state: State,
    dispatch: React.Dispatch<Actions>,
    productState: StateFilters,
    productDispatch: React.Dispatch<ActionsFilters>
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

interface ProductOnCart {
    id: string,
    name: string,
    price: string,
    image: string,
    inStock: number,
    fastDelivery: boolean,
    ratings: number,
    qty: number
}

export interface State {
    products: ProductType[],
    cart: ProductOnCart[]
}
  
export type Actions =
    | { type: 'ADD_TO_CART' ; payload: ProductType }
    | { type: 'REMOVE_FROM_CART' ; payload: ProductType }
    | { type: 'CHANGE_CART_QTY' ; payload: { id: string, qty: number} } 

export interface StateFilters {
    sort: string,
    byStock: boolean,
    byFastDelivery: boolean,
    byRating: number,
    searchQuery: string
}

export type ActionsFilters = 
    | { type: 'SORT_BY_PRICE' ; payload: string }
    | { type: 'FILTER_BY_STOCK' }
    | { type: 'FILTER_BY_DELIVERY' }
    | { type: 'FILTER_BY_RATING' ; payload: number }
    | { type: 'FILTER_BY_SEARCH' ; payload: string }
    | { type: 'CLEAR_FILTERS' }

