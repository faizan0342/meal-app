import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import React, { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop: "2rem",
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

function Favorites() {
    const [value, setValue] = useState([]);

    useEffect(() => {
        const storedValue = localStorage.getItem('favoriteCategories');
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        }
    }, []);

    const handleRemoveFavorite = (index) => {
        const updatedValue = [...value];
        updatedValue.splice(index, 1);
        setValue(updatedValue);
        localStorage.setItem('favoriteCategories', JSON.stringify(updatedValue));
    };

    return (
        <div>
            {value.length === 0 ? <div>Empty Item Favorites</div> : (
                <>
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{ width: '100%' }}
                    >
                        <Grid xs={12}>
                            <Item>
                                <div style={{ fontSize: "30px", marginTop: "-2rem" }}>Favorites</div>
                            </Item>
                        </Grid>

                        {value.map((item, index) => (
                            <Grid key={index} xs={3}>
                                <Item>
                                    <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                                    <div className='favStyle'>
                                        <div>{item.name}</div>
                                        <div>{item.category}</div>
                                        <div>
                                            <Item>
                                                <IconButton aria-label="toggle favorite" onClick={() => handleRemoveFavorite(index)}>
                                                    <FavoriteBorderIcon style={{ color: "blue", position: "absolute", marginTop: "-4.5rem" }} fontSize="large" />
                                                </IconButton>
                                            </Item>
                                        </div>
                                    </div>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}

export default Favorites;
