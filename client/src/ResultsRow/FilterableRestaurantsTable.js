import React from "react";

function FilterableRestaurantsTable(props) {
    console.log("these are my props: ", props);
    const restaurants = props.restaurants;
    if (!restaurants.length) {
        return null;
    } else {
        return (
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.name}>
                        {restaurant.name} {restaurant.cuisine} {restaurant.rating}
                    </li>
                ))}
            </ul>
        );
    }
}

export default FilterableRestaurantsTable;