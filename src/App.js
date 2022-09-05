import './styles/App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>    
      <section className="home">
        <div className="text">Dashboard Sidebar</div>
      </section>
    </div>
  );
}

export default App;
