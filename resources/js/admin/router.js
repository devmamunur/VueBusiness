import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



import AdminDashboard from "../components/admin/AdminDashboard";
import AdminLogin from "../components/admin/auth/AdminLogin";
import AdminLogout from "../components/admin/auth/AdminLogout";
import PartnerList from "../components/admin/partner/PartnerList";

// Import Blog Components
import BlogCategoryList from "../components/admin/blog/category/List";
import BlogList from "../components/admin/blog/List";
import BlogAddOrUpdate from "../components/admin/blog/AddOrUpdate";

// Import Job Components
import JobCategoryList from "../components/admin/job/category/List";
import JobList from "../components/admin/job/List";
import JobAddOrUpdate from "../components/admin/job/AddOrUpdate";


// Import Applications Components
import AllApplications from "../components/admin/application/List";
import ApplicationView from "../components/admin/application/View";
import PendingApplications from "../components/admin/application/List";



// Import Service Components
import ServiceList from "../components/admin/service/List";
import ServiceAddOrUpdate from "../components/admin/service/AddOrUpdate";

// Import Portfolio Components
import PortfolioList from "../components/admin/portfolio/List";
import PortfolioAddOrUpdate from "../components/admin/portfolio/AddOrUpdate";


// Import Gallery Components
import GalleryCategoryList from "../components/admin/gallery/category/List";
import GalleryList from "../components/admin/gallery/List";
import GalleryAddOrUpdate from "../components/admin/gallery/AddOrUpdate";

// Import Package Components
import PackageList from "../components/admin/package/List";
import PackageAddOrUpdate from "../components/admin/package/AddOrUpdate";

// Import History Components
import HistoryList from "../components/admin/history/List";
import HistoryAddOrUpdate from "../components/admin/history/AddOrUpdate";

// Import Slider Components
import SliderList from "../components/admin/home/slider/List";
import SliderAddOrUpdate from "../components/admin/home/slider/AddOrUpdate";


// Import Section  Components
import AboutSection from "../components/admin/home/section/About";
import IntroVideoSection from "../components/admin/home/section/IntroVideo";
import WhayChooseUsSection from "../components/admin/home/section/WhayChooseUs";
import ServiceSection from "../components/admin/home/section/Service";
import PortfolioSection from "../components/admin/home/section/Project";
import TestimonialSection from "../components/admin/home/section/Testimonial";
import TeamSection from "../components/admin/home/section/Team";
import FaqSection from "../components/admin/home/section/Faq";
import MeetUsSection from "../components/admin/home/section/MeetUs";
import ContactSection from "../components/admin/home/section/Contact";
import BlogSection from "../components/admin/home/section/Blog";
import HistorySection from "../components/admin/home/section/History";
import HeroStatic from "../components/admin/home/hero/Static";
import HeroVideo from "../components/admin/home/hero/Video";

import ContactPage from "../components/admin/Innerpage/Contact";

// Import Feature Components
import FeatureList from "../components/admin/home/feature/List";
import FeatureAddOrUpdate from "../components/admin/home/feature/AddOrUpdate";

// Import Whay Choose Components
import WhayChooseList from "../components/admin/home/whayChoose/List";
import WhayChooseAddOrUpdate from "../components/admin/home/whayChoose/AddOrUpdate";

// Import Testimonial Components
import TestimonialList from "../components/admin/home/testimonial/List";
import TestimonialAddOrUpdate from "../components/admin/home/testimonial/AddOrUpdate";

// Import Testimonial Components
import TeamList from "../components/admin/home/team/List";
import TeamAddOrUpdate from "../components/admin/home/team/AddOrUpdate";

// Import Faq Components
import FaqList from "../components/admin/home/faq/List";
import FaqAddOrUpdate from "../components/admin/home/faq/AddOrUpdate";

// Import Faq Components
import CounterList from "../components/admin/home/counter/List";
import CounterAddOrUpdate from "../components/admin/home/counter/AddOrUpdate";

