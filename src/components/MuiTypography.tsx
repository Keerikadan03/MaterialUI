import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component={'h1'} gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste id cum magnam, deleniti repellat dolor molestiae qui velit sunt odio quae ullam officiis quod minus? Sed quia voluptates a porro inventore aperiam? Quam alias consequatur esse aliquid soluta a accusamus sapiente saepe quia? Dolorem ea quos ipsum aut quibusdam?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste id cum magnam, deleniti repellat dolor molestiae qui velit sunt odio quae ullam officiis quod minus? Sed quia voluptates a porro inventore aperiam? Quam alias consequatur esse aliquid soluta a accusamus sapiente saepe quia? Dolorem ea quos ipsum aut quibusdam?</Typography>


    </div>
  )
}
