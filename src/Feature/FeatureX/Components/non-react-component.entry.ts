import ComponentLoader from '@Foundation/ComponentLoader';

class NonReactComponent extends ComponentLoader {
    constructor(element: HTMLElement) {
        super(element);
        this.init();
    }

    init() {
        console.log('NonReactComponent initialized');
    }
}

export default NonReactComponent;