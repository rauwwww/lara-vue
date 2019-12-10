import Route from 'vue-router';

export default interface RouteConfig {
	path: string;
	component?: any;
	name?: string; // for named routes
	components?: {[name: string]: any}; // for named views
	redirect?: string | Location | Function;
	props?: boolean | Object | Function;
	alias?: string | Array<string>;
	children?: Array<RouteConfig>; // for nested routes
	beforeEnter?: (to: Route, from: Route, next: Function) => void;
	meta?: any;

	// 2.6.0+
	caseSensitive?: boolean; // use case sensitive match? (default: false)
	pathToRegexpOptions?: Object; // path-to-regexp options for compiling regex
}
