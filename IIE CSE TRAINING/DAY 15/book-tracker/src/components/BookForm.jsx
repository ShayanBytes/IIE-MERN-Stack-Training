import React, { useState } from 'react';

const BookForm = ({ onAddBook, onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('to read');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      onAddBook({
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        status
      });
      setTitle('');
      setAuthor('');
      setStatus('to read');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="to read">To Read</option>
              <option value="reading">Reading</option>
              <option value="finished">Finished</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="add-btn">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
