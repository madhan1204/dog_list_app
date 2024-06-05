import React, { useState, useEffect } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Box, Divider } from '@mui/material';
import DogList from './pages/Dogs';
import fetchDogs from './api/Dogsapi';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDogImageUrl, setSelectedDogImageUrl] = useState('');

  useEffect(() => {
    const getDogs = async () => {
      const dogData = await fetchDogs();
      setDogs(dogData);
    };

    getDogs();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDogClick = (imageUrl) => {
    setSelectedDogImageUrl(imageUrl);
  };

  const filteredDogs = dogs.filter(dog =>
    dog.breeds[0].name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Dog List App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ display: 'flex' }}>
        <Box flex="1">
          <DogList dogs={filteredDogs} searchQuery={searchQuery} handleSearch={handleSearch} handleDogClick={handleDogClick} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          {selectedDogImageUrl && (
            <img src={selectedDogImageUrl} alt="Selected Dog" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          )}
        </Box>
      </Container>
    </div>
  );
};

export default App;
