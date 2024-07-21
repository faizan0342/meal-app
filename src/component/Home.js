// import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { useHistory } from 'react-router-dom';

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



function Home() {

    const history = useHistory();

    function menuFun() {
        window.location.href = '/menu';
    }
    function favoritesFun() {
        window.location.href = '/favorites'
        // history.push("/favorites")
    }
    function randomMealsFun() {
        window.location.href = '/randomMeals'
        // history.push("/randomMeals")
    }
    
    return (
        <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: '100%' }}
        >
            <Grid xs={12}>
                <Item><div style={{ fontSize: "30px" }}>Home Page</div></Item>
            </Grid>
            <Grid xs={6}>
                <Item><button onClick={() => menuFun()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "25%", height: "2.5rem", cursor: 'pointer' }}>Menu</button></Item>
            </Grid>
            <Grid xs={6}>
                <Item><button  onClick={() => favoritesFun()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "25%", height: "2.5rem", cursor: 'pointer' }}>Favorites</button></Item>
            </Grid>
            <Grid xs={12}>
                <Item><button onClick={() => randomMealsFun()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "25%", height: "2.5rem", cursor: 'pointer' }}>Random Meals</button></Item>
            </Grid>
        </Grid>
    );
}

export default Home