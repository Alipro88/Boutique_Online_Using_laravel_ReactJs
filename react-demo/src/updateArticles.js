import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditArticle() {
  // get id
  const { id } = useParams(); // Add this line
  // const [id , setId] = useState(''); // Add this line
  const [article, setArticle] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categorie, setCategorie] = useState('');
  const [prix, setPrix] = useState('');
  const [image, setImage] = useState('');
  // get id
  const [idArticle, setIdArticle] = useState(''); // Add this line
  const navigate = useNavigate();
  // Add other article fields as needed

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/articles/update/${id}`, {
        titre: title,
        contenu: content,
        categorie: categorie,
        prix: prix,
        user_id : 1,
        image: image,
        // Include other article fields here
      });
      // Handle successful update here
      console.log('Article updated successfully!');
      navigate('/ShowArticles');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div   style={{ minHeight: '100vh' , display: 'flex',flexDirection: 'column',alignItems: 'center' }}>
      <h1>Edit Article</h1>
      <form onSubmit={handleFormSubmit}>
        <div  class="mb-3">
          <label htmlFor="title"  class="form-label" >Title:</label>
          <input type="text" id="title" value={title}  onChange={(e) => setTitle(e.target.value)} class="form-control" />
        </div>
        <div>
          <label htmlFor="content"  class="form-label">Content:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} class="form-control"/>
        </div>
        <div>
          <label htmlFor="content"  class="form-label">Categorie:</label>
          <textarea id="content" value={categorie} onChange={(e) => setCategorie(e.target.value)} class="form-control" />
        </div>
        <div>
          <label htmlFor="content"  class="form-label">Prix:</label>
          <textarea id="content" value={prix} onChange={(e) => setPrix(e.target.value)} class="form-control" />
        </div>
        <div>
          <label htmlFor="content"  class="form-label">Image:</label>
          <input id="content" value={image} onChange={(e) => setImage(e.target.value)} class="form-control"  type="file"/>
        </div>
        {/* Add other input fields for other article fields */}
        <p></p>
        <button type="submit"  class="btn btn-primary">Update Article</button>
      </form>
    </div>
  );
}

export default EditArticle;
