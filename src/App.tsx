import HeroSection from './components/Hero.tsx/HeroSection';
import MainContainer from './components/MainContainer';
import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
        <div className="relative flex h-screen w-full flex-1 flex-col-reverse items-center gap-[12px] overflow-hidden p-[12px] md:flex-row md:gap-[32px] md:p-[32px]">
            <div className="absolute inset-0 -z-50 bg-app bg-center bg-no-repeat brightness-[0.25]" />
            <Navbar />

            <MainContainer className="z-20">
                <HeroSection />
            </MainContainer>
        </div>
    );
};

export default App;
