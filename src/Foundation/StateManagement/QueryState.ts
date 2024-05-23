import { QueryClient } from '@tanstack/react-query';

declare global {
    interface Window { SharedState: any; }
}

class QueryState {
    constructor() {
        window.SharedState = window.SharedState || {};
    }

    init() {
        const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

        return new QueryClient({
            defaultOptions: {
                queries: {
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                retry: false,
                staleTime: twentyFourHoursInMs,
                },
            },
        });
    }

    set(key: string) {
        const instance = this.init();

        return window.SharedState[key] = instance;
    }

    load(key: string) {
        if (window.SharedState[key]) {
            return window.SharedState[key];
        } else {
            return this.set(key);
        }
    }
}

export default QueryState;