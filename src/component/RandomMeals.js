import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import Sheet from '@mui/joy/Sheet';

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

function MealGenerator() {
    const [meal, setMeal] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const generateMeal = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                const newMeal = response.data.meals[0];
                setMeal(newMeal);
                checkFavoriteStatus(newMeal);
            })
            .catch(error => {
                console.error('Error generating meal:', error);
            });
    };

    const checkFavoriteStatus = (meal) => {
        const existingFavorites = JSON.parse(localStorage.getItem('favoriteCategories')) || [];
        const isFav = existingFavorites.some(item => item.idMeal === meal.idMeal);
        setIsFavorite(isFav);
    };

    const handleFavoriteClick = () => {
        if (meal) {
            const existingFavorites = JSON.parse(localStorage.getItem('favoriteCategories')) || [];
            const isFav = existingFavorites.some(item => item.idMeal === meal.idMeal);

            if (isFav) {
                const updatedFavorites = existingFavorites.filter(item => item.idMeal !== meal.idMeal);
                localStorage.setItem('favoriteCategories', JSON.stringify(updatedFavorites));
                setIsFavorite(false);
                console.log("Removed from favorites:", meal);
                alert("Removed from favorites!");
            } else {
                const data = {
                    idMeal: meal.idMeal,
                    name: meal.strMeal,
                    category: meal.strCategory,
                    image: meal.strMealThumb,
                    timestamp: new Date().toISOString()
                };
                const updatedFavorites = [...existingFavorites, data];
                localStorage.setItem('favoriteCategories', JSON.stringify(updatedFavorites));
                setIsFavorite(true);
                console.log("Added to favorites:", data);
                alert("Added to favorites!");
            }
        } else {
            console.log("No meal data to save.");
        }
    };

    return (
        <div>
            <div>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ width: '100%' }}
                >
                    <Grid xs={12}>
                        <Item>
                            <div style={{ fontSize: "30px", marginTop: "-7rem" }}>Meal Generator</div>
                        </Item>
                    </Grid>
                    {meal && (
                        <div className='meaAliment'>
                            <Grid xs={3}>
                                <Item>{meal.strMeal}</Item>
                            </Grid>
                            <Grid xs={3}>
                                <Item>
                                    <img style={{ width: "200px" }} src={meal.strMealThumb} alt={meal.strMeal} />
                                </Item>
                            </Grid>
                            <Grid xs={3}>
                                <Item>{meal.strCategory}</Item>
                            </Grid>
                            <Grid xs={3}>
                                <Item>
                                    <IconButton aria-label="toggle favorite" onClick={handleFavoriteClick}>
                                        {isFavorite ? (
                                            <FavoriteIcon color="primary" fontSize="large" />
                                        ) : (
                                            <FavoriteBorderIcon color="inherit" fontSize="large" />
                                        )}
                                    </IconButton>
                                </Item>
                            </Grid>
                        </div>
                    )}
                    <Grid xs={12}>
                        <Item>
                            <button onClick={generateMeal}>Generate Meal</button>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default MealGenerator;
