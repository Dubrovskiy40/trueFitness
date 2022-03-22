import { Carousel } from '@trendyol-js/react-carousel';
import './carousel.css';
import CarouselArrowLeft from '../CarouselArrows/CarouselArrowLeft';
import CarouselArrowRight from '../CarouselArrows/CarouselArrowRight';
import useFetch from '../useFetch/useFetch';

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
          <a target="_blank" href={item.link} key={item.id}>
            <img
              src={require("../../images/carousel/" + item.backgroundImg)}
              className="carousel__item__img"
              alt=""
            />
            <h3 className={"carousel__item__heading " + item.headingPosition}>{item.heading}</h3>
          </a>
        ))}
      </Carousel>}
    </div >
  )
}

export default CarouselComp;