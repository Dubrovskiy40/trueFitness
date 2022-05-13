import { Carousel } from '@trendyol-js/react-carousel';
import './carousel.css';
import CarouselArrowLeft from '../CarouselArrows/CarouselArrowLeft';
import CarouselArrowRight from '../CarouselArrows/CarouselArrowRight';
import CardItem from "../CardItem";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CarouselComp = (props) => {
  const [data, setData] = useState();

  const cardsToShow = 4;
  const dataForRecipeCategories = useSelector((state) => (state.foodCategoriesReducer))
  const dataForTrainings = useSelector((state) => (state.trainingsReducer))

  useEffect(() => {
    if (props.category === 'recipe') {
      setData(dataForRecipeCategories)
    }
    if (props.category === 'trainings') {
      setData(dataForTrainings)
    }
  }, [dataForRecipeCategories, dataForTrainings])

  const showCard = () => {
    console.log('click')
  };

  return (
    <div className='carousel__wrapper'>
      <h2 className='carousel__title'>{props.slider}</h2>
      {data && <Carousel
        show={3.2}
        slide={2}
        swiping={true}
        useArrowKeys={true}
        leftArrow={<CarouselArrowLeft />}
        rightArrow={<CarouselArrowRight />}>
        {data.slice(0, cardsToShow).map((item, idx) => (
          <CardItem item={item} key={idx} category={props.category} />
        ))}
      </Carousel>}
    </div >
  )
}

export default CarouselComp;
