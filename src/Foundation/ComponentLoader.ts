import { QueryClient } from '@tanstack/react-query';

class ComponentLoader {
    name: string|null;
    element: HTMLElement;
    settings: any;
    instanceId: string;

    constructor(element: HTMLElement) {
        this.name = element.getAttribute('data-component');
        this.element = element;
        this.settings = this.initSettings(element);
        this.instanceId = this.generateInstanceId();
        this.element.setAttribute('data-intance-id', `${this.name}__${this.instanceId}`);

        console.debug(`ComponentLoader: ${this.name} loaded`, this);
    }

    initSettings(element: HTMLElement) {
        const componentName = element.getAttribute('data-component');
        let dataSettings = element.getAttribute('data-settings');

        if (!dataSettings) {
          return {};
        }
    
        try {
          return JSON.parse(dataSettings);
        } catch (err) {
            console.error(`ComponentLoader: Could not JSON.parse data-settings for ${componentName}`);
          return {};
        }
    }

    generateInstanceId(length = 6) {
        const characters = '23456789ABDEGJKMNPQRVWXYZ';

        let id = '';

        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return id;
    }
};

export default ComponentLoader;