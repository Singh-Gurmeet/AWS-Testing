import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to My React Webpage</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="home">
          <h2>Home</h2>
          <p>This is a basic React webpage.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This section is about the webpage.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can contact us at email@example.com.</p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Gurmeet Singh</p>
      </footer>
    </div>
  );
}

export default App;
