import { Divider, Stack } from '@mui/material'
import React from 'react'
import SettingsLeft from './left'
import PersonalInfo from './PersonalInfo'

const SettingsBody = () => {
  return (
    <Stack direction={'row'} sx={{boxSizing: 'border-box', p: 2}}>
        <SettingsLeft />
        <PersonalInfo />
    </Stack>
  )
}

export default SettingsBody
