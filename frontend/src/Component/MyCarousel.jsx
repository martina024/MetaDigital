import React, { useState, useEffect } from 'react';
import { Box, Image, Flex, Button, useDisclosure } from '@chakra-ui/react';
import {FaGreaterThan ,FaLessThan} from"react-icons/fa"
const MyCarousel = ({images}) => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 4000)
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box position={["relative","relative","relative"]} height={["100px","150px","300px"]}>
      <Image src={images[index]} alt="Random image" />
      <Flex justifyContent="space-between" w={["100%","100%","94%"]} 
        position={["absolute","absolute","absolute"]}
        top={["0","5","20"]}
        left="0"
        right="0"
        p="2"
        alignItems="center">
        <Button
        bg="rgba(0, 0, 0, 0.5)" color="black"
         
          onClick={() => {
            clearInterval(intervalId);
            setIndex(index - 1);
          }}
        ><FaLessThan/></Button>
        <Button
        bg="rgba(0, 0, 0, 0.5)" color="black"
         
          onClick={() => {
            clearInterval(intervalId);
            setIndex(index + 1);
          }}
        ><FaGreaterThan/></Button>
      </Flex>
    </Box>
  );
};

export default MyCarousel;











































// import React, { useState } from 'react';
// import { Box, Image, Flex, Button } from '@chakra-ui/react';
// import {FaGreaterThan ,FaLessThan} from"react-icons/fa"

// const MyCarousel = ({images}) => {
 
//   const [index, setIndex] = useState(0);

//   const handlePrevClick = () => {
//     if (index === 0) {
//       setIndex(images.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (index === images.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//   };

//   return (
//     <Box position="relative" height={["100px","150px","300px"]}>
//       <Image src={images[index]} alt={`Image ${index + 1}`} />
//       <Flex
     
//        w={["100%","100%","100%"]} 
//         position={["absolute","absolute","absolute"]}
//         top={["0","5","20"]}
//         left="0"
//         right="0"
//         p="2"
        
//         justifyContent="space-between"
//         alignItems="center"
        
//       >
//         <Button bg="rgba(0, 0, 0, 0.5)" color="black" onClick={handlePrevClick}><FaLessThan/></Button>
//         <Button bg="rgba(0, 0, 0, 0.5)" color="black" onClick={handleNextClick}><FaGreaterThan/></Button>
//       </Flex>
//     </Box>
//   );
// };

// export default MyCarousel;
