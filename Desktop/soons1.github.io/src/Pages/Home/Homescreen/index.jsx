import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyExperience from "../MyExperience";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <MyPortfolio />
            <MyExperience />
            <ContactMe />
        </>
    );
}