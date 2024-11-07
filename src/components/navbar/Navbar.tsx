import NavbarBtn from './NavbarBtn';

const Navbar = () => {
    return (
        <div className="container-bg isolation-auto z-30 flex h-fit w-fit flex-row gap-[16px] rounded-full p-[16px] text-white md:flex-col">
            <NavbarBtn href="hero" label="home" icon="mingcute:home-1-line" />
            <NavbarBtn
                href="about"
                label="about me"
                icon="mingcute:user-5-line"
            />
            <NavbarBtn
                href="projects"
                label="projects"
                icon="mingcute:folder-star-line"
            />
            <NavbarBtn
                href="touch"
                label="get in touch"
                icon="mingcute:message-3-line"
            />
        </div>
    );
};

export default Navbar;
