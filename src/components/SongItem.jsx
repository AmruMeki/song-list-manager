import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSong, updateSong } from '../redux/app.actions';
import styled from '@emotion/styled';
const SongItem = ({ song }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(song.name);
  console.log('song =>', song);
  const dispatch = useDispatch();
  const Box = styled.div`
    display: flex;
  `;
  const Limit=styled.div`
  width:50%;
  `
  const Title = styled.header`
    text-align: center;
    height: 30px;
    margin-top: 10px;
    margin-right:50px;

  `;
  const Button1 = styled.button`
  tetx-align:center;
    background: #5e5df0;
    color: #ffffff;
    margin: 10px;
    font-size: 16px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
  `;
  const Button2 = styled.button`
    background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    margin: 10px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
  `;
  return (
    <>
      <div className='dis'>
        <div className="col-8">
          {edit ? (
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          ) : (
            <Title>{song.name}</Title>
          )}
        </div>
        <Box className="row mx-2 align-items-center">
          <Limit></Limit>
          <Button1
            onClick={() => {
              if (edit) {
                setName(song.name);
                dispatch(
                  updateSong({
                    ...song,
                    name: name,
                  })
                );
              }
              setEdit(!edit);
            }}
            type="primary"
            className="mr-2 "
          >
            {edit ? 'Update' : 'Edit'}
          </Button1>
          <Button2
            type="primary"
            onClick={() => dispatch(deleteSong({ id: song.id }))}
          >
            Delete
          </Button2>
        </Box>
      </div>
    </>
  );
};

export default SongItem;
