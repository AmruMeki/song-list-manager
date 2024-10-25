import React from 'react';
import { useSelector } from 'react-redux';
import SongItem from './SongItem'
import styled from '@emotion/styled';

const SongList = () => {
	const Boxes = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin:30px;
  `;
  let songs = useSelector((state) => state.app);
  console.log('songs', songs);
  return (<Boxes className='my-3'>
		{songs.map((song)=>{
			return <SongItem key={song.id} song={song} />
		})}
	</Boxes>);
};

export default SongList;
