import './App.css';
import React from 'react';
import Component from './component_1.js';
import ArticleList from './showArticles.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Login from './login';
import Register from './register';
import EditArticle from './updateArticles';
import CreateArticle from './addArticles';
import { useState } from 'react';
import Newlogin from './Newlogin';


function App() {

 


  return (

    <div>
    

      <BrowserRouter>
        <Routes> 
          <Route path="/" element = {<Login />} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/ShowArticles" element = {<ArticleList  />} />
          <Route path="/blog" element = {<Component/>} />
          <Route path="/add" element ={<CreateArticle/>} />
          <Route path="/edit-article/:id" element ={<EditArticle/>} />
          <Route path="/login" element ={<Newlogin/>} />
          
          
        </Routes>
      </BrowserRouter>


    

        
      
    </div>
    

    
    

      
      
      
      
    
  );
}

export default App;
