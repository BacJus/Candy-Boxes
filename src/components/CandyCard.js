/** @format */

import { useState } from "react";

const CandyCard = ({ candy }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="candy-card">
            <img src={candy.image} alt={candy.name}/>

            <h3>{candy.name}</h3>

            <button onClick={handleOpenModal}>
                Candy Information
            </button>
            
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{candy.name}</h2>

                        <p><strong>Calories:</strong> {candy.calories}</p>
                        <p><strong>Description:</strong> {candy.description}</p>
                        <p><strong>Ingredients:</strong> {candy.ingredients}</p>

                        <button onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CandyCard;
