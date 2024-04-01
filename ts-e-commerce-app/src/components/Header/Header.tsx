import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

type headings = {
  header: String,
  subheader: String
}

const Header = ({header, subheader} : headings) => {
  return (
      <Stack>
      <Typography sx={{fontWeight: 'bold', fontSize: '22px'}}>{header}</Typography>
      <Typography>{subheader}</Typography>
      </Stack>
  )
}

export default Header
