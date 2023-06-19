'use client';

import Image from 'next/image';
import { Button, Grid, TextField } from '@mui/material';
import doctor from '../../public/doctor.png';

interface LandingProps {}

export default function Landing({}: LandingProps) {
  return (
    <Grid
      className="landing"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item textAlign="center">
        <h1>Track your migraines, help doctors find cure</h1>
        <p style={{ maxWidth: '800px', lineHeight: '1.45' }}>
          Our app helps you track your migraine events, and provides a unique
          opportunity for you to help doctors cure migraines
        </p>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ py: 2 }}
      >
        <TextField
          sx={{ mr: 2 }}
          size="small"
          label="me@email.com"
          variant="outlined"
        />
        <Button variant="contained">Signup</Button>
      </Grid>
      <Grid item>
        <Image
          style={{
            maxWidth: '700px',
            width: '100%',
            height: 'auto',
            margin: 'auto'
          }}
          src={doctor}
          alt="doctor"
          className="pointer"
        />
      </Grid>
    </Grid>
  );
}
