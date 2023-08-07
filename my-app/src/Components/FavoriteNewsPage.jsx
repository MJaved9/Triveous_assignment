import { useState } from 'react';
import { Box, Flex, Heading, IconButton, Grid, Stack, Spacer ,Text,Button,Image} from '@chakra-ui/react';
import { BsGrid } from 'react-icons/bs';
import { AiOutlineBars ,AiOutlineHeart} from 'react-icons/ai';

const FavoriteNewsPage = () => {
    const token=localStorage.getItem("Token");
    const ls=JSON.parse(localStorage.getItem("fav"));
  const [toggle, setToggle] = useState(true); // This state will toggle between grid and stack layout
  const [data, setData] = useState(ls); // State to manage the list of articles

  // Function to remove an article from the list
  const removeArticle = (index) => {
    const updatedArticles = [...data];
    updatedArticles.splice(index, 1);
    setData(updatedArticles);
  };
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
            />
          ))}
        </Stack>
      )}
  
    </Box>
      );
}
else{
    return <Box>
        <Heading>Please Login</Heading>
    </Box>
}
  
};

export default FavoriteNewsPage;

const NewsCard = ({ article ,index}) => {
  const fav=JSON.parse(localStorage.getItem("fav"))||[]
  const {title, description, publishedAt, url, image} = article;


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
        aria-label="Add to Favorites"
        colorScheme="red"
        icon={<AiOutlineHeart />}
        mt="4"
        ml="auto"
      />
    </Box>

    );
  };
  
