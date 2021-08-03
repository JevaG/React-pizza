import React from 'react';
import { Categories, SortPopup,PizzaBlock } from "../components";


function Home ({ pizzaItems }) {
    return (
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={(item) => (console.log(item))}
                        items={
                            [
                                'Мясные',
                                'Вегетарианская',
                                'Гриль',
                                'Острые',
                                'Закрытые',
                            ]
                        }
                    />
                    <SortPopup
                        popupItems = {
                            [
                                { name: 'популярности', type: 'popular'},
                                { name:'цене', type: 'price' },
                                { name: 'алфавиту', type: 'alphabet' }
                            ]
                        }
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
                    {pizzaItems.map((eachPizza) => (
                        <PizzaBlock key={eachPizza.id} {...eachPizza} />
                    ))}
                </div>

            </div>

    );
}

export default Home;