import React from 'react';
import '../styles/Pagination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="pagination">
      <button><FaArrowLeft /></button>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <button><FaArrowRight /></button>
    </div>
  );
};

export default Pagination;
