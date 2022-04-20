import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import { alpha, styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from "material-ui-search-bar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

const ToolBarExtend = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const App = () => {

  const [cardData, setCardData] = useState({});
  const [inputVal, setInputVal] = useState('');

  const searchFunc = () => {
    console.log("Search matched Items");
  }

  const startUrl = 'https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api';
  const repoUrl = 'https://docs.github.com/en/rest/reference/repos';

  useEffect(() => {
    axios
      .get(repoUrl)
      .then(res => {
        setCardData(res);
        console.log(cardData);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Aggregation App
            </Typography>
            <SearchBar
              sx={{ mr: 2 }}
              value={inputVal}
              onChange={newValue => setInputVal(newValue)}
              onRequestSearch={searchFunc(inputVal)}
            />
          </Toolbar>
        </AppBar>
      </Box>

      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default App;
