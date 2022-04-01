import Main from "../main/Main";
import CarouselComp from "../Carousel/Carousel";
import AboutUs from "../aboutUs/AboutUs";
import RequestForm from "../request-form";

export default () => {
    return (
        <div>
            <Main />
            <CarouselComp slider='Тренировки' link='workoutsCarouselItems' />
            <AboutUs />
            <CarouselComp slider='Рецепты' link='recipesCarouselItems' />
            <RequestForm />
        </div>
    )
}
