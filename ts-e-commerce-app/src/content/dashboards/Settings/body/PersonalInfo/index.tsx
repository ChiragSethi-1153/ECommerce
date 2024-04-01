import { Avatar, Box, Divider, Stack, TextField, Typography } from '@mui/material'
import CustomButton from '../../../../../components/Button/CustomButton'

function PersonalInfo() {
    return (
        <Stack p={3} width={'100%'} ml={'20px'}>
            <Stack my={1}>
                <Typography sx={{fontSize: '24px', fontWeight: '600'}}>General Information</Typography>
                <Typography fontSize={'14px'} fontWeight={'600'}>This is my information</Typography>
            </Stack>
            <Divider />
            <Stack gap={1} my={2}>
                <Typography fontSize={'20px'} fontWeight={'600'}>Profile Picture</Typography>
                <Stack direction='row' alignItems={'flex-end'} gap={3} >
                    <Stack direction='row' alignItems={'center'} gap={1}>
                        <Avatar sx={{ width: '64px', height: '64px' }} />
                        <Stack>
                            <Typography fontSize={'14px'} fontWeight={'600'}>User Name</Typography>
                            <Typography fontSize={'12px'} fontWeight={''}>Role/Title</Typography>
                            <Typography fontSize={'12px'} fontWeight={''}>Location</Typography>
                        </Stack>
                    </Stack>
                    <CustomButton color='primary' handleClick={() => {}} variant={'contained'} title={'Change'} />
                    <CustomButton color='primary' handleClick={() => {}} variant={'outlined'} title={'Delete'} />
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
                <Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'}>UserName</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'}>Phone Number</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'}>Address</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'}>City</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                </Box>
                <Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'}>Email Address</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography  fontSize={'16px'} fontWeight={'600'}>Fax</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1} >
                        <Typography fontSize={'16px'} fontWeight={'600'}>Country</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography  fontSize={'16px'} fontWeight={'600'}>State</Typography>
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}

export default PersonalInfo