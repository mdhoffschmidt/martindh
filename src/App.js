import { Route, Routes, HashRouter } from "react-router-dom";
import Articles from "./layouts/articles";
import Contact from "./layouts/contact";
import Experiences from "./layouts/experiences";
import Home from "./layouts/home";
import Page from "./layouts/page";
import Publications from "./layouts/publications";

import { listOfArticles } from "./articles/articles";




function App() {

  const articles = <Articles/>;
  const contact = <Contact/>;
  const experiences = <Experiences/>;
  const home = <Home/>;
  const publications = <Publications/>;

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

          {
            listOfArticles.map( (item, index) => {
              let element = <Page main={ item.article() } />;
              return <Route
                element={ element } 
                key={ index }
                path={ item.path }
              />
            })
          }
            {/* <Route
              element={<Page main={article_1}/>}
              path="/articles/article-1" 
            />
            <Route
              element={<Page main={article_2}/>}
              path="/articles/article-2"
            />
            <Route
              element={<Page main={article_3}/>}
              path="/articles/article-3"
            />
            <Route
              element={<Page main={article_4}/>}
              path="/articles/article-4"
            />
            <Route
              element={<Page main={article_5}/>}
              path="/articles/article-5"
            />
            <Route
              element={<Page main={article_6}/>}
              path="/articles/article-6"
            /> */}

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
