import { createContext, useReducer, useContext } from "react"
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducers";
import { ContextType, Products } from "../model";

const Cart = createContext< ContextType | null>(null);

interface Props {
  children: JSX.Element;
}


const Context = ({ children }: Props ) => {

  const products: Products[] = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    instock: faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1,2,3,4,5])
  }))

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  return < Cart.Provider value={{ state, dispatch }}>
    {children}
  </Cart.Provider>
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}