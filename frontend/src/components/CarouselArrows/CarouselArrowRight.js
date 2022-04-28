import style from './carouselArrows.module.scss'

const CarouselArrowRight = () => {
  return (
    <div className={`${style.carousel__arrow} ${style.carousel__arrow_right}`}> &gt;
    </div>
  )
}

export default CarouselArrowRight;