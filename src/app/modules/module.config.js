
const getModules = {
	hero: () => import( 
		/* webpackChunkName: "hero" */ "./hero/hero" 
	),
	lateralForm: () => import( 
		/* webpackChunkName: "lateralForm" */ "./lateral-form/lateral-form" 
	),
	cover: () => import( 
		/* webpackChunkName: "cover" */ "./cover/cover" 
	),
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
	reviews: () => import( 
		/* webpackChunkName: "reviews" */ "./reviews/reviews" 
	),
	focus: () => import( 
		/* webpackChunkName: "focus" */ "./focus/focus" 
	),
	editorial: () => import( 
		/* webpackChunkName: "editorial" */ "./editorial/editorial" 
	),
	download: () => import( 
		/* webpackChunkName: "download" */ "./download/download" 
	)
};

export { getModules };