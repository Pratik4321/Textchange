
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import TextFile from './components/TextFile';
import Hello from './components/Hello';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";




function App() {
  return (
    <>
    <router>
  
    
 <Navbar title="TextUtils" home="Home" link="Link"/>
 <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <div className="container my-3">
<TextFile heading="Enter the Text to Analyze"/>
</div>
          </Route>
        </Switch>


</router>
 
 </> 
  );
}

export default App;
