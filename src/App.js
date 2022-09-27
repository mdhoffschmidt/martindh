import { Route, Routes, HashRouter } from "react-router-dom";

import { Page } from "./components/commons/page";

import { AccomplishmentPage } from "./components/accomplishments/accomplishmenPage";
import { ArticlePage, listOfArticles } from "./components/articles/articlePage";
import { ContactPage } from "./components/contact/contactPage";
import { HomePage } from "./components/home/homePage";
import { PublicationPage } from "./components/publications/publicationPage";


function App() {

  return (
    <div className="App">
      
      <HashRouter basename="/">
        
        <Routes>
          
          <Route 
            element={ <HomePage />}
            exact
            path="/" 
          />
          
          <Route
            element={ <ArticlePage /> }
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
            
          <Route 
            element={ <AccomplishmentPage /> }
            path="/experiences" 
          />

          <Route 
            element={ <PublicationPage /> }
            path="/publications" 
          />
      
          <Route
            element={<ContactPage /> }
            path="/contact" 
          />

        </Routes>  
      
      </HashRouter>
      
    </div>
  );
}

export default App;
