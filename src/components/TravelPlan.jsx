import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const planets = plan.childPlaces;
    return (
        <frameElement className= "m-96">
            {/* <h2>Places to visit</h2>
            <ol>
                {planets.map((place) => (
                    <PlaceTree key={place.id} place={place} />
                ))}
            </ol> */}

            <ol>
                <li className="mx-28">AAA</li>
                <li>BBB</li>
                <li>CCC</li>
            </ol>
        </frameElement>
    );
}