// Import Faq Components
import ClientList from "../components/admin/home/client/List";
import ClientAddOrUpdate from "../components/admin/home/client/AddOrUpdate";

// Import Footerlink Components
import FooterLinkList from "../components/admin/footer/link/List";
import FooterLinkAddOrUpdate from "../components/admin/footer/link/AddOrUpdate";
import FooterInfo from "../components/admin/footer/footer";


// Import Setting Components
import Theme from "../components/admin/setting/theme";
import MailConfiguration from "../components/admin/setting/Email";

// Import Basic Information Components
import BasicInformation from "../components/admin/customize/basicInformation";

// Import Social Link Components
import SocialLinkList from "../components/admin/customize/socialLink/List";
import SocialLinkAddOrUpdate from "../components/admin/customize/socialLink/AddOrUpdate";


// Subscribers Components
import Subscribers from "../components/admin/newsletters/List";
import MailToSubscribers from "../components/admin/newsletters/Mail";


// Quote Components
import AllQuote from "../components/admin/quote/List";
import QuoteView from "../components/admin/quote/View";
import PendingQuote from "../components/admin/quote/List";

// Visibility Components
import Visibility from "../components/admin/visibility/Visibility";
import ThemeOneVisibility from "../components/admin/visibility/ThemeOne";
import ThemeTwoVisibility from "../components/admin/visibility/ThemeTwo";
import ThemeThreeVisibility from "../components/admin/visibility/ThemeThree";
import InnerPageVisibility from "../components/admin/visibility/InnerPage";
import OtherVisibility from "../components/admin/visibility/Other";

// Language Components
import Language from "../components/admin/language/View";
import FrontendLanguage from "../components/admin/language/Frontend";
import BackendLanguage from "../components/admin/language/Backend";

