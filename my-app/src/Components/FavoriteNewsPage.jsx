import { useState } from 'react';
import { Box, Flex, Heading, IconButton, Grid, Stack, Spacer ,Text,Button} from '@chakra-ui/react';
import { BsGrid } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';

const FavoriteNewsPage = ({ data }) => {
    const token=localStorage.getItem("Token");
  const [toggle, setToggle] = useState(true); // This state will toggle between grid and stack layout
  const [articles, setArticles] = useState(data); // State to manage the list of articles

  // Function to remove an article from the list
  const removeArticle = (index) => {
    const updatedArticles = [...articles];
    updatedArticles.splice(index, 1);
    setArticles(updatedArticles);
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
              {articles.map((el, index) => (
                <NewsCard key={index} article={el} removeArticle={() => removeArticle(index)} />
              ))}
            </Grid>
          ) : (
            <Stack spacing="4">
              {articles.map((el, index) => (
                <NewsCard key={index} article={el} removeArticle={() => removeArticle(index)} />
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

const NewsCard = ({ article, removeArticle }) => {
    const { title, description, author, publishedAt } = article;
  
    return (
      <Box borderWidth="1px" borderRadius="lg" p="4" boxShadow="md">
        <Heading as="h3" size="md" mb="2">
          {title}
        </Heading>
        <Text color="gray.600" mb="2">
          {description}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Author: {author}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Published At: {publishedAt}
        </Text>
        {removeArticle && (
          <Button mt="2" size="sm" colorScheme="red" onClick={removeArticle}>
            Remove
          </Button>
        )}
      </Box>
    );
  };
  
