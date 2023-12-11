import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [editbtn, setEditbtn] = useState(false);
  const [usrName, setUsrName] = useState(name);
  const handleEdit = () => {
    setEditbtn(true);
  };
  const handleSave = () => {
    setEditbtn(false);
    console.log('Saving the Info :', usrName);
  };
  const handleUsrName = (event) => {
    setUsrName(event.target.value);
  };
  let inputTag = (
    <li>
      <span className='player'>
        <span className='player-name'>{usrName}</span>
        <span className='player-symbol'> {symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
  if (editbtn) {
    inputTag = (
      <li>
        <span className='player'>
          <input type='text' value={usrName} onChange={handleUsrName} />
          {/* <span className='player-name'>{name}</span> */}
          <span className='player-symbol'> {symbol}</span>
        </span>
        <button onClick={handleSave}>Save</button>
      </li>
    );
  }
  return <>{inputTag}</>;
}
