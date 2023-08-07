import React, { useEffect, useState } from "react";
import axios from 'axios';
import { AiOutlineHeart, AiOutlineBars } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  IconButton,
  Grid,
} from "@chakra-ui/react";

const Home = () => {
  const token=localStorage.getItem("Token")
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [articles, setArticles] = useState(data);

  const addToFavorites = (article) => {
    setFavorites((prevFavorites) => [...prevFavorites, article]);
    alert('Added to Favorites!');
  };

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
  };

  const fetchData = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&apikey=acbc622f49c0356561a87be0e22fa997"
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

if(token){
  return (
    <Box p="4" maxWidth="1200px" mx="auto">
    <Flex align="center" mb="4">
      <Heading as="h1" size="xl" mr="4">
        Latest News
      </Heading>
      <Spacer />
      <IconButton
        icon={toggle ? <BsGrid /> : <AiOutlineBars />}
        onClick={() => setToggle(!toggle)}
        variant="ghost"
      />
    </Flex>

    {toggle ? (
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="4">
        {data.map((el, index) => (
          <NewsCard
            key={index}
            article={el}
            addToFavorites={() => addToFavorites(el)}
            isFavorite={favorites.includes(el)}
          />
        ))}
      </Grid>
    ) : (
      <Stack spacing="4">
        {data.map((el, index) => (
          <NewsCard
            key={index}
            article={el}
            index={index}
            addToFavorites={() => addToFavorites(el)}
            isFavorite={favorites.includes(el)}
          />
        ))}
      </Stack>
    )}

    {/* Add a link to the Favorites page */}
    <Button mt="4" colorScheme="blue" onClick={() => console.log('Navigate to Favorites page.')}>
      View Favorites
    </Button>
  </Box>
  );
}
else{
  return(
    <Box>
      <Heading>Please Login..</Heading>
    </Box>
  )
}
};

const NewsCard = ({ article ,index}) => {
  const fav=JSON.parse(localStorage.getItem("fav"))||[]
  const {title, description, publishedAt, url, image} = article;
  const handleClick=()=>{
    fav.push(article)
    localStorage.setItem("fav",JSON.stringify(fav))
    console.log(fav)
  }


  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      p="4"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)' }}
    >
      <Image src={image} alt={title} h="200px" objectFit="cover" borderRadius="md" mb="4" />
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{publishedAt}</Text>
      <Heading as="h2" size="md" mt="2" lineHeight="1.3" fontWeight="semibold" color="blue.600" noOfLines={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600" noOfLines={3}>
        {description}
      </Text>
      <Button as="a" href={url} target="_blank" colorScheme="blue" size="sm" mt="4">
        Read More
      </Button>
      <IconButton 
      onClick={handleClick}
        aria-label="Add to Favorites"
        colorScheme="red"
        icon={<AiOutlineHeart />}
        mt="4"
        ml="auto"
      />
    </Box>
  );
};

export default Home;
