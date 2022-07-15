
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar/>
    <div className='container my-3'>
      <TextForm heading="Enter the text to analyse below"/>
    </div>
    </>
  );
}

export default App;
