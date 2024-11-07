import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

const HeroContent = () => {
    const [className, setClassName] = useState<string>('');
    const [contentClass, setContentClass] = useState<string>('');
    const [showIcon, setShowIcon] = useState<boolean>(false);

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    const toggleMaximize = () => {
        setIsExpanded((prev) => !prev);
        setIsMinimized(false);
    };

    const toggleMinimize = () => {
        setIsMinimized((prev) => !prev);
        setIsExpanded(false);
    };

    useEffect(() => {
        if (isExpanded) {
            setClassName(
                'fixed -top-[12px] md:-top-[24px] bg-black/70 rounded-[32px] left-0 w-full h-full'
            );
        } else {
            setClassName('');
        }

        if (isMinimized) {
            setContentClass('hidden');
        } else {
            setContentClass('block');
        }
    }, [isExpanded, isMinimized]);

    return (
        <div
            className={cn(
                'border-custom-dark my-[12px] flex flex-col overflow-hidden rounded-[16px] border-2 bg-black/30 md:my-[24px]',
                className
            )}
        >
            <div
                onMouseEnter={() => setShowIcon(true)}
                onMouseLeave={() => setShowIcon(false)}
                className={cn(
                    'bg-custom-dark grid h-[36px] w-full grid-cols-3 items-center gap-[10px] px-[20px] sm:flex',
                    isMinimized && 'grid-cols-5'
                )}
            >
                <div
                    className="bg-close-red flex h-[24px] cursor-pointer items-center justify-center gap-[8px] rounded-[8px] sm:w-[72px] md:h-[14px] md:w-[14px] md:rounded-full"
                    onClick={() => setClassName('hidden')}
                >
                    <Icon
                        icon="mingcute:close-fill"
                        className={cn(
                            'text-close-red-dark shrink-0 text-[14px] transition-all md:text-[10px]',
                            showIcon ? 'block' : 'md:hidden'
                        )}
                    />
                    <p
                        className={cn(
                            'text-close-red-dark text-[14px] leading-[22px] md:hidden',
                            isMinimized && 'hidden min-[500px]:block'
                        )}
                    >
                        close
                    </p>
                </div>
                <div
                    className="bg-minimize-yellow flex h-[24px] cursor-pointer items-center justify-center gap-[8px] rounded-[8px] sm:w-[72px] md:h-[14px] md:w-[14px] md:rounded-full"
                    onClick={toggleMinimize}
                >
                    <Icon
                        icon="mingcute:line-fill"
                        className={cn(
                            'text-minimize-yellow-dark shrink-0 rotate-45 text-[14px] transition-all md:text-[10px]',
                            showIcon ? 'block' : 'md:hidden'
                        )}
                    />
                    <p
                        className={cn(
                            'text-minimize-yellow-dark text-[14px] leading-[22px] md:hidden',
                            isMinimized && 'hidden min-[500px]:block'
                        )}
                    >
                        min
                    </p>
                </div>
                <div
                    className="bg-expand-green flex h-[24px] cursor-pointer items-center justify-center gap-[8px] rounded-[8px] sm:w-[72px] md:h-[14px] md:w-[14px] md:rounded-full"
                    onClick={toggleMaximize}
                >
                    <Icon
                        icon="ri:expand-left-right-fill"
                        className={cn(
                            'text-expand-green-dark shrink-0 rotate-45 transform text-[16px] transition-all md:text-[12px]',
                            showIcon ? 'block' : 'md:hidden'
                        )}
                    />
                    <p
                        className={cn(
                            'text-expand-green-dark text-[14px] leading-[22px] md:hidden',
                            isMinimized && 'hidden min-[500px]:block'
                        )}
                    >
                        max
                    </p>
                </div>

                {isMinimized && (
                    <p className="col-span-2 ml-3 text-end text-[16px] leading-[22px] text-white md:col-auto md:text-start">
                        Hero
                    </p>
                )}
            </div>

            <div className={cn('h-[600px] w-full', contentClass)}></div>
        </div>
    );
};

export default HeroContent;
