import { Stack, TextField } from '@mui/material'
import React from 'react'

type InputProps = {
    header: string,
    fontsize: string,
    fontweight: string,
    placeholder: string,
    value: any,
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void
}
const InputField = (props: InputProps) => {
    return (
        <Stack gap={1} py={2}>
            <TextField placeholder={props.placeholder} value={props.value} onChange={props.handleChange} fullWidth />
        </Stack>
    )
}

export default InputField