//** @format */

import CandyCard from "./CandyCard.js";
import candies from "../candyData.js";

const CandyContainer = () => {
    return (
        <div className="candy-container">
            {candies.map((candy, index) => (
                <CandyCard key={index} candy={candy} />
            ))}
        </div>
    );
};

export default CandyContainer;