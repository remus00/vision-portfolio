interface Props {
    children: React.ReactNode;
    label: string;
}

const Tooltip = ({ children, label }: Props) => {
    return (
        <div className="group relative transition-all">
            {children}
            <span className="container-bg absolute left-[65px] top-1/2 block w-fit shrink-0 -translate-y-1/2 rounded-full px-[12px] text-[16px] capitalize text-white opacity-0 transition-all group-hover:opacity-100">
                {label}
            </span>
        </div>
    );
};

export default Tooltip;
