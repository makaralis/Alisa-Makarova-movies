import React from 'react';
import { ListItem, List } from '@mui/material';
import { StyledNav, StyledLink } from '../styles/navbar';


const Navbar = () =>  (
    <StyledNav>
        <List sx={{display: 'flex'}}>
            <StyledLink to='/'>
                <ListItem>Home</ListItem>
            </StyledLink>
            <StyledLink to='/favorite-movies'>
                <ListItem>Favorite Movies</ListItem>
            </StyledLink>
        </List>
    </StyledNav>
);

export default Navbar;