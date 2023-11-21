import React, { useState } from 'react';
import ArticleList from '../components/ArticleList';

const MainPage = ({ articles, onArticleClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.authors.join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.keywords.join(' ').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Journal Articles</h1>
      <input
        type="text"
        placeholder="Search by author, title, or keyword"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ArticleList articles={filteredArticles} onArticleClick={onArticleClick} />
    </div>
  );
};

export default MainPage;

