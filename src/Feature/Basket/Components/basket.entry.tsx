import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Basket as BasketComponent } from './Basket';
import ComponentLoader from '@Foundation/ComponentLoader';
import QueryState from '@Foundation/StateManagement/QueryState';

class Basket extends ComponentLoader {
    constructor(element: HTMLElement) {
        super(element);
        this.init();
    }

    init() {
        const queryClient = new QueryState().load('shared');

        const ReactApp = (props: any) => {
            return (
                <QueryClientProvider client={queryClient}>
                    <BasketComponent {...props} />
                </QueryClientProvider>
            )
        }
    
        const root = createRoot(this.element);
        root.render(<ReactApp {...this.settings} />);
    }
};

export default Basket;