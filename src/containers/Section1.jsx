import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { section1Content } from '../utils/content'
import LaunchButton from '../components/buttons/LaunchButton'

const  {
    MainBG,
    TreesImage,
    CliffImage,
    HorseImage,
    ShootingStarImage,
    title,
    subtitle,
  } = section1Content;

  const CustormButton = ({children})=>{
    return <Button variant='outlined'>{children}</Button>
  }

const Section1 = () => {
  return (
    <Box sx={{}}>
        {/* main backgrounds */}
hi
        {/* Elements */}

        {/* contents */}
        <Container sx={ {bgcolor: "red", height: "80vh"} }>

            <Stack justifyContent="center" height="inherit">
                <Typography variant='h1'>{title}</Typography>
                <Typography variant='h2'>{subtitle}</Typography>
                
                <Stack direction={{xs: "column", md: "row"}} spacing={4} alignItems="center" >
                    <LaunchButton sx={{ height: 58, px: 3}} />
                    <CustormButton>2</CustormButton>
                    <CustormButton>3</CustormButton>
                   
                </Stack>
            </Stack>
        </Container>
      
    </Box>
  )
}

export default Section1
