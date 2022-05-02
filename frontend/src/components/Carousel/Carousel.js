import { Carousel } from '@trendyol-js/react-carousel';
import './carousel.css';
import CarouselArrowLeft from '../CarouselArrows/CarouselArrowLeft';
import CarouselArrowRight from '../CarouselArrows/CarouselArrowRight';
import useFetch from '../useFetch/useFetch';
import CardItem from "../CardItem";
import { useEffect, useState } from 'react';

const CarouselComp = (props) => {
  // const { data, isLoading, error } = useFetch('http://localhost:8000/' + props.link);
  // Кастомный хук выше работает на локальном json сервере, 
  // можно будет переделать, когда заработает бэк

  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Dubrovskiy40/trueFitness/develop/frontend/data/db.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let link = props.link
        setData(data[link]);
      });
  }, [])


  return (
    <div className='carousel__wrapper'>
      <h2 className='carousel__title'>{props.slider}</h2>
      {/* {error && <h5>{error}</h5>}
      {isLoading && <h5>Loading...</h5>} Строки работают с кастомным хуком */}
      {data && <Carousel
        show={3.2}
        slide={2}
        swiping={true}
        useArrowKeys={true}
        leftArrow={<CarouselArrowLeft />}
        rightArrow={<CarouselArrowRight />}>
        {data.map((item, idx) => (
          <CardItem item={item} key={idx} />
        ))}
      </Carousel>}
    </div >
  )
}

export default CarouselComp;
