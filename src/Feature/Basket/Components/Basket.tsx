import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Button from '@Feature/SitecoreModules/Components/Button/Button';
import { fetchSampleContent } from '../Api/sample.api';
import './Basket.less';

interface BasketProps {
    title?: string;
    className?: string;
    children?: React.ReactNode;
};

const Basket = ({ title = 'This is a basket', className = 'basket', children }: BasketProps) => {
    const { isPending, isError, data, error } = useQuery({ queryKey: ['sampleData'], queryFn: fetchSampleContent });
    let classNames = [className];

    if (isPending) {
        return <span>Loading...</span>
    }
    
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className={classNames.join(' ')}>
            <h1>{title}</h1>
            {JSON.stringify(data)}
            {children}
            <Button>Go to checkout</Button>
        </div>
    );
};

export default Basket;
export { Basket };