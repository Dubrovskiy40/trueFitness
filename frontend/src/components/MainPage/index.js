import Main from "../main/Main";
import CarouselComp from "../Carousel/Carousel";
import AboutUs from "../aboutUs/AboutUs";
import RequestForm from "../request-form";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainings } from "../../actions/trainingsActions";
import { fetchFood } from "../../actions/foodAction"
import { fetchFoodCategories } from "../../actions/foodCategoriesActions";

const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFood())
        dispatch(fetchTrainings())
        dispatch(fetchFoodCategories())
    }, [])
    return (
        <div>
            <Main />
            <CarouselComp slider='Тренировки' link='workoutsCarouselItems' category='trainings' />
            <AboutUs />
            <CarouselComp slider='Рецепты' link='recipesCarouselItems' category='recipe' />
            <RequestForm />
            <Footer />
        </div>
    )
}

export default MainPage;
