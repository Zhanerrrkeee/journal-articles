// ArticlePage.js

import React from 'react';
import ArticleDetail from '../components/ArticleDetail';

const ArticlePage = ({ article, onBackButtonClick }) => {
  const handleBackClick = () => {
    console.log('Back button clicked!');
    // Implement the specific behavior or navigation logic here
  };

  return (
    <div>
      <ArticleDetail article={article} onBackButtonClick={handleBackClick} />
    </div>
  );
};

export default ArticlePage;


