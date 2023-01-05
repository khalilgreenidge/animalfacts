import { animals } from './animals';
import './App.css';

const title = "";
const background = <img className="background"
alt="ocean"
src="https://d73d7a1f94ef4638acff12a4c8367b3b.cc-propeller.cloud/images/ocean.jpg" />

const images = [];
  
function displayFact(e) {
  const name = e.target.alt;
  const optionIndex = Math.floor(Math.random() * animals[name].facts.length);
  const fact = animals[name].facts[optionIndex];
  document.getElementById('fact').innerHTML = fact;
}

for (const animal in animals) {
  images.push(<img key={animal}   
  onClick={displayFact}
  src={animals[animal].image}
  className='animal'
  alt={animal}
  aria-label={animal}
  role='button' />);
};
const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title === "" ? 'Click an animal for a fun fact' : title}</h1>
    <p id='fact'></p>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    
  </div>
);

function App() {
  return animalFacts;
}

export default App;
