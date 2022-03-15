import Main from "../main/Main";
import CarouselComp from "../Carousel/Carousel";
import AboutUs from "../aboutUs/AboutUs";
import RequestForm from "../request-form";

export default () => {
    return (
        <div>
            <Main />
            <CarouselComp slider='Тренировки' />
            <AboutUs />
            <CarouselComp slider='Рецепты' />
            <RequestForm />
        </div>
    )
}
