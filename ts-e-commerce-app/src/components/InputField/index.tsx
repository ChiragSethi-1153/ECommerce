import { Stack, TextField } from '@mui/material'
import React from 'react'

type InputProps = {
    header: string,
    fontsize: string,
    fontweight: string,
    placeholder: string,
}
const InputField = (props: InputProps) => {
    return (
        <Stack gap={1} py={2}>
            <TextField placeholder={props.placeholder} fullWidth />
        </Stack>
    )
}

export default InputField