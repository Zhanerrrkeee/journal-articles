import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    { id: 1, title: 'Sample Article 1', authors: ['Author1', 'Author2'], keywords: ['Keyword1', 'Keyword2'], body: 'Lorem ipsum...' },
    { id: 2, title: 'Sample Article 2', authors: ['Author3', 'Author4'], keywords: ['Keyword3', 'Keyword4'], body: 'Lorem ipsum...' },
    // Add more articles as needed
  ];

  const handleArticleClick = (articleId) => {
    const selected = articles.find(article => article.id === articleId);
    setSelectedArticle(selected);
    setCurrentPage('article');
  };
  const handleBackClick = () => {
    console.log('Custom back button behavior!');
    
  };
  

  return (
    <div>
      {currentPage === 'main' && <MainPage articles={articles} onArticleClick={handleArticleClick} />}
      {currentPage === 'article' && <ArticlePage article={selectedArticle} />}
    </div>
  );
  return (
    <div>
      {/* Other components */}
      <ArticlePage article={selectedArticle} onBackButtonClick={handleBackClick} />
    </div>
  );
};


export default App;
