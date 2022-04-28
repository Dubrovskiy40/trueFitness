import style from './carouselArrows.module.scss'

const CarouselArrowLeft = () => {
  return (
    <div className={`${style.carousel__arrow} ${style.carousel__arrow_left}`}> &lt;
    </div>
  )
}

export default CarouselArrowLeft;