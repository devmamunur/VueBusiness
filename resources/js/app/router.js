import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes : [
        { path: '/', name: "Home", component: () => import(/* webpackChunkName: "Home" */ '../components/app/AppHome') },
        { path: '/about', name: "About", component: () => import(/* webpackChunkName: "About" */ '../components/app/AppAbout') },
        { path: '/contact', name: "Contact", component: () => import(/* webpackChunkName: "Contact" */ '../components/app/AppContact') },
        { path: '/service', name: "Service", component: () => import(/* webpackChunkName: "Service" */ '../components/app/AppService') },
        { path: '/service/:slug', name: "ServiceDetails", component: () => import(/* webpackChunkName: "ServiceDetails" */ '../components/app/AppServiceDetails') },
        { path: '/portfolio', name: "Portfolio", component: () => import(/* webpackChunkName: "Portfolio" */ '../components/app/AppPortfolio') },
        { path: '/portfolio/:slug', name: "PortfolioDetails", component: () => import(/* webpackChunkName: "PortfolioDetails" */ '../components/app/AppPortfolioDetails') },
        { path: '/package', name: "Package", component: () => import(/* webpackChunkName: "Package" */ '../components/app/AppPackage') },
        { path: '/team', name: "Team", component: () => import(/* webpackChunkName: "Team" */ '../components/app/AppTeam') },
        { path: '/team/:id', name: "TeamDetails", component: () => import(/* webpackChunkName: "TeamDetails" */ '../components/app/AppTeamDetails') },
        { path: '/faq', name: "Faq", component: () => import(/* webpackChunkName: "Faq" */ '../components/app/Appfaq') },
        { path: '/gallery', name: "Gallery", component: () => import(/* webpackChunkName: "Gallery" */ '../components/app/AppGallery') },
        { path: '/career', name: "Career", component: () => import(/* webpackChunkName: "Career" */ '../components/app/AppJob.vue') },
        { path: '/career/:slug', name: "CareerDetails", component: () => import(/* webpackChunkName: "CareerDetails" */ '../components/app/AppJobDetails.vue') },
        { path: '/gate-quote', name: "GateQuote", component: () => import(/* webpackChunkName: "Career" */ '../components/app/AppGateQuote.vue') },
        { path: '/blog', name: "Blog", component: () => import(/* webpackChunkName: "Career" */ '../components/app/AppBlog.vue') },
        { path: '/blog/:slug', name: "BlogDetails", component: () => import(/* webpackChunkName: "CareerDetails" */ '../components/app/AppBlogDetails.vue') },
    ]
})

export default router;
