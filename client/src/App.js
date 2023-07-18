import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">Blog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
        <div className="post">
        <div className="image">
            <img src="https://images.t3n.de/news/wp-content/uploads/2016/11/github.jpg?class=structuredData-large"></img>
        </div>
        <div className="texts">
          <h2>What is Lorem Ipsum?</h2>
          <p className="info">
            <a className="author">Nurdan Kolay</a>
            <time>2023-01-01 16:45</time>
          </p>
          <p className="summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
        <div className="post">
        <div className="image">
            <img src="https://images.t3n.de/news/wp-content/uploads/2016/11/github.jpg?class=structuredData-large"></img>
        </div>
        <div className="texts">
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
        <div className="post">
        <div className="image">
             <img src="https://images.t3n.de/news/wp-content/uploads/2016/11/github.jpg?class=structuredData-large"></img>
        </div>
        <div className="texts">
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
    </main>
  );
}

export default App;
