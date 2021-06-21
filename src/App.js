import React, { useEffect, useState }from 'react';
import {  Route } from "react-router-dom";
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => {
                setPizzas(data.pizzas);
                console.log(data.pizzas);
            })

        // data is axios respondse extracted from the browser .axios has data property
        // below is fetch (making get request)without axios
        // fetch('http://localhost:3000/db.json')
        //     .then((res) => res.json())
        //     .then(json => (setPizzas(json.pizzas)) )

    },[])

    // console.log(pizzas)
    return (
      <div className="wrapper">
        <Header />
          <div className="content">
            {/*<Route path="/" component={Home} exact />*/}
              {/* Render Props if you want to render/use one component several times ,you can use Route render prop.
                In other words, how do we pass the list of items down to the Items component so items  can be displayed on the page*/}

            <Route path="/" render={(pizzaItems) =>
                <Home pizzaItems={pizzas}
                />} exact
            />
            <Route path="/cart" component={Cart} exact />
          </div>
        </div>
    )
}

export default App;
