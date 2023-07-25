import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categorie, setCategorie] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [image, setImage] = useState(null); // Add this line
  const [userId, setUserId] = useState(''); // Add this line
  const [prix, setPrix] = useState('');
  const [lastId, setLastId] = useState(0);
  const navigate = useNavigate();
  // Add other article fields as needed

  useEffect(() => {
    const fetchLastId = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/articles');
        const users = response.data;
        if (users.length > 0) {
          const lastUser = users[users.length - 1];
          setLastId(lastUser.id);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchLastId();
  }, []);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleCategorieChange = (e) => {
    setCategorie(e.target.value);
  };
  const handlePrixChange = (e) => {
    setPrix(e.target.value);
  };



  const handleFormSubmit = async (e) => {
    e.preventDefault();
     // Create a new FormData object
     const formData = new FormData();
     formData.append('id', lastId + 1);
     formData.append('titre', title);
     formData.append('contenu', content);
     formData.append('categorie', categorie);
     formData.append('prix', prix);
     formData.append('user_id', 1);
     formData.append('image', image); // Append image to form data
    try {
      const response = await axios.post('http://localhost:8000/api/articles/create' , { headers: { 'Content-Type': 'multipart/form-data' } } 
      );
      // Handle successful creation here
      console.log('Article created successfully!');
      navigate('/ShowArticles');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div  style={{ minHeight: '100vh' , display: 'flex',flexDirection: 'column',alignItems: 'center' }}>
      <h1>Create New Article</h1>
      <form onSubmit={handleFormSubmit}>
        <div  class="mb-3">
          <label htmlFor="title"  class="form-label">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}   class="form-control" />
        </div>
        <div  class="mb-3">
          <label htmlFor="content" class="form-label">Content:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}  class="form-control"/>
        </div>
        <div>
          <label htmlFor="categorie"  class="form-label">Categorie:</label>
          <textarea id="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}  class="form-control" />
        </div>
        <div>
          <label htmlFor="prix"  class="form-label" >Prix:</label>
          <textarea id="prix" value={prix} onChange={(e) => setPrix(e.target.value)} class="form-control" />
        </div>
        <div>
          <label htmlFor="image"  class="form-label">Image:</label>
          <input id="image" value={image} onChange={(e) => setImage(e.target.value)} class="form-control"  type ="file" />
        </div>
        {/* Add other input fields for other article fields */}
        {registrationError && <p>{registrationError}</p>}
        <p></p>
        <button type="submit"  class="btn btn-primary">Create Article</button>

      </form>
    </div>
  );
}

export default CreateArticle;
