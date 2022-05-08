
const getModules = {
	hero: () => import( 
		/* webpackChunkName: "hero" */ "./hero/hero" 
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
	related: () => import( 
		/* webpackChunkName: "related" */ "./related/related" 
	),
	reviews: () => import( 
		/* webpackChunkName: "reviews" */ "./reviews/reviews" 
	),
	videoPlayer: () => import( 
		/* webpackChunkName: "videoPlayer" */ "./video-player/video-player" 
	),
};

export { getModules };