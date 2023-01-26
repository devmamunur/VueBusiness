import Axios from "axios"

export const index = {
    namespaced: true,
    state:{
        loading : true,
        sectionInfo : {},
        setting : {},
        visibility : {},
        sliders : [],
        footerLink : [],
        features : [],
        whyChooses : [],
        serviceSection : [],
        portfolioSection : [],
        teamSection : [],
        blogSection : [],
        clientSection : [],
        counters : [],
        testimonials : [],
        whayChooses : [],
        histories : [],
        services : [],
        service : {},
        portfolio : {},
        portfolios : [],
        blog : {},
        blogs : [],
        bcategories : [],
        portfolioImages : [],
        socialLinks : [],
        packages : [],
        teams : [],
        team : {},
        faqs : [],
        galleries : [],
        galleryItems : [],
        jobCategories : [],
        jobs : [],
        singleJob : {},
        clients : [],
    },
    getters: {
        getSectionInfo(state){
            return state.sectionInfo;
        },
        getSetting(state){
            return state.setting;
        },
        getVisibility(state){
            return state.visibility;
        },
        getSlider(state){
            return state.sliders;
        },
        getFooterLink(state){
            return state.footerLink;
        },
        getFeatures(state){
            return state.features;
        },
        getWhyChoose(state){
            return state.whyChooses;
        },
        getServiceSection(state){
            return state.serviceSection;
        },
        getPortfolioSection(state){
            return state.portfolioSection;
        },
        getTeamSection(state){
            return state.teamSection;
        },
        getBlogSection(state){
            return state.blogSection;
        },
        getClientSection(state){
            return state.clientSection;
        },
        getCounters(state){
            return state.counters;
        },
        getTestimonials(state){
            return state.testimonials;
        },
        getWhayChooses(state){
            return state.whayChooses;
        },
        getHistories(state){
            return state.histories;
        },
        getServices(state){
            return state.services;
        },
        getSingleService(state){
            return state.service;
        },
        getSinglePortfolio(state){
            return state.portfolio;
        },
        getPortfolios(state){
            return state.portfolios;
        },
        getSinglePortfolioImages(state){
            return state.portfolioImages;
        },
        getBlogs(state){
            return state.blogs;
        },
        getBcategories(state){
            return state.bcategories;
        },
        getSingleBlog(state){
            return state.blog;
        },
        getSocialLinks(state){
            return state.socialLinks;
        },
        getPackages(state){
            return state.packages;
        },
        getTeams(state){
            return state.teams;
        },
        getSingleTeam(state){
            return state.team;
        },
        getFaqs(state){
            return state.faqs;
        },
        getGalleries(state){
            return state.galleries;
        },
        getGalleryItems(state){
            return state.galleryItems;
        },
        getJobCategories(state){
            return state.jobCategories;
        },
        getJobs(state){
            return state.jobs;
        },
        getSingleJob(state){
            return state.singleJob;
        },
        getClients(state){
            return state.clients;
        },
        getLoading(state){
            return state.loading;
        },
    },
    actions: {
        getSectionInfo(context){
            Axios.get('/api/section-infos')
            .then((result) => {
                context.commit('getSectionInfo', result.data);
            })
        },
        getSetting(context){
            Axios.get('/api/settings')
            .then((result) => {
                context.commit('getSetting', result.data);
            })
        },
        getVisibility(context){
            Axios.get('/api/visibilities')
            .then((result) => {
                context.commit('getVisibility', result.data);
            })
        },
        getSlider(context){
            Axios.get('/api/sliders')
            .then((result) => {
                context.commit('getSlider', result.data);
            })
        },
        getFooterLink(context){
            Axios.get('/api/footerlinks')
            .then((result) => {
                context.commit('getFooterLink', result.data);
            })
        },
        getFeatures(context){
            Axios.get('/api/features')
            .then((result) => {
                context.commit('getFeatures', result.data);
            })
        },
        getWhyChoose(context){
            Axios.get('/api/why-chooses')
            .then((result) => {
                context.commit('getWhyChoose', result.data);
            })
        },
        getServiceSection(context){
            Axios.get('/api/section/service')
            .then((result) => {
                context.commit('getServiceSection', result.data);
            })
        },
        getPortfolioSection(context){
            Axios.get('/api/section/portfolio')
            .then((result) => {
                context.commit('getPortfolioSection', result.data);
            })
        },
        getTeamSection(context){
            Axios.get('/api/section/team')
            .then((result) => {
                context.commit('getTeamSection', result.data);
            })
        },
        getClientSection(context){
            Axios.get('/api/section/client')
            .then((result) => {
                context.commit('getClientSection', result.data);
            })
        },
        getBlogSection(context){
            Axios.get('/api/section/blog')
            .then((result) => {
                context.commit('getBlogSection', result.data);
            })
        },
        getCounters(context){
            Axios.get('/api/counters')
            .then((result) => {
                context.commit('getCounters', result.data);
            })
        },
        getTestimonials(context){
            Axios.get('/api/testimonials')
            .then((result) => {
                context.commit('getTestimonials', result.data);
            })
        },
        getWhayChooses(context){
            Axios.get('/api/whay-chooses')
            .then((result) => {
                context.commit('getWhayChooses', result.data);
            })
        },
        getHistories(context){
            Axios.get('/api/histories')
            .then((result) => {
                context.commit('getHistories', result.data);
            })
        },
        getServices(context){
            Axios.get('/api/services')
            .then((result) => {
                context.commit('getServices', result.data);
            })
        },
        getSingleService(context, payload){
            Axios.get(`/api/services/${payload}`)
            .then(res=>{
                context.commit('getSingleService', res.data)
            })
        },
        getPortfolios(context, payload){
            Axios.get('/api/portfolios?page='+payload.page+'&category='+payload.category,)
            .then((result) => {
                context.commit('getPortfolios', result.data);
            })
        },
        getSinglePortfolio(context, payload){
            Axios.get(`/api/portfolios/${payload}`)
            .then(res=>{
                context.commit('getSinglePortfolio', res.data)
            })
        },
        getSinglePortfolioImages(context, payload){
            Axios.get(`/api/portfolios/images/${payload}`)
            .then(res=>{
                context.commit('getSinglePortfolioImages', res.data)
            })
        },
        getBlogs(context, payload){
            Axios.get('/api/blogs?page='+payload.page+'&category='+payload.category+'&search='+payload.search,)
            .then((result) => {
                context.commit('getBlogs', result.data);
            })
        },
        getSingleBlog(context, payload){
            Axios.get(`/api/blogs/${payload}`)
            .then(res=>{
                context.commit('getSingleBlog', res.data)
            })
        },
        getBcategories(context, payload){
            Axios.get('/api/bcategories')
            .then((result) => {
                context.commit('getBcategories', result.data);
            })
        },
        getSocialLinks(context){
            Axios.get('/api/social-links')
            .then((result) => {
                context.commit('getSocialLinks', result.data);
            })
        },
        getPackages(context){
            Axios.get('/api/packages')
            .then((result) => {
                context.commit('getPackages', result.data);
            })
        },
        getTeams(context, payload){
            Axios.get('/api/teams/?page='+payload, )
            .then((result) => {
                context.commit('getTeams', result.data);
            })
        },
        getSingleTeam(context, payload){
            Axios.get(`/api/teams/${payload}`)
            .then((result) => {
                context.commit('getSingleTeam', result.data);
            })
        },
        getFaqs(context){
            Axios.get('/api/faqs' )
            .then((result) => {
                context.commit('getFaqs', result.data);
            })
        },
        getGalleries(context){
            Axios.get('/api/galleries' )
            .then((result) => {
                context.commit('getGalleries', result.data);
            })
        },
        getGalleryItems(context, payload){
            Axios.get(`/api/gallery/${payload}`)
            .then((result) => {
                context.commit('getGalleryItems', result.data);
            })
        },
        getJobCategories(context){
            Axios.get('/api/careers/categories' )
            .then((result) => {
                context.commit('getJobCategories', result.data);
            })
        },
        getJobs(context, payload){
            Axios.get('/api/careers?page='+payload.page+'&category='+payload.category,)
            .then((result) => {
                context.commit('getJobs', result.data);
            })
        },
        getSingleJob(context, payload){
            Axios.get(`/api/careers/${payload}`)
            .then(res=>{
                context.commit('getSingleJob', res.data)
            })
        },
        getClients(context){
            Axios.get('/api/clients')
            .then((result) => {
                context.commit('getClients', result.data);
            })
        },
        getLoading(context, payload){
                context.commit('getLoading', payload);
        },

    },
    mutations: {
        getLoading(state, payload){
            return state.loading = payload;
        },
        getSectionInfo(state, payload){
            return state.sectionInfo = payload;
        },
        getSetting(state, payload){
            return state.setting = payload;
        },
        getVisibility(state, payload){
            return state.visibility = payload;
        },
        getSlider(state, payload){
            return state.sliders = payload;
        },
        getFooterLink(state, payload){
            return state.footerLink = payload;
        },
        getFeatures(state, payload){
            return state.features = payload;
        },
        getWhyChoose(state, payload){
            return state.whyChooses = payload;
        },
        getServiceSection(state, payload){
            return state.serviceSection = payload;
        },
        getPortfolioSection(state, payload){
            return state.portfolioSection = payload;
        },
        getTeamSection(state, payload){
            return state.teamSection = payload;
        },
        getBlogSection(state, payload){
            return state.blogSection = payload;
        },
        getClientSection(state, payload){
            return state.clientSection = payload;
        },
        getCounters(state, payload){
            return state.counters = payload;
        },
        getTestimonials(state, payload){
            return state.testimonials = payload;
        },
        getWhayChooses(state, payload){
            return state.whayChooses = payload;
        },
        getHistories(state, payload){
            return state.histories = payload;
        },
        getServices(state, payload){
            return state.services = payload;
        },
        getSingleService(state, payload){
            return state.service = payload;
        },
        getSinglePortfolio(state, payload){
            return state.portfolio = payload;
        },
        getPortfolios(state, payload){
            return state.portfolios = payload;
        },
        getSinglePortfolioImages(state, payload){
            return state.portfolioImages = payload;
        },
        getBlogs(state, payload){
            return state.blogs = payload;
        },
        getBcategories(state, payload){
            return state.bcategories = payload;
        },
        getSingleBlog(state, payload){
            return state.blog = payload;
        },
        getSocialLinks(state, payload){
            return state.socialLinks = payload;
        },
        getPackages(state, payload){
            return state.packages = payload;
        },
        getTeams(state, payload){
            return state.teams = payload;
        },
        getSingleTeam(state, payload){
            return state.team = payload;
        },
        getFaqs(state, payload){
            return state.faqs = payload;
        },
        getGalleries(state, payload){
            return state.galleries = payload;
        },
        getGalleryItems(state, payload){
            return state.galleryItems = payload;
        },
        getJobCategories(state, payload){
            return state.jobCategories = payload;
        },
        getJobs(state, payload){
            return state.jobs = payload;
        },
        getSingleJob(state, payload){
            return state.singleJob = payload;
        },
        getClients(state, payload){
            return state.clients = payload;
        },
    }
}