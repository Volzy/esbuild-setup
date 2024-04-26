import React from 'react';
import { trackEvent } from '@Foundation/Tracking/Tracking';

interface ButtonProps {
    variant?: null|string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
};

const Button = ({ variant = null, className = '', children, onClick = () => {} }: ButtonProps) => {
    let classNames = [className];

    const variants: {[key: string] : string} = {
        variant1: 'bg-blue-500 text-white',
        variant2: 'bg-red-500 text-white',
    };

    if (variant && variants[variant] !== undefined) {
        classNames.push(variants[variant]);
    };

    return (
        <button onClick={ (ev) => {
            trackEvent('button-click', { text: children });
            onClick();
        } } className={classNames.join(' ')}>{children}</button>
    );
};

export default Button;