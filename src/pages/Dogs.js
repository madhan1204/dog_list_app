import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, TextField, Box } from '@mui/material';

const DogList = ({ dogs, searchQuery, handleSearch, handleDogClick }) => {
  return (
    <Box display="flex">
      <Box flex="1">
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Search by Breed"
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{ style: { borderColor: 'black' } }} // Set border color to black
          sx={{ backgroundColor: 'white', borderRadius: '0', '& .MuiOutlinedInput-root': { borderRadius: '0' } }}
        />
        <List>
          {dogs.map((dog) => (
            <ListItem key={dog.id} alignItems="flex-start" button onClick={() => handleDogClick(dog.url)}>
              <ListItemAvatar>
                <Avatar variant="square" src={dog.url} alt={dog.breeds[0].name} />
              </ListItemAvatar>
              <ListItemText
                primary={dog.breeds[0].name}
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    {dog.breeds[0].temperament}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default DogList;
