"use client"

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Image from '@/app/components/Image';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';
import NextLink from 'next/link';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema, ValidationSchema } from '@/app/utils/validation/sign-in-validation';
import { signInInputs } from '@/app/utils/types';


export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: signInInputs) => {
    console.log(data)
  };
  return (
    <Stack
      component={Paper}
      elevation={3}
      direction={{ xs: "column", sm: "column", md: "row" }} spacing={{ xs: 1, sm: 1 }}
      sx={{
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      <Box sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        alignItems: 'center',
      }}>
        <Image
          src='/images/auth/authimg.jpg'
          height={500}
          width={600}
          maxHeight='100%'
          maxWidth='100%'

        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 5,
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate
          sx={{
            maxHeight: '100%',
            maxWidth: '100%'
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            autoComplete="username"
            autoFocus
            error={!!errors['username']}
            helperText={errors['username'] ? errors['username'].message : ''}
            {...register('username')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!errors['password']}
            helperText={errors['password'] ? errors['password'].message : ''}
            {...register('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: "#390da0", hover: "#425feb" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={NextLink} href="sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  )
}