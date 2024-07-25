import React, { useEffect, useState } from 'react';
import '../royxat/index.css';

const Royxat = () => {
  const [users, setUsers] = useState([]);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  async function getapi(url) {
    try {
      const response = await fetch(url);
      let data = [];
      if (response.status === 200) {
        data = await response.json();
      }
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getapi('https://jsonplaceholder.typicode.com/photos');
      setUsers(data);
    }
    fetchData();
  }, []);

  function handleMinValueChange(e) {
    setMinValue(e.target.value);
  }

  function handleMaxValueChange(e) {
    setMaxValue(e.target.value);
  }

  
  const filteredUsers = users.filter(user => {
    const userId = parseInt(user.id, 10);
    const min = parseInt(minValue, 10);
    const max = parseInt(maxValue, 10);
    return (!isNaN(min) ? userId >= min : true) && (!isNaN(max) ? userId <= max : true);
  });

  return (
    <div className='blocscope'>
      <form className='foorm'>
        <input
          type="number"
          value={minValue}
          onChange={handleMinValueChange}
          placeholder='Min Son'
        />
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxValueChange}
          placeholder='Max Son'
        />
        <button type="button" onClick={() => { }}>Submit</button>
      </form>
      {filteredUsers.length > 0 && filteredUsers.map(user => (
        <div className="blocscop" key={user.id}>
          <h1>{user.id}</h1>
          <h2>URL: {user.url}</h2>
          <h2>Thumbnail URL: {user.thumbnailUrl}</h2>
          <p>Title: {user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Royxat;
