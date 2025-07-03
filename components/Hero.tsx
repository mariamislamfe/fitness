import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section 
      className="h-[80vh] lg:h-[912px] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/img/hero/bg.png')"
      }}
      id="home"
    >
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="container mx-auto relative z-20 h-full flex items-center">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;