import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface Props {
  rating: number,
  onClick: (i:number) => void,
  style?: React.CSSProperties;
}

const Rating: React.FC<Props> = ({ rating, onClick, style}) => {
  return (
    <>
    {
      // We're not going to take anything from the map so let's keep undersocre over here
      // but we do wnat the index so we're going to take the index
      [...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          { rating > i? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))
    }
    </>
  )
}

export default Rating