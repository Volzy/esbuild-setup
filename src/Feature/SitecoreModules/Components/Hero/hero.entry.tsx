import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hero as HeroComponent } from './Hero';
import ComponentLoader from '@Foundation/ComponentLoader';

class Basket extends ComponentLoader {
    constructor(element: HTMLElement) {
        super(element);
        this.element = element;
        this.init();
    }

    init() {
        const root = createRoot(this.element);
        root.render(<HeroComponent {...this.settings} />);
    }
};

export default Basket;