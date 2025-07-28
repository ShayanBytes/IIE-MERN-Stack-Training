import React from 'react';

const BookCard = ({ book, onStatusChange, onDelete }) => {
  const handleStatusChange = (newStatus) => {
    onStatusChange(book.id, newStatus);
  };

  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">— by {book.author}</p>
      
      <div className="book-actions">
        <select 
          value={book.status} 
          onChange={(e) => handleStatusChange(e.target.value)}
          className="status-select"
        >
          <option value="to read">To Read</option>
          <option value="reading">Reading</option>
          <option value="finished">Finished</option>
        </select>
        <button onClick={() => onDelete(book.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
