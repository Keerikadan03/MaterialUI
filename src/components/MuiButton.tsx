import React from 'react'
import { Stack, Button } from '@mui/material'

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction={'row'}>
        <Button variant='text' href='https://google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack spacing={2} variant='contained'></Stack>
    </Stack>
  )
}
