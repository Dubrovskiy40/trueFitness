import Main from "../main/Main";
import CarouselComp from "../Carousel/Carousel";
import AboutUs from "../aboutUs/AboutUs";
import RequestForm from "../request-form";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainings } from "../../actions/trainingsActions";
import { fetchFood } from "../../actions/foodAction"

const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFood())
        dispatch(fetchTrainings())
    }, [])
    return (
        <div>
            <Main />
            <CarouselComp slider='Тренировки' link='workoutsCarouselItems' category='trainings' />
            <AboutUs />
            <CarouselComp slider='Рецепты' link='recipesCarouselItems' category='categories' />
            <RequestForm />
            <Footer />
        </div>
    )
}

export default MainPage;
