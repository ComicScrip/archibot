import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './Store';
import Modal from './Modal';
import Background from './Background';
import cross from '../Images/cross.png';
import './Modal.scss';

const ItemDetails = (props) => {
  /* eslint-disable */
  const data = props.match.params;
  const { id } = data;
  /* eslint-enable */
  const result = items.find((item) => item.id === parseInt(id, 10));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={isModalOpen ? 'uniqueStoreModalOpen' : 'uniqueStore'}>
        <Background />
        <h1 className="uniqueStoreTitle">Store</h1>
        <div className="uniqueCard">
          <img
            className="storeImg"
            src={result.src}
            alt={`Avatar ${result.name}`}
            height="150"
            width="150"
          />
          <div className="uniqueStoreText">
            <h2>{result.name}</h2>
            <p className="uniqueStoreDescription">{result.description}</p>
          </div>
          <div>
            <p className="uniqueStorePrice">{result.price}</p>
          </div>
          <div className="uniqueStoreButton">
            {' '}
            {result.id === 2 ? (
              <button type="button" onClick={openModal}>
                Free
              </button>
            ) : (
              <button type="button" onClick={openModal}>
                Buy
              </button>
            )}
            <Link to="/store">
              <button type="button">Store</button>
            </Link>
          </div>
        </div>
      </div>

      {result.id === 2 ? (
        <Modal showModal={isModalOpen} hideModal={closeModal}>
          <div className="modalHeaderDrunk">
            <img src={cross} alt="cross" className="crossModal" />
            <h2>Item FREE</h2>
          </div>
          <div className="modalBody">
            <h3>
              Drunk Bot' is free and full of surprises
              <br />
              try it now !
            </h3>
          </div>
          <div className="modalFooter">
            <Link to="/questionDrunk">
              {' '}
              <button
                type="button"
                className="modalButton"
                onClick={closeModal}
              >
                Play
              </button>
            </Link>
          </div>
        </Modal>
      ) : (
        <Modal showModal={isModalOpen} hideModal={closeModal}>
          <div className="modalHeader">
            <h2>Item Not Available</h2>
          </div>
          <div className="modalBody">
            <h3>
              This item will be available very soon
              <br />
              don't miss it !
            </h3>
          </div>
          <div className="modalFooter">
            <button type="button" className="modalButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ItemDetails;
