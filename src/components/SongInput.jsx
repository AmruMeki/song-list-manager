import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/app.actions';
import styled from '@emotion/styled';

const SongInput = () => {
  const Button = styled.button`
    background-color: #c2fbd7;
    color: green;
    hover:background-color: #c2fbd7;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    height: 30px;
    margin-left: 5px;
  `;
  const [name, setName] = useState('');
  let dispatch = useDispatch();
  const handelAddSong = () => {
    dispatch(
      addSong({
        id: Math.random(),
        name,
      })
    );
    setName('');
  };
  return (
    <>
      <div>
        <input
          className="input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button
          className="ml-3"
          type="primary"
          onClick={handelAddSong}
          size="medium"
          style={{ width: '135px' }}
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default SongInput;
