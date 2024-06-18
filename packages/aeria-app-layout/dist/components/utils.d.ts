import { RouteRecordRaw } from 'vue-router';
import { MenuNode, GlobalStateManager } from 'aeria-ui';

export declare const breakpoints: import('vue').Ref<{
    width: number;
    height: number;
    md: number;
    lg: number;
    xl: number;
}> | import('vue').ComputedRef<{
    width: number;
    height: number;
    md: boolean;
    lg: boolean;
    xl: boolean;
}>;
export declare const badgeMemo: Record<string, any>;
export declare const navbarRefs: {
    routes: any[];
    router: {
        push: (to: import('vue-router').RouteLocationRaw) => Promise<void | import('vue-router').NavigationFailure | undefined>;
    };
    isCurrent: (subroute: RouteRecordRaw) => false;
};
export declare const memoizeBadge: (promise: () => Promise<any> | any, key: string) => any;
export declare const pushRoute: (manager: GlobalStateManager, to: import('vue-router').RouteLocationRaw) => Promise<void | import('vue-router').NavigationFailure | undefined>;
export declare const routes: import('vue').Ref<any[]>, isCurrent: import('vue').Ref<(subroute: RouteRecordRaw) => false>;
export declare const navbarEntryOpen: (node: MenuNode) => boolean | undefined;
export declare const isCollapsibleRouteOpen: (node: MenuNode) => boolean;
export declare const routeClick: (node: MenuNode, manager: GlobalStateManager) => void;
