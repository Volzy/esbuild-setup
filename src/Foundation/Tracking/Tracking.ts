export const initTracking = () => { 
    window.dataLayer = window.dataLayer || [];
};

export const trackEvent = (event: string, data: any) => {
    // TODO: Push to DataLayer
    console.log('Event pushed:', event, data);
};