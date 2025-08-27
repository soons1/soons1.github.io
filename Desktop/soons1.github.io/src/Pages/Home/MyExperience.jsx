import data from "../../data/index.json";
import { Box, Stack, Typography } from "@mui/material"

function MyExperienceCard({ item }) {
    return (
        <Box className="experience--section--card">
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                alignItems: "center", width: "100%", justifyContent: { xs: "flex-start", md: "space-between" }, marginBottom: "15px"
            }}>
                <Stack width="100%">
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>{item.role}</Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: 17 }}>{item.company}</Typography>
                </Stack>
                <Typography className="experience--section--date" variant="subtitle2" sx={{ width: { xs: "100%", md: "25%" }, textAlign: { xs: "left", md: "right" } }}>{item.date}</Typography>
            </Box>
            {item.description.map((desc) => (
                <Typography className="experience--section--description" variant="body1" sx={{ marginTop: "-10px" }}>{desc}</Typography>
            ))}
        </Box>
    )
}

export default function MyExperience() {
    return <section className="experience--section" id="MyExperience">
        <div className="experience--container--box">
            <div className="experience--container">
                <h2 className="section--heading">My Experiences</h2>
            </div>
        </div>

        <div className="experience--section--container">
            {data?.experience?.map((item, index) => (<MyExperienceCard key={index} item={item} />))}
        </div>

    </section>
}