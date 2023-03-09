import './AppCss.css';
import Login from './post';
import Update from './update';
import Delete from './delete';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Get from './get';

function App() {
  return (
<div className='App'>
                 <Router>
                 <h1>
                  Hello
                 </h1>
                    <div class='nav'>

                        <h1>Gadgets Table</h1>
                        <div class='nav-link'>
                    <Link to='/'><button>ADD Gadgets</button></Link>
                    <Link to='/delete'><button>DELETE</button></Link>
                    <Link to='/put'><button>UPDATE</button></Link>
                    <Link to='/get'><button>VIEW Gadgets</button></Link>
                    </div>
                    </div>
                <Routes>
                    
                <Route path='/' element={<Login/>}/>
                <Route path='/get' element={<Get/>}/>
                <Route path='/put' element={<Update/>}/>
                <Route path='/delete' element={<Delete/>}/>

                </Routes>
                </Router>

        </div>
  );
}

export default App;