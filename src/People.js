import React, { useState, useEffect } from 'react';
import Person from './Person';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

function People({ people }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people])

    useEffect(() => {
        let id = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(id);
    }, [index])

    return (
        <>
            {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;
                let position = 'nextSlide'
                if (personIndex === index) {
                    position = 'activeSlide'
                }
                if (personIndex === index - 1 || (index === 0 && personIndex == people.length - 1)) {
                    position = 'lastSlide'
                }
                const personObj =
                {
                    position: position,
                    image: image,
                    name: name,
                    title: title,
                    quote: quote,
                    id: id
                }

                return <Person {...personObj}></Person>
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
            </button>
        </>
    )
}

export default People