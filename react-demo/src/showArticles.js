import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ArticleList() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  


  const handleDelete = async (id) => {
    if (isLoggedIn) {
    navigate('/login');

  }else{
    
    try {
      await axios.delete(`http://127.0.0.1:8000/api/articles/delete/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error(error);
    }

  }
  };

  

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="App" style={{ minHeight: '100vh' , display: 'flex',flexDirection: 'column',alignItems: 'center' }}>
      <div style = {{position: 'absolute', left: 10  , marginTop : '10px'}}>
      
       <Link  to= {`/add`}>
         <button  class="btn btn-primary" >ajouter un article</button>
        
       </Link>
      </div>
      <h1>Liste des articles</h1>
      <table  class="table">
        <thead  class="table-light">
          <tr>
            <th>Titre</th>
            <th>Contenu</th>
            <th>Image</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Actions</th> {/* New "Actions" column */}
          </tr>
        </thead>
        <tbody>
          {articles.map((article ) => (
            <tr key={article.id}>
              <td>{article.titre}</td>
              <td>{article.contenu}</td>
              <td>
                <img src={article.image} alt={article.titre} />
              </td>
              <td>{article.categorie}</td>
              <td>{article.prix}</td>
              <td>
                {/* Edit button - Link to the edit page */}
                <Link to={`/edit-article/${article.id}`}>
                   <button  class="btn btn-primary" >Edit</button>
                </Link>
                {/* Delete button - Call the deleteFromJson function */}
                <h6></h6>
                <button onClick={() => handleDelete(article.id)} class="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArticleList;
