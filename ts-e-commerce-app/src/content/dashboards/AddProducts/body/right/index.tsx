import { IconButton, Stack, Box, Autocomplete, Checkbox, TextField, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import DragAndDrap from '../../../../../components/Drag&Drop/index'
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CustomButton from '../../../../../components/Button/CustomButton'
import { useNavigate } from 'react-router'
import DragAndDrop from '../../../../../components/Drag&Drop/index';
import ImageLoader from '../../../../../components/Loader';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Carousel from 'react-material-ui-carousel';

const fileTypes = ["JPG", "PNG", "JPEG"];


const ProductRight = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState<File[]>([]);
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const handleCancel = (e : React.MouseEvent<HTMLButtonElement>) => {
        navigate(-1)
    }

  
      const handleChange = (file: File[]) => {
          const arrayfile = Array.from(file);
  
          const urls = arrayfile.map(a => {
              return URL.createObjectURL(a)
          });
          setImageUrls((prev) => [...prev, ...urls]);
  
      };
      const deleteImg = (index: number) => {
          console.log("first", index)
          setImageUrls((prev) =>
              prev.filter((_, i) => i !== index)
          )
      }

    return (
        <>
        {
        imageUrls && imageUrls.length > 0 ?
        <Carousel sx={{ minHeight:"450px",  boxSizing:"border-box", borderRadius:"0.8rem"}}>
            {
            imageUrls?.map((i : any) => {
                return (
                    <>
                    {console.log(i)}
                    <img src={i} style={{height:"100%", width:"100%",  borderRadius:"0.8rem"}} alt=""/>   
                    </>
                )
                }
            )
            }
        </Carousel>
          : <></>
        }
          <Stack>
            <Stack py={2} gap={1} >
                <Typography sx={{fontSize:'14', fontWeight:'600'}}>Product Gallery</Typography>
                <FileUploader children={<DragAndDrop file={file} />} handleChange={handleChange} multiple name="file" types={fileTypes} />
                <Stack flexWrap={'wrap'} direction={'row'} gap={2}>
                    {imageUrls?.map((a, index) => (
                        <Box key={index} sx={{ width:'100%', height: '96px', position: 'relative' ,display:"flex"}}>
                            <img src={a} alt=""  style={{width:"64px", height:"64px", margin:"16px", borderRadius:"0.4rem"}}/>
                            <IconButton onClick={() => {
                                deleteImg(index)
                            }} sx={{ position: 'absolute', top: '8px', right: '8px', height: '15px', width: '15px', color: 'black' }}><CloseIcon sx={{ height: '15px', width: '15px' }} /></IconButton>
                            <Box sx={{ position:"absolute", left:"96px", top:"16px", width:"calc(100% - 168px)"}}>
                              <Typography  >Product image name </Typography>
                              <Box sx={{mt:"16px"}}><ImageLoader /></Box>
                            </Box>
                            <IconButton sx={{ position:"absolute", right:"16px", top:"23px", color:"#003F62"}}><CheckCircleRoundedIcon/></IconButton>
                        </Box>
                    ))}
                </Stack>

            </Stack>
            
            <Stack direction={'row'} py={2} gap={5}>
                <CustomButton color='primary' handleClick={() => {}} variant="contained" title="Save" />
                <CustomButton color='primary' handleClick={(e) => {handleCancel(e)}} variant="outlined" title="Cancel" />
            </Stack>
        </Stack>

        </>

    )
}

export default ProductRight