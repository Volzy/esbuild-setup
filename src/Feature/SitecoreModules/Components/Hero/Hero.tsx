import React from 'react';
import Button from '../Button/Button';
//import ReactLogo from '@assets/Svg/ReactLogo';

interface HeroProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
};

const Hero = ({ title = 'This is a Hero', className, children }: HeroProps) => {
    let classNames = [className];

    return (
        <div className={classNames.join(' ')}>
            {/*<ReactLogo />*/}
            <h1>{title}</h1>
            {children}
            <Button>Call to action</Button>
        </div>
    );
};

export default Hero;
export { Hero };