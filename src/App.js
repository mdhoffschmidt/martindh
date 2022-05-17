import { Route, Routes, HashRouter } from "react-router-dom";
import Articles from "./layouts/articles";
import Contact from "./layouts/contact";
import Experiences from "./layouts/experiences";
import Home from "./layouts/home";
import Page from "./layouts/page";
import Publications from "./layouts/publications";

import Article1 from "./articles/article-1.js";
import Article2 from "./articles/article-2.js";


function App() {

  const articles = <Articles/>;
  const article_1 = <Article1/>;
  const article_2 = <Article2/>;

  const contact = <Contact/>;
  const experiences = <Experiences/> ;
  const home = <Home/>;
  const publications = <Publications/>

  return (
    <div className="App">
      
      <HashRouter basename="/">
        
        <Routes>
          
          <Route 
            element={<Page main={home} />}
            exact
            path="/" 
          />
          
          <Route
            element={<Page main={articles}/>}
            path="/articles" 
          />
            <Route
              element={<Page main={article_1}/>}
              path="/articles/article-1" 
            />
            <Route
              element={<Page main={article_2}/>}
              path="/articles/article-2"
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
      
      </HashRouter>
      
    </div>
  );
}

export default App;
