
import './App.css';
import Nav from './componentes/Nav';
import { PizzasProvider } from './contexto/PizzasContext';
import AppRouters from './router/AppRouters';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PizzasProvider>
        
          <Router>
            <Nav />
            <AppRouters />
          </Router>

      </PizzasProvider>
      
    </div>
  );
}

export default App;
