import { ProductType } from '../model'

interface Props {
    prod: ProductType,
    key: string
}

const SingleProduct: React.FC<Props> = ({ prod }) => {
  return (
    <div>{prod.name}</div>
  )
}

export default SingleProduct