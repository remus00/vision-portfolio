import HeroContent from './HeroContent';
import HeroTopbar from './HeroTopbar';

const HeroSection = () => {
    return (
        <section id="hero" className="h-fit w-full py-[24px]">
            <HeroTopbar />
            <HeroContent />
        </section>
    );
};

export default HeroSection;
