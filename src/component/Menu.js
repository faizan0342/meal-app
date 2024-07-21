import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import { useHistory } from 'react-router-dom';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: 4,
  marginTop : "2rem",
  color: theme.vars.palette.text.secondary,
}));

function Menu() {
    const history = useHistory()
    function catg1(){
        // history.push("/catg1")
        window.location.href = '/catg1';
    }
    function catg2(){
      window.location.href = '/catg2';
        // history.push("/catg2")
    }
    function catg3(){
      window.location.href = '/catg3';
        // history.push("/catg3")
    }
    function catg4(){
      window.location.href = '/catg4';
        // history.push("/catg4")
    }
    function catg5(){
      window.location.href = '/catg5';
        // history.push("/catg5")
    }
    function catg6(){
      window.location.href = '/catg6';
        // history.push("/catg6")
    }
    function catg7(){
      window.location.href = '/catg7';
        // history.push("/catg7")
    }
    function catg8(){
      window.location.href = '/catg8';
        // history.push("/catg8")
    }
    function catg9(){
      window.location.href = '/catg9';
        // history.push("/catg9")
    }
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' }}
    >
      <Grid xs={4}>
        <Item><button onClick={() => catg1()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 1</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg2()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 2</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg3()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 3</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg4()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 4</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg5()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 5</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg6()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 6</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg7()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 7</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg8()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 8</button></Item>
      </Grid>
      <Grid xs={4}>
        <Item><button  onClick={() => catg9()} style={{ background: "none", border: "none", border: "0.5px solid balck", width: "80%", height: "2.5rem", cursor: 'pointer' }}>Category 9</button></Item>
      </Grid>
    </Grid>
  );
}

export default Menu