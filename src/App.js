import React from 'react';
import './App.scss';

const Card = (props) => {
    return (
        <div className="card">
            <h3 className="card__number">{props.number}</h3>
            <div className="card__content">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__text">{props.text}</p>
                <a href="#" className="card__btn">{props.buttonText}</a>
            </div>
        </div>
    );
};

const Main = () => (
    <section className="container">
        <Card number="01" title="Card One" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum dolorem illum minima id consectetur similique quasi nihil ea rerum nulla cupiditate consequuntur cum nesciunt voluptates, at et, ipsa dolore." buttonText="Read More!" />
        <Card number="02" title="Card Two" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum dolorem illum minima id consectetur similique quasi nihil ea rerum nulla cupiditate consequuntur cum nesciunt voluptates, at et, ipsa dolore." buttonText="Read More!" />
        <Card number="03" title="Card Three" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum dolorem illum minima id consectetur similique quasi nihil ea rerum nulla cupiditate consequuntur cum nesciunt voluptates, at et, ipsa dolore." buttonText="Read More!" />
    </section>
);

export default Main;