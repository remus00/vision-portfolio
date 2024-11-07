import { Icon } from '@iconify/react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface Props {
    label: string;
    icon: string;
    href: string;
}

const NavbarBtn = ({ label, icon, href }: Props) => {
    const [active, setActive] = useState('home');

    return (
        <div
            className="group relative flex transition-all"
            onClick={() => setActive(href)}
        >
            <a
                href={`#${href}`}
                className={cn(
                    'rounded-full border border-transparent p-[8px] duration-200 group-hover:border-white',
                    active === href && 'border-white'
                )}
            >
                <Icon
                    icon={icon}
                    className={cn(
                        'shrink-0 text-[24px] text-neutral-400 group-hover:text-neutral-100',
                        active === href && 'text-neutral-100'
                    )}
                />
            </a>

            <span className="absolute -top-[50px] left-1/2 !z-20 hidden w-fit shrink-0 -translate-x-1/2 text-nowrap rounded-full border border-neutral-100 bg-black/50 px-[16px] py-[2px] text-[16px] capitalize text-neutral-100 backdrop-blur-[20px] transition-all duration-200 group-hover:block md:left-[65px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
                {label}
            </span>
        </div>
    );
};

export default NavbarBtn;
