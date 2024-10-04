import data from "../../data/index.json";
import { Box, Typography } from "@mui/material"

function MyPortfolioCard({ item }) {
    return (
        <Box className="portfolio--section--card">
            <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
                <div>
                    <Typography className="portfolio--section--title" variant="h5">{item.title}</Typography>
                    <Typography className="text--md" variant="body1">{item.description}</Typography>
                </div>
                <a href={item.link} target="_blank" style={{ textDecoration: 'none' }}>
                    <p className="text--sm portfolio--link">
                        View On Github
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 19"
                            fill="none"
                        >
                            <path
                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                stroke="currentColor"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </p>
                </a>
            </div>
        </Box>
    )
}

export default function MyPortfolio() {
    return <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container--box">
            <div className="portfolio--container">
                <h2 className="section--heading">My Projects</h2>
            </div>
        </div>

        <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index) => (<MyPortfolioCard key={index} item={item} />))}
        </div>
        
    </section>
}