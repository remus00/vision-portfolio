import { useEffect, useState } from 'react';

export default function DateFormatter() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDateWithOrdinal = (date: Date): string => {
        const formatter = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            day: 'numeric',
        });
        const parts = formatter.formatToParts(date);
        const weekday = parts.find((part) => part.type === 'weekday')?.value;
        const day = parts.find((part) => part.type === 'day')?.value;

        const getOrdinalSuffix = (n: number): string => {
            const s = ['th', 'st', 'nd', 'rd'];
            const v = n % 100;
            return s[(v - 20) % 10] || s[v] || s[0];
        };

        return `${weekday} ${day}${getOrdinalSuffix(parseInt(day || '0'))}`;
    };

    const formatTimeHourMinute = (date: Date): string => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="flex flex-col items-end">
            <p className="text-[16px] leading-[22px] text-white">
                {formatDateWithOrdinal(currentDate)}
            </p>
            <p className="text-[14px] leading-[18px] text-neutral-400">
                {formatTimeHourMinute(currentDate)}
            </p>
        </div>
    );
}
