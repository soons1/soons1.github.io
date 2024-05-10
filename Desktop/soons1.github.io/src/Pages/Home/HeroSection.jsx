export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Soon Wei</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        I design and code beautifully simple things, and I love what I do.
                        <br /> I am a Full Stack Developer based in Lagos, Nigeria.
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}