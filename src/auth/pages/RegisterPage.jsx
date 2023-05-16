import {Link,Grid, Typography, TextField, Button} from '@mui/material' ;
import {Google} from '@mui/icons-material' ;
import {Link as RouterLink} from 'react-router-dom' ;
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta' >
    <form>
        <Grid container>
        <Grid item xs={12} sx={{mt:2}}>
            <TextField 
            label="Nombre Completo"
            type='text'
            placeholder='Jonathan Dominguez'
            fullWidth />
          </Grid>

          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
            label="Correo"
            type='email'
            placeholder='jona@gmail.com'
            fullWidth />
          </Grid>

          <Grid item xs={12} sx={{mt:2}}>
            <TextField 
            label="Contraseña"
            type='email'
            placeholder='jona@gmail.com'
            fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid 
          container 
          direction='row' 
          justifyContent='end'
          sx={{mt:1}}>
            <Typography sx={{mr:1}}>
            Ya tienes cuenta? 
            </Typography>
            <Link 
            component={ RouterLink}
            color='inherit' to="/auth/Login">
              Ingresar 
            </Link>

          </Grid>
          
        </Grid>
      </form>
  </AuthLayout>

)
}
