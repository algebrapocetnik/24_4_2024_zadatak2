
import './App.css';
import CompClassFirst from './components/compClassFirst/CompClassFirst';
import CompClassSecond from './components/compClassSecond/CompClassSecond';
import CompFuncSecond from './components/compFuncSecond/CompFuncSecond';

function App() {
  const korisnici = [
    {
      ime:"Marko",
      godine: 43,

  },
  {
    ime:"Ana",
    godine: 21,
  },
  {ime:"Marin", 
  godine: 12},
  {
    ime:"Sanja",
    godine: 34,
  }

  ] 

  
  
  return (
    <div className="App">
      <CompClassFirst korisnik={korisnici[0]}/>
      <CompClassSecond korisnik={korisnici[1]}/>
      <CompFuncSecond korisnik={korisnici[2]}/>
      <CompFuncSecond korisnik={korisnici[3]}/>
    </div>
  );
}

export default App;
