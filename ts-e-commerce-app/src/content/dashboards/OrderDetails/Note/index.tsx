import { Box, Stack, TextField } from '@mui/material'
import React from 'react'

function Note() {
    return (
        <Stack gap={1}>
            <Box sx={{ fontWeight: '600', fontSize: '19px' }}>Note</Box>
            <TextField sx={{ maxWidth: '400px', width: '400px' }} id="outlined-multiline-static" multiline rows={4} defaultValue="Type some notes" />
        </Stack>
    )
}

export default Note