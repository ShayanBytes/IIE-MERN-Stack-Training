import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import TabContainer from './components/TabContainer';
import BookForm from './components/BookForm';
import './App.css';

function App() {
  const [books, setBooks] = useLocalStorage('books', [
    { id: 1, title: 'Rahul', author: 'Rahul', status: 'finished' },
    { id: 2, title: 'Mew', author: 'mew', status: 'to read' },
    { id: 3, title: 'Hao', author: 'he he', status: 'reading' }
  ]);
  
  const [showForm, setShowForm] = useState(false);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleStatusChange = (bookId, newStatus) => {
    setBooks(books.map(book =>
      book.id === bookId ? { ...book, status: newStatus } : book
    ));
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <div className="header-content">
            <div className="logo">
              📚 Books Tracker
            </div>
            <button 
              className="add-book-btn"
              onClick={() => setShowForm(true)}
            >
              📖 Add book
            </button>
          </div>
        </header>

        <main className="app-main">
          <div className="content">
            <h1>Track Books</h1>
            <p>A simple way to log, manage, and revisit your reading list.</p>
            
            <TabContainer
              books={books}
              onStatusChange={handleStatusChange}
              onDelete={handleDeleteBook}
            />
          </div>
        </main>

        <footer className="app-footer">
          © 2005-2025 www.bookstracker.com
        </footer>
      </div>

      {showForm && (
        <BookForm
          onAddBook={handleAddBook}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;
