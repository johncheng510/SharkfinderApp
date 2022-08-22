import './App.css';
import React, { useState, useEffect } from 'react';
import sharks from './data/sharks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import HomePage from './pages/HomePage';
import ComparisonPage from './pages/ComparisonPage';

function App() {
  let [selections, setSelections] = useState("");

  const [images, setImages] = useState([]);

  const loadAllImages = async () => {
    const response = await fetch('/images');
    const data = await response.json();
    let image_string = data.links;
    image_string = image_string.substring(1, image_string.length - 1);
    image_string = image_string.replaceAll("'", "");
    let image_array = image_string.split(",");
    let image_objects = [];
    for (let i = 1; i <= 6; i++) {
      let text = i.toString();
      image_objects.push({ id: text, link: ''});
    }
    let response_objects = [];
    for (let i = 0; i < data.id.length; i++) {
      let text = data.id[i].toString();
      response_objects.push({ id: text, link: image_array[i] })
    }
    for (let image_object of image_objects) {
      for (let response_object of response_objects) {
        if (image_object.id === response_object.id) {
          image_object.link = response_object.link;
        }
      }
    }
    setImages(image_objects);
  }

  useEffect(() => {
    loadAllImages();
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="header">
          <h1>SHARKFINDER</h1>
          <p>Find the right pet for your home.</p>
        </header>
        <Navigation />
        <main className="main">
          <Route path="/" exact>
            <HomePage sharks={sharks} images={images} setSelections={setSelections}/>
          </Route>
          <Route path ="/comparison">
            <ComparisonPage sharks={sharks} images={images} selections={selections}/>
          </Route>
        </main>
        <footer className="footer">
          <p>&copy; 2022 John Cheng</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
