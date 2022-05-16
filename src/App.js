import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/articles";
import Contact from "./components/contact";
import Experiences from "./components/experiences";
import Home from "./components/home";
import Page from "./components/page";
import Publications from "./components/publications";


function App() {

  const articles = <Articles/>;
  const contact = <Contact/>;
  const experiences = <Experiences/> ;
  const home = <Home/>;
  const publications = <Publications/>

  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Routes>
          
          <Route 
            element={<Page main={home} />}
            path="/" 
          />
          
          <Route 
            element={<Page main={articles}/>}
            path="/articles" 
          />

          <Route 
            element={<Page main={experiences}/>}
            path="/experiences" 
          />

          <Route 
            element={<Page main={publications}/>}
            path="/publications" 
          />
      
          <Route
            element={<Page main={contact}/>}
            path="/contact" 
          />

        </Routes>  
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
