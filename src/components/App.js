import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const getUrl = (term) => {
  const regex = /www.(.)*.com/;
  return term.match(regex);
};

const getSiteName = (url) => {
  return url && url.replace('www.', '').replace('.com', '') || 'Home';
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('www.airbnb.com');
  const [url, setUrl] = useState('');
  const [siteName, setSiteName] = useState('Home');

  useEffect(() => {
    const [url] = getUrl(searchTerm) || [];
    const siteName = getSiteName(url);
    setUrl(url);
    setSiteName(siteName);
  }, [searchTerm]);

  const handleSearch = (evt) => {
    const value = evt.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="allyo">
      <div className="allyo-searchbar">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Enter Search Term"/>
      </div>
      <Link to={`/redirect/${siteName}`}>
        <div className="allyo-searchcontent">
          <div role="img" className="allyo-searchcontent-head">
            {siteName}
          </div>
          <div className="allyo-searchcontent-body">
            <h1>{siteName} Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h1>
            <p>{searchTerm} Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <p className="allyo-searchcontent-body-url">{url}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default App;
