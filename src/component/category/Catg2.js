import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop: "4rem",
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

const IconContainer = styled('div')(({ isFavorite }) => ({
    backgroundColor: isFavorite ? 'blue' : '#f5f5f5', 
    borderRadius: '50%',
    padding: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

function Catg2() {
    const [categories, setCategories] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    useEffect(() => {
        // Load favorites from local storage on component mount
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteCategories')) || [];
        setFavorites(storedFavorites);
    }, []);

    const handleClick = (category) => {
        const existingFavorites = JSON.parse(localStorage.getItem('favoriteCategories')) || [];
        const isFavorite = existingFavorites.some(item => item.id === category.idCategory);

        if (isFavorite) {
            // Remove item from local storage
            const updatedFavorites = existingFavorites.filter(item => item.id !== category.idCategory);
            localStorage.setItem('favoriteCategories', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
            alert("Removed from favorites!");
        } else {
            // Add item to local storage
            const data = {
                id: category.idCategory,
                name: category.strCategory,
                description: category.strCategoryDescription,
                image: category.strCategoryThumb,
                timestamp: new Date().toISOString()
            };
            const updatedFavorites = [...existingFavorites, data];
            localStorage.setItem('favoriteCategories', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
            alert("Added to favorites!");
        }
    };

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "2rem" }}>Category 2</div>
            <ul>
                {categories.slice(2, 4).map(category => (
                    <li key={category.idCategory}>
                        <div >
                            <Grid
                                container
                                rowSpacing={2}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                sx={{ width: '100%' }}
                            >
                                <Grid xs={3.5}>
                                    <Item>
                                        <img
                                            style={{ width: "200px" }}
                                            src={category.strCategoryThumb}
                                            alt={category.strCategory}
                                        />
                                    </Item>
                                </Grid>
                                <Grid xs={3}>
                                    <Item>{category.strCategory}</Item>
                                </Grid>
                                <Grid xs={3.5}>
                                    <Item>{category.strCategoryDescription}</Item>
                                </Grid>
                                <Grid xs={2}>
                                    <Item>
                                        <IconContainer isFavorite={favorites.some(item => item.id === category.idCategory)}>
                                            <IconButton
                                                aria-label="toggle favorite"
                                                onClick={() => handleClick(category)}
                                                sx={{ p: 0 }} // Remove default padding
                                            >
                                                <FavoriteBorderIcon
                                                    color="inherit"
                                                    fontSize="large"
                                                />
                                            </IconButton>
                                        </IconContainer>
                                    </Item>
                                </Grid>
                            </Grid>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catg2;
