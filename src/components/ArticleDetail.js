import React from 'react';

const ArticleDetail = ({ article, onBackButtonClick }) => {
  const handleBackClick = () => {
    
    onBackButtonClick();
  };

  return (
    <div className="article-detail">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <h2>{article.title}</h2>
      <p>Authors: {article.authors.join(', ')}</p>
      <p>Keywords: {article.keywords.join(', ')}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDetail;


