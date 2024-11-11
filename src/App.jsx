import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { AppBar, Box, Button, Card, CardContent, Container, Paper, Toolbar, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Margin } from '@mui/icons-material';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Box sx={{margin: 1}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>para taylor
            </Typography>
            <Button color="inherit" variant='outlined'>de tu amigo frikinerd</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Typography
          variant='h3'
          textAlign={'center'}
          letterSpacing={-2}
          fontWeight={1000}>
          Para Taylor Swift
        </Typography>
        <h1> </h1>
      </div>

      <div>
        <Paper elevation={1} >
          <Typography variant='h4' textAlign={'center'}>No solo eres mi mejor amiga</Typography>
          <Paper elevation={10}><Typography variant='h3' textAlign={'justify'} fontWeight={1000}>Eres la Mejor amiga del mundo</Typography></Paper>
        </Paper>
        <p> </p>
      </div>
      <div>
        <Typography variant='h5' textAlign={'justify'}>
          hola vv, hice esta carta para desearte feliz cumpleaños pero no solo eso, sino queria decirte tambien
          que eres una amistad muy especial para mi.</Typography>
        <p> </p>
        <Typography variant='h5' fontWeight={1000} textAlign={'justify'}>
          Tambien quiero decirte algo que estuve recordando estos dias:
        </Typography>
        <p> </p>
        <Typography variant='h5'>
          Pues, a finales de 1er año, recuerdo cuando yo, fernando, avila y tu jugabamos uno (Siempre perdia yo)
        </Typography>
        <p></p>
        <Box>
          <Paper elevation={14}>
            <Typography variant='h4' fontWeight={1000}>Top 3 Razones de porque te quiero:</Typography> <p></p>
            <Card style={{ backgroundColor: '#A2D2FF' }}><Typography variant='h5'>1. Siempre te preocupas por mi</Typography></Card>
            <Card style={{ backgroundColor: '#BDE0FE' }}><Typography variant='h5'>2. Siempre me escuchas</Typography></Card>
            <Card style={{ backgroundColor: '#A2D2FF' }}><Typography variant='h5'>3. Eres una persona muy linda</Typography></Card>
          </Paper>
        </Box>
        <p></p>
        <Box>
          <Paper elevation={14}>
            <Typography variant='h4' fontWeight={1000}>Top 2 Razones de porque No te quiero:</Typography> <p></p>
            <Card style={{ backgroundColor: '#A2D2FF' }}><Typography variant='h5'>1. No hay razones, eres especial para mi</Typography></Card>
            <Card style={{ backgroundColor: '#BDE0FE' }}><Typography variant='h5'>2. Perder la racha de tiktok cuando teniamos 60 dias</Typography></Card>
          </Paper>
          <p></p>
          <div>
            <Typography variant='h5'>
              Yo sé que la carta esta algo fea, porque la hice con algo de prisa peeeero, eso no me limita
              a desearte un feliz cumpleaños y decirte que en todo este tiempo de amistad, haz sido muy especial
              para mi, y que a pesar de que a veces desaparezca y no te escriba KJASJKASK, sinceramente, eres una
              persona unica, debido a que siempre estas alli

            </Typography>
            <Typography variant='h2' style={{ color: '#FF96BC' }}>Feliz Cumpleaños, te quiero a millones vv</Typography>
          </div>
        </Box>
      </div>
      </Box>
    </>
  );
}

export default App;
