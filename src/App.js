import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Person from './Person';
import People from './People';
function App() {
  const[people,setPeople] = useState(data);

  return (
  <section className="section">
    <div className="title">
       <h2>
         <span>/</span>reviews
       </h2>
    </div>
    <div className="section-center">
      <People people = {people}></People>
    </div>
  </section>
  );
}

export default App;
