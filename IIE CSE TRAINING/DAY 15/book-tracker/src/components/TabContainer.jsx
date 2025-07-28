import React, { useState } from 'react';
import BookCard from './BookCard';

const TabContainer = ({ books, onStatusChange, onDelete }) => {
  const [activeTab, setActiveTab] = useState('finished');

  const tabs = [
    { id: 'finished', label: 'finished', status: 'finished' },
    { id: 'to read', label: 'to read', status: 'to read' },
    { id: 'reading', label: 'reading', status: 'reading' }
  ];

  const filteredBooks = books.filter(book => book.status === activeTab);

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {filteredBooks.length === 0 ? (
          <p className="empty-message">No books in this category</p>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContainer;
