
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container-fluid">  
        {/*Menú*/}
          <NavBar/>
        {/*Item list Container pasa por props => greating & user*/}
          <ItemListContainer greating='Bienvenido' user='Javi Fariña' />
    </div>
    
  );
}

export default App;
