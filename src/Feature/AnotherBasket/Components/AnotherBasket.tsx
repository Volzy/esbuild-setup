import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Button from '@Feature/SitecoreModules/Components/Button/Button';
import { fetchSampleContent } from '../Api/sample.api';
import './Basket.less';

interface AnotherBasketProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
};

const AnotherBasket = ({ title = 'This is another basket', className = 'another-basket', children }: AnotherBasketProps) => {
    const { isPending, isError, data, error } = useQuery({ queryKey: ['sampleData'], queryFn: fetchSampleContent });
    let classNames = [className];

    if (isPending) {
        return <span>Loading another basket...</span>
    }
    
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className={classNames.join(' ')}>
            <h1>{title}</h1>
            {JSON.stringify(data)}
            {children}
            <Button>Go to checkout from AnotherBasket</Button>
        </div>
    );
};

export default AnotherBasket;
export { AnotherBasket };