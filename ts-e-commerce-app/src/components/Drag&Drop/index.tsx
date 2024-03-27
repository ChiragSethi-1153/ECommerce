import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

type DragProps = {
    file: any
}

const DragAndDrop = (props: DragProps) => {

    return (
        <Stack p={2} gap={1} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} sx={{ border: '1px dotted ' }} >
            <ImageOutlinedIcon sx={{ fontSize: '50px' }} />
            <Stack alignItems={'center'}>
                <Typography>Drop your images here, or browse</Typography>
                <Typography>Jpeg, png are allowed</Typography>
            </Stack>

        </Stack>
    )
}

export default DragAndDrop