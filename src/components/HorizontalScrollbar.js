import React, { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import BodyParts from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import Exercisecard from './Exercisecard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart}) => {
  const scrollContainerRef = useRef(null);
  const [index, setIndex] = useState(0); // Initialize index to 0

  const lefthandler = () => {
    if (index - 1 < 0) {
      setIndex(data.length - 1); // Set to last item if at the beginning
    } else {
      setIndex(index - 1);
    }
    scrollToItem(index - 1);
  };

  const righthandler = () => {
    if (index + 1 >= data.length) {
      setIndex(0); // Loop back to the first item if at the end
    } else {
      setIndex(index + 1);
    }
    scrollToItem(index + 1);
  };

  const scrollToItem = (itemIndex) => {
    const item = scrollContainerRef.current.children[itemIndex];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', inline: 'start' }); // Smooth scroll to the item
    }
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <img
        src={LeftArrowIcon}
        alt="left-arrow"
        onClick={lefthandler}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden', // Hide scrollbars
          whiteSpace: 'nowrap',
          p: '20px',
        }}
      >
        {data.map((item, i) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 20px"
          >

           < BodyParts item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}  /> 
          </Box>
        ))}
      </Box>
      <img
        src={RightArrowIcon}
        alt="right-arrow"
        onClick={righthandler}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          right: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default HorizontalScrollbar;
