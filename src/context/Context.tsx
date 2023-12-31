import { createContext, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";
import { ContextType, ProductType, State, StateFilters } from "../model";

interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  products: [],
  cart: [],
};

const initialFiltersState: StateFilters = {
  sort: "",
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
};

const Cart = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
  productState: initialFiltersState,
  productDispatch: () => null,
});

faker.seed(99); //Para que faker genere los mismos datos

const Context: React.FC<Props> = ({ children }) => {
  const products: ProductType[] = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    sort: "",
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
