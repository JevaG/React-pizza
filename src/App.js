import React, { useEffect } from 'react';
import  {  useDispatch } from 'react-redux';
import {  Route } from "react-router-dom";

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // axios.get('http://localhost:3001/pizzas')
    //     //     .then(({ data }) => {
    //     //
    //     //         // dispatch is expecting an object(setPizzas) from pizzaAction
    //     //         dispatch(setPizzas(data))
    //     //         // console.log(data.pizzas);
    //     //     })
    //
    //     // data is axios response extracted from the browser .axios has data property
    //     // below is fetch (making get request)without axios
    //     // fetch('http://localhost:3000/db.json')
    //     //     .then((res) => res.json())
    //     //     .then(json => (setPizzas(json.pizzas)) )
    //    dispatch(fetchPizzas());
    //
    // },[dispatch])

    return (
      <div className="wrapper">
        <Header />
          <div className="content">
            {/*<Route path="/" component={Home} exact />*/}
              {/* Render Props if you want to render/use one component several times ,you can use Route render prop.
                In other words, how do we pass the list of items down to the Items component so items  can be displayed on the page*/}

            {/*<Route path="/" render={*/}
            {/*    (pizzaItems) =>*/}
            {/*    <Home pizzaItems={pizzaThickness} />*/}
            {/*} exact*/}
            {/*/>*/}
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
          </div>
        </div>
    )
}

export default App;
