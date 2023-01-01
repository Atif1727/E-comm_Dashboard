import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import './App.css';
import PrivateComponent from './components/PrivateComponents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Products listing Components</h1>} />
        <Route path='/add' element={<h1>add Products</h1>} />
        <Route path='/update' element={<h1>update Products</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
        </Route>

        <Route path='/signup' element={<SignUp />} />

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
