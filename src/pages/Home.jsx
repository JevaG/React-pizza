import React from 'react';
import { Categories, SortPopup,PizzaBlock } from "../components";
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from "../redux/actions/filtersAction";

const categoryNames = [ 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular'},
    { name:'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }

]

function Home () {
    const dispatch = useDispatch();

    const pizzaThickness  = useSelector(({ pizzas }) => pizzas.pizzaThickness);

    // to prevent unnecessary re-rendering of category properties useCallback used. returns the function you execute
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));

    }, [dispatch]);


    return (
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={onSelectCategory}
                        items={categoryNames}
                    />
                    <SortPopup
                        popupItems = {sortItems}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {/* if you want to pass down all the props from the db.json instead of
                     extracting each element name={eachPizza.name} imageUrl={eachPizza.imageUrl} of the pizza block,
                     you can just pass one eachPizza down to PizzaBlock.jsx like this eachPizza={eachPizza} and
                     then at that component ,you can extract particular element you need.
                      Another method to do so {...eachPizza}(take all elements from the object of izza arrays)
                    */}
                    {pizzaThickness && pizzaThickness.map((eachPizza) => (
                        <PizzaBlock key={eachPizza.id} {...eachPizza} />
                    ))}
                </div>

            </div>

    );
}

export default Home;