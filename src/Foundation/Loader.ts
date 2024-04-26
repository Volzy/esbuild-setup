const initComponents = ({ context = document } = {}) => {
    const elements = [...context.querySelectorAll('[data-component]')];

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const componentName = element.getAttribute('data-component');

        if (!componentName) {
            return;
        }
        
        import(componentName)
            .then((module) => {
                console.debug(`Loader: Dynamically importing ${componentName}`);
                new module.default(element);
            })
            .catch((err) => {
                console.debug(`Loader: Failed to dynamically import ${componentName}`, err);
                throw err;
            });
    }
};

initComponents();