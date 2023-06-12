import React, { useState } from 'react';

const emojiData = [
  {
    symbol: '😀',
    keywords: ['happy', 'smile', 'face'],
  },
  {
    symbol: '🎉',
    keywords: ['party', 'celebrate', 'congratulations'],
  },
  {
    symbol: '❤️',
    keywords: ['love', 'heart'],
  },
  {
    symbol: '🐶',
    keywords: ['dog', 'puppy', 'pet'],
  },
 
];

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const results = emojiData.filter((emoji) =>
      emoji.keywords.some((keyword) => keyword.includes(term))
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((emoji, index) => (
          <li key={index}>{emoji.symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;
