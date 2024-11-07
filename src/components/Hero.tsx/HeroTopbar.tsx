import Watch from './Watch';

const HeroTopbar = () => {
    return (
        <div className="flex items-center justify-between border-b border-neutral-400/80 pb-[24px]">
            <div className="flex items-center gap-[12px]">
                <img
                    src="/public/images/avatar.png"
                    alt="avatar"
                    className="h-[48px] w-[48px] shrink-0 rounded-full"
                />
                <div className="flex flex-col">
                    <p className="text-[18px] leading-[22px] text-white">
                        Remus Burlacu
                    </p>
                    <p className="text-[16px] leading-[18px] text-neutral-400">
                        remus.burlacu00@gmail.com
                    </p>
                </div>
            </div>

            <Watch />
        </div>
    );
};

export default HeroTopbar;
