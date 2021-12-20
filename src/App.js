
import { NavBar } from './components/NavBar/NavBar';
//import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="container-fluid">  
        {/*Menú*/}
          <NavBar/>
        {/*Item list Container pasa por props => greating & user*/}
        <div className='container-fliud'>
            {/*<ItemListContainer/>*/}
            <ItemDetailContainer id={4}/>
        </div>
        {/*Footer */}
        <Footer/>
    </div>
    
  );
}

export default App;
