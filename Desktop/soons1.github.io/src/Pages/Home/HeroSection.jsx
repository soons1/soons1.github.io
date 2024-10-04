import { Box, IconButton, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const handleGitHubClick = () => {
    window.open('https://github.com/soons1/', '_blank');
};

const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/soon-wei-soh-8904a219b/', '_blank');
};

export default function HeroSection() {
    return (
        <Stack className="hero--section" sx={{ flexDirection:"column", alignContent:"center", justifyContent:"center" }} spacing={1} id="HeroSection">
            <Box component="img"
                sx={{width: 300, borderRadius:"100%"}}
                alt="Profile Photo"
                src="./img/profile-photo.JPG"/>

            <Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                    Hi, I'm{" "}
                    <span className="hero--section--title--color">Soon Wei!</span>
                </Typography>
            </Typography>

            <Stack sx={{ flexDirection:"row", width:"100%", justifyContent: "center" }}>
                <IconButton onClick={handleGitHubClick} size="200px">
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton onClick={handleLinkedInClick}>
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            </Stack>
        </Stack>
    )
}