// Admin Components
import AdminChangePassword from "../components/admin/profile/ChangePassword";
import AdminEditProfile from "../components/admin/profile/EditProfile";

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', name: "Home", component: () => import(/* webpackChunkName: "Home" */ '../components/app/AppHome') },
        {path: "/admin/login",component: AdminLogin,name: "AdminLogin"},
        {path: "/admin/logout",component: AdminLogout,name: "AdminLogout"},
        {path: "/admin/dashboard",component: AdminDashboard,name: "AdminDashboard"},
        {path: "/admin/partner",component: PartnerList,name: "PartnerList"},
        // Blog Routes Starts
        {path: "/admin/blog/category",component: BlogCategoryList,name: "BlogCategoryList"},
        {path: "/admin/blog",component: BlogList,name: "BlogList"},
        {path: "/admin/blog/add",component: BlogAddOrUpdate,name: "BlogAdd"},
        {path: "/admin/blog/edit/:id",component: BlogAddOrUpdate,name: "BlogEdit"},

        // Job Routes Starts
        {path: "/admin/job/category",component: JobCategoryList,name: "JobCategoryList"},
        {path: "/admin/job",component: JobList,name: "JobList"},
        {path: "/admin/job/add",component: JobAddOrUpdate,name: "JobAdd"},
        {path: "/admin/job/edit/:id",component: JobAddOrUpdate,name: "JobEdit"},

        // Applications Routes Starts
        {path: "/admin/applications/",component: AllApplications, name: "AllApplications"},
        {path: "/admin/applications/:status",component: PendingApplications, name: "PendingApplications"},
        {path: "/admin/applications/view/:id",component: ApplicationView, name: "ApplicationView"},

        // Service Routes Starts
        {path: "/admin/service",component: ServiceList,name: "ServiceList"},
        {path: "/admin/service/add",component: ServiceAddOrUpdate,name: "ServiceAdd"},
        {path: "/admin/service/edit/:id",component: ServiceAddOrUpdate,name: "ServiceEdit"},
        // Portfolio Routes Starts
        {path: "/admin/portfolio",component: PortfolioList,name: "PortfolioList"},
        {path: "/admin/portfolio/add",component: PortfolioAddOrUpdate,name: "PortfolioAdd"},
        {path: "/admin/portfolio/edit/:id",component: PortfolioAddOrUpdate,name: "PortfolioEdit"},
        // Gallery Routes Starts
        {path: "/admin/gallery/category",component: GalleryCategoryList,name: "GalleryCategoryList"},
        {path: "/admin/gallery",component: GalleryList,name: "GalleryList"},
        {path: "/admin/gallery/add",component: GalleryAddOrUpdate,name: "GalleryAdd"},
        {path: "/admin/gallery/edit/:id",component: GalleryAddOrUpdate,name: "GalleryEdit"},
        // History Routes Starts
        {path: "/admin/package",component: PackageList,name: "PackageList"},
        {path: "/admin/package/add",component: PackageAddOrUpdate,name: "PackageAdd"},
        {path: "/admin/package/edit/:id",component: PackageAddOrUpdate,name: "PackageEdit"},
        // Package Routes Starts
        {path: "/admin/history",component: HistoryList,name: "HistoryList"},
        {path: "/admin/history/add",component: HistoryAddOrUpdate,name: "HistoryAdd"},
        {path: "/admin/history/edit/:id",component: HistoryAddOrUpdate,name: "HistoryEdit"},
        // Slider Routes Starts
        {path: "/admin/slider",component: SliderList,name: "SliderList"},
        {path: "/admin/slider/add",component: SliderAddOrUpdate,name: "SliderAdd"},
        {path: "/admin/slider/edit/:id",component: SliderAddOrUpdate,name: "SliderEdit"},

        // Section Title Routes Starts
        {path: "/admin/section/about",component: AboutSection,name: "AboutSection"},
        {path: "/admin/section/intro-video",component: IntroVideoSection,name: "IntroVideoSection"},
        {path: "/admin/section/whay-choose-us",component: WhayChooseUsSection,name: "WhayChooseUsSection"},
        {path: "/admin/section/service",component: ServiceSection,name: "ServiceSection"},
        {path: "/admin/section/portfolio",component: PortfolioSection,name: "PortfolioSection"},
        {path: "/admin/section/testimonial",component: TestimonialSection,name: "TestimonialSection"},
        {path: "/admin/section/team",component: TeamSection,name: "TeamSection"},
        {path: "/admin/section/faq",component: FaqSection,name: "FaqSection"},
        {path: "/admin/section/meet-us",component: MeetUsSection,name: "MeetUsSection"},
        {path: "/admin/section/contact",component: ContactSection,name: "ContactSection"},
        {path: "/admin/section/blog",component: BlogSection,name: "BlogSection"},
        {path: "/admin/section/history",component: HistorySection,name: "HistorySection"},
        {path: "/admin/hero/static",component: HeroStatic,name: "HeroStatic"},
        {path: "/admin/hero/video",component: HeroVideo,name: "HeroVideo"},

        //  Inner Page Route
        {path: "/admin/contact",component: ContactPage,name: "ContactPage"},

        // Feature Routes Starts
        {path: "/admin/feature",component: FeatureList,name: "FeatureList"},
        {path: "/admin/feature/add",component: FeatureAddOrUpdate,name: "FeatureAdd"},
        {path: "/admin/feature/edit/:id",component: FeatureAddOrUpdate,name: "FeatureEdit"},

        // Feature Routes Starts
        {path: "/admin/whay-choose",component: WhayChooseList,name: "WhayChooseList"},
        {path: "/admin/whay-choose/add",component: WhayChooseAddOrUpdate,name: "WhayChooseAdd"},
        {path: "/admin/whay-choose/edit/:id",component: WhayChooseAddOrUpdate,name: "WhayChooseEdit"},

        // Testimonial Routes Starts
        {path: "/admin/testimonial",component: TestimonialList,name: "TestimonialList"},
        {path: "/admin/testimonial/add",component: TestimonialAddOrUpdate,name: "TestimonialAdd"},
        {path: "/admin/testimonial/edit/:id",component: TestimonialAddOrUpdate,name: "TestimonialEdit"},

        // Team Routes Starts
        {path: "/admin/team",component: TeamList,name: "TeamList"},
        {path: "/admin/team/add",component: TeamAddOrUpdate,name: "TeamAdd"},
        {path: "/admin/team/edit/:id",component: TeamAddOrUpdate,name: "TeamEdit"},

        // Faq Routes Starts
        {path: "/admin/faq",component: FaqList,name: "FaqList"},
        {path: "/admin/faq/add",component: FaqAddOrUpdate,name: "FaqAdd"},
        {path: "/admin/faq/edit/:id",component: FaqAddOrUpdate,name: "FaqEdit"},

        // Counter Routes Starts
        {path: "/admin/counter",component: CounterList,name: "CounterList"},
        {path: "/admin/counter/add",component: CounterAddOrUpdate,name: "CounterAdd"},
        {path: "/admin/counter/edit/:id",component: CounterAddOrUpdate,name: "CounterEdit"},

        // Client Routes Starts
        {path: "/admin/client",component: ClientList,name: "ClientList"},
        {path: "/admin/client/add",component: ClientAddOrUpdate,name: "ClientAdd"},
        {path: "/admin/client/edit/:id",component: ClientAddOrUpdate,name: "ClientEdit"},

        // Footerlink Routes Starts
        {path: "/admin/footerlink",component: FooterLinkList,name: "FooterLinkList"},
        {path: "/admin/footerlink/add",component: FooterLinkAddOrUpdate,name: "FooterLinkAdd"},
        {path: "/admin/footerlink/edit/:id",component: FooterLinkAddOrUpdate,name: "FooterLinkEdit"},
        {path: "/admin/footer",component: FooterInfo,name: "FooterInfo"},

        // Theme Routes Starts
        {path: "/admin/theme",component: Theme,name: "Theme"},
        {path: "/admin/mail-configuration",component: MailConfiguration,name: "MailConfiguration"},

        // Website Customize Routes Starts
        {path: "/admin/basic-information",component: BasicInformation,name: "BasicInformation"},

        // Social Link Routes Starts
        {path: "/admin/social-link",component: SocialLinkList,name: "SocialLinkList"},
        {path: "/admin/social-link/add",component: SocialLinkAddOrUpdate,name: "SocialLinkAdd"},
        {path: "/admin/social-link/edit/:id",component: SocialLinkAddOrUpdate,name: "SocialLinkEdit"},

        // Subscribers Routes Starts
        {path: "/admin/subscribers",component: Subscribers,name: "Subscribers"},
        {path: "/admin/mail/subscribers",component: MailToSubscribers,name: "MailToSubscribers"},

        // Quote Components
        {path: "/admin/quotes/",component: AllQuote, name: "AllQuote"},
        {path: "/admin/quotes/:status",component: PendingQuote, name: "PendingQuote"},
        {path: "/admin/quotes/view/:id",component: QuoteView, name: "QuoteView"},

        // Visibility Components
        {path: "/admin/visibilities/",component: Visibility, name: "Visibility"},
        {path: "/admin/visibilities/theme-one",component: ThemeOneVisibility, name: "ThemeOneVisibility"},
        {path: "/admin/visibilities/theme-two",component: ThemeTwoVisibility, name: "ThemeTwoVisibility"},
        {path: "/admin/visibilities/theme-three",component: ThemeThreeVisibility, name: "ThemeThreeVisibility"},
        {path: "/admin/visibilities/other",component: OtherVisibility, name: "OtherVisibility"},
        {path: "/admin/visibilities/innerpage",component: InnerPageVisibility, name: "InnerPageVisibility"},

        // Visibility Components
        {path: "/admin/languages/",component: Language, name: "Language"},
        {path: "/admin/languages/frontend",component: FrontendLanguage, name: "FrontendLanguage"},
        {path: "/admin/languages/backend",component: BackendLanguage, name: "BackendLanguage"},

        // Admin Components
        {path: "/admin/dashboards/changepassword",component: AdminChangePassword, name: "AdminChangePassword"},
        {path: "/admin/dashboards/editprofile",component: AdminEditProfile, name: "AdminEditProfile"},

    ]
});

export default router;







