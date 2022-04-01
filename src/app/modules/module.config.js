
const getModules = {
	features: () => import( 
		/* webpackChunkName: "features" */ "./features/features" 
	),
	accordion: () => import( 
		/* webpackChunkName: "accordion" */ "./accordion/accordion" 
	),
	accordionFilters: () => import( 
		/* webpackChunkName: "accordionFilters" */ "./accordion/accordion.filters" 
	),
	highlights: () => import( 
		/* webpackChunkName: "highlights" */ "./highlights/highlights" 
	),
	related: () => import( 
		/* webpackChunkName: "related" */ "./related/related" 
	),
	cover: () => import( 
		/* webpackChunkName: "cover" */ "./cover/cover" 
	),
	reviews: () => import( 
		/* webpackChunkName: "reviews" */ "./reviews/reviews" 
	)
};

export { getModules };