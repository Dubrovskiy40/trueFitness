import { Carousel } from '@trendyol-js/react-carousel';
import { useState } from 'react';
import './carousel.css';
import workouteImg1 from '../../images/carousel/workouteImg1.png'
import CarouselArrowLeft from '../CarouselArrows/CarouselArrowLeft';
import CarouselArrowRight from '../CarouselArrows/CarouselArrowRight';

const CarouselComp = (props) => {
  const [carouselWorkoutsItem, setCarouselWorkoutsItem] = useState([
    { background: 'lightgray', heading: 'Пресс будет гореть!', link: '#', id: 'workoutImage1' },
    { background: 'lightgray', heading: 'Тренировка на верхнюю часть тела', link: '#', id: 'workoutImage2' },
    { background: 'lightgray', heading: 'Круговая тренировка', link: '#', id: 'workoutImage3' },
    { background: 'lightgray', heading: 'Тренировка с инвентарём', link: '#', id: 'workoutImage4' },
    { background: 'lightgray', heading: 'Что то ещё', link: '#', id: 'workoutImage5' },
    { background: 'lightgray', heading: 'И что то ещё', link: '#', id: 'workoutImage6' }
  ]);
  const [carouselRecipesItem, setCarouselRecipesItem] = useState([
    { background: '#FF6118', heading: 'Салаты', link: '#', id: 'recipeImage1' },
    { background: '#FF6118', heading: 'Десерты', link: '#', id: 'recipeImage2' },
    { background: '#FF6118', heading: 'Первое блюдо', link: '#', id: 'recipeImage3' },
    { background: '#FF6118', heading: 'Второе блюдо', link: '#', id: 'recipeImage4' },
    { background: '#FF6118', heading: 'И третье блюдо', link: '#', id: 'recipeImage5' },
    { background: '#FF6118', heading: 'И кажется похудение отменяется', link: '#', id: 'recipeImage6' }
  ]);

  let slider = null;
  if (props.slider === 'Тренировки') {
    slider = carouselWorkoutsItem;
  } else {
    slider = carouselRecipesItem
  }

  return (
    <div className='carousel__wrapper'>
      <h2 className='carousel__title'>{props.slider}</h2>
      <Carousel
        show={3.1}
        slide={2}
        swiping={true}
        useArrowKeys={true}
        leftArrow={<CarouselArrowLeft />}
        rightArrow={<CarouselArrowRight />}>
        {slider.map((item) => (
          <a target="_blank" href={item.link} >
            <div className="carousel__item" key={item.id} style={{
              backgroundImage: `url(${workouteImg1})`,
            }}>
              <h3 className="carousel__item__heading">{item.heading}</h3>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComp;