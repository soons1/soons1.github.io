import { Grid2, Tooltip } from "@mui/material";
import data from "../../data/index.json";

function MyTechStackItem({ item }) {
    return (
        <Grid2 item>
            <Tooltip title={item.alt}>
                <img width={60} src={item.src} alt={item.alt} />
            </Tooltip>
        </Grid2>
    )
}

export default function MySkills() {
    return (
        <section id="MySkills" className="skills--section">
            <div className="skills--container--box">
                <h2 className="section--heading">
                    My Tech Stack
                </h2>
            </div>
            <Grid2 container className="skills--section--container" sx={{ gap: "20px", justifyContent: "left" }}>
                {data?.skills?.map((item, index) => (<MyTechStackItem key={index} item={item} />))}
            </Grid2>
        </section>
    );
}