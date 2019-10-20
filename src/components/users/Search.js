import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showAlert, showClear }) => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers } = githubContext;

  const [text, setText] = useState('');

  const onChange = e => setText([e.target.value]);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please, enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="search users"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
