import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { toggleIcon } from './redux/iconChange/iconSlice';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function App() {
  const isDay = useSelector((state) => state.icon.isDay); // Ensure this matches your slice
  const color = useSelector((state) => state.icon.color); // Get the current color from Redux

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleIcon()); // Dispatch action to toggle the icon and change the color
  };

  return (
    <div
      style={{
        backgroundColor: isDay ? '#ffffff' : '#333333', // Optional: change background color
        padding: '100px',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        gap: '100px',
      }}
    >
      <div>
        {isDay ? (
          <WbSunnyIcon onClick={handleClick} style={{ color }} />
        ) : (
          <BedtimeIcon onClick={handleClick} style={{ color }} />
        )}
      </div>
    </div>
  );
}

export default App;
