import { cn } from '../lib/utils';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const MainContainer = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                'container-bg no-scrollbar relative z-10 h-full w-full overflow-scroll rounded-[32px] px-[12px] md:px-[24px]',
                className
            )}
        >
            {children}
        </div>
    );
};

export default MainContainer;
