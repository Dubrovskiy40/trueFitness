import { Carousel } from '@trendyol-js/react-carousel';
import './carousel.css';
import CarouselArrowLeft from '../CarouselArrows/CarouselArrowLeft';
import CarouselArrowRight from '../CarouselArrows/CarouselArrowRight';
import useFetch from '../useFetch/useFetch';
import CardItem from "../CardItem";

const CarouselComp = (props) => {
  const { data, isLoading, error } = useFetch('http://localhost:8000/' + props.link);


  return (
    <div className='carousel__wrapper'>
      <h2 className='carousel__title'>{props.slider}</h2>
      {error && <h5>{error}</h5>}
      {isLoading && <h5>Loading...</h5>}
      {data && < Carousel
        show={3.1}
        slide={2}
        swiping={true}
        useArrowKeys={true}
        leftArrow={<CarouselArrowLeft />}
        rightArrow={<CarouselArrowRight />}>
        {data.map((item) => (
            <CardItem item={item}/>
        ))}
      </Carousel>}
    </div >
  )
}

export default CarouselComp;
