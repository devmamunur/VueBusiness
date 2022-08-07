<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\TeamController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\CounterController;
use App\Http\Controllers\Api\FeatureController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\HistoryController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\SectionController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\App\FrontendController;
use App\Http\Controllers\Api\BcategoryController;
use App\Http\Controllers\Api\GcategoryController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\FooterlinkController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\SocialLinkController;
use App\Http\Controllers\Api\VisibilityController;
use App\Http\Controllers\Api\WhayChooseController;
use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\JobCategoryController;
use App\Http\Controllers\Api\LanguageController;
use App\Http\Controllers\Api\MailConfigurationController;
use App\Http\Controllers\Api\QuoteController;
use App\Http\Controllers\Api\TestimonialController;


    Route::post('login', [AuthController::class, 'login'])->name('loginPage');

    Route::get('logout', [AuthController::class, 'logout']);





Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum']], function(){

    Route::apiResources([
        'settings' => SettingController::class,
        'bcategories' => BcategoryController::class,
        'blogs' => BlogController::class,
        'job-categories' => JobCategoryController::class,
        'jobs' => JobController::class,
        'applications' => ApplicationController::class,
        'services' => ServiceController::class,
        'portfolios' => PortfolioController::class,
        'gcategories' => GcategoryController::class,
        'galleries' => GalleryController::class,
        'packages' => PackageController::class,
        'histories' => HistoryController::class,
        'sliders' => SliderController::class,
        'sectiontitles' => SectionController::class,
        'features' => FeatureController::class,
        'whay-chooses' => WhayChooseController::class,
        'testimonials' => TestimonialController::class,
        'teams' => TeamController::class,
        'faqs' => FaqController::class,
        'counters' => CounterController::class,
        'clients' => ClientController::class,
        'footerlinks' => FooterlinkController::class,
        'visibilities' => VisibilityController::class,
        'social-links' => SocialLinkController::class,
        'newsletters' => NewsletterController::class,
        'mails' => MailConfigurationController::class,
        'quotes' => QuoteController::class,
        'languages' => LanguageController::class,
        'dashboards' => DashboardController::class,
    ]);

    // Language Route
    Route::post('/languages/frontend/update', [LanguageController::class, 'frontendUpdate']);
    Route::post('/languages/backend/update', [LanguageController::class, 'backendUpdate']);
    Route::get('/languages/backend/language', [LanguageController::class, 'backendLanguage']);

    // Admin Route
    Route::get('/dashboards/admin/profile', [DashboardController::class, 'adminProfile']);
    Route::post('/dashboards/admin/profile/update', [DashboardController::class, 'adminProfileUpdate']);
    Route::post('/dashboards/admin/password/update', [DashboardController::class, 'adminPasswordUpdate']);

    // Blog Category Route
    Route::post('/bcategories/multiple-delete', [BcategoryController::class, 'multipleDelete']);
    Route::get('/all-bcategories', [BcategoryController::class, 'allBlogCategory']);

    // Blog Route
    Route::post('/blogs/multiple-delete', [BlogController::class, 'multipleDelete']);
    Route::post('/blogs/update/{id}', [BlogController::class, 'update']);

    // Job Category Route
    Route::post('/job-categories/multiple-delete', [JobCategoryController::class, 'multipleDelete']);
    Route::get('/all-job-categories', [JobCategoryController::class, 'allJobCategory']);

    // Job Route
    Route::post('/jobs/multiple-delete', [JobController::class, 'multipleDelete']);
    Route::post('/jobs/update/{id}', [JobController::class, 'update']);

    // Applications Route
    Route::post('/applications/multiple-delete', [ApplicationController::class, 'multipleDelete']);
    Route::get('/applications/status/{id}/{status}', [ApplicationController::class, 'status']);

    // Service Route
    Route::post('/services/multiple-delete', [ServiceController::class, 'multipleDelete']);
    Route::post('/services/update/{id}', [ServiceController::class, 'update']);
    Route::get('/all-services', [ServiceController::class, 'allService']);

    // Portfolio Route
    Route::post('/portfolios/multiple-delete', [PortfolioController::class, 'multipleDelete']);
    Route::post('/portfolios/update/{id}', [PortfolioController::class, 'update']);

    // Gallery Category Route
    Route::post('/gcategories/multiple-delete', [GcategoryController::class, 'multipleDelete']);
    Route::get('/all-gcategories', [GcategoryController::class, 'allGalleryCategory']);

    // Gallery Route
    Route::post('/galleries/multiple-delete', [GalleryController::class, 'multipleDelete']);
    Route::post('/galleries/update/{id}', [GalleryController::class, 'update']);

    // Package Route
    Route::post('/packages/multiple-delete', [PackageController::class, 'multipleDelete']);

    // History Route
    Route::post('/histories/multiple-delete', [HistoryController::class, 'multipleDelete']);
    Route::post('/histories/update/{id}', [HistoryController::class, 'update']);

    // Slider Route
    Route::post('/sliders/multiple-delete', [SliderController::class, 'multipleDelete']);
    Route::post('/sliders/update/{id}', [SliderController::class, 'update']);

    // Section Title Route
    Route::post('/sectiontitles/update', [SectionController::class, 'update']);

    // Setting Route
    Route::post('/settings/update', [SettingController::class, 'update']);
    Route::post('/settings/mail/configuration', [SettingController::class, 'update']);

    // Visibility Route
    Route::post('/visibilities/update', [VisibilityController::class, 'update']);

    // Feature Route
    Route::post('/features/multiple-delete', [FeatureController::class, 'multipleDelete']);

    // Whay Choose Route
    Route::post('/whay-chooses/multiple-delete', [WhayChooseController::class, 'multipleDelete']);

    // Testimonial Route
    Route::post('/testimonials/multiple-delete', [TestimonialController::class, 'multipleDelete']);
    Route::post('/testimonials/update/{id}', [TestimonialController::class, 'update']);

    // Team Route
    Route::post('/teams/multiple-delete', [TeamController::class, 'multipleDelete']);
    Route::post('/teams/update/{id}', [TeamController::class, 'update']);

    // Faq Route
    Route::post('/faqs/multiple-delete', [FaqController::class, 'multipleDelete']);
    Route::post('/faqs/update/{id}', [FaqController::class, 'update']);

    // Counter Route
    Route::post('/counters/multiple-delete', [CounterController::class, 'multipleDelete']);
    Route::post('/counters/update/{id}', [CounterController::class, 'update']);

    // Client Route
    Route::post('/clients/multiple-delete', [ClientController::class, 'multipleDelete']);
    Route::post('/clients/update/{id}', [ClientController::class, 'update']);

    // Footerlink Route
    Route::post('/footerlinks/multiple-delete', [FooterlinkController::class, 'multipleDelete']);
    Route::post('/footerlinks/update/{id}', [FooterlinkController::class, 'update']);


    // Newsletters Route
    Route::post('/newsletters/multiple-delete', [NewsletterController::class, 'multipleDelete']);
    Route::post('/newsletters/mailsubscriber/', [NewsletterController::class, 'mailsubscriber']);

    // Footerlink Route
    Route::post('/social-links/multiple-delete', [SocialLinkController::class, 'multipleDelete']);

    // Quote Route
    Route::post('/quotes/multiple-delete', [QuoteController::class, 'multipleDelete']);
    Route::get('/quotes/status/{id}/{status}', [QuoteController::class, 'status']);
});
Route::get('admin/isadmin', [DashboardController::class, 'isAdmin']);


// *************************************************
// ********** Frontend Routes Start ****************
// *************************************************

// Section Info Routs
Route::get('/section-infos', [FrontendController::class, 'sectionInfos']);

// Setting Route
Route::get('/settings', [FrontendController::class, 'settings']);

// Slider Route
Route::get('/sliders', [FrontendController::class, 'sliders']);

// FooterLink Route
Route::get('/footerlinks', [FrontendController::class, 'footerLinks']);

// FooterLink Route
Route::get('/features', [FrontendController::class, 'features']);

// Why Choose Route
Route::get('/why-chooses', [FrontendController::class, 'whyChooses']);


// Home Page Section Route
Route::get('/section/service', [FrontendController::class, 'serviceSection']);
Route::get('/section/portfolio', [FrontendController::class, 'portfolioSection']);
Route::get('/section/team', [FrontendController::class, 'teamSection']);
Route::get('/section/blog', [FrontendController::class, 'blogSection']);
Route::get('/section/client', [FrontendController::class, 'clientSection']);


// Counter Route
Route::get('/counters', [FrontendController::class, 'counters']);

// Testimonial Route
Route::get('/testimonials', [FrontendController::class, 'testimonials']);

// Whay Choose Route
Route::get('/whay-chooses', [FrontendController::class, 'whayChoose']);

// History Route
Route::get('/histories', [FrontendController::class, 'history']);

// History Route
Route::get('/services', [FrontendController::class, 'services']);
Route::get('/services/{slug}', [FrontendController::class, 'serviceDetails']);

// Portfolio Route
Route::get('/portfolios', [FrontendController::class, 'portfolios']);
Route::get('/portfolios/{slug}', [FrontendController::class, 'portfolioDetails']);
Route::get('/portfolios/images/{slug}', [FrontendController::class, 'portfolioImages']);

// Social Links Route
Route::get('/social-links', [FrontendController::class, 'socialLinks']);

// Package Route
Route::get('/packages', [FrontendController::class, 'packages']);

// Team Route
Route::get('/teams', [FrontendController::class, 'teams']);
Route::get('/teams/{id}', [FrontendController::class, 'teamDetails']);

// Faq Route
Route::get('/faqs', [FrontendController::class, 'faqs']);


// Gallery Route
Route::get('/galleries', [FrontendController::class, 'galleries']);
Route::get('/gallery/{id?}', [FrontendController::class, 'galleryItems']);


// Career Route
Route::get('/careers/categories', [FrontendController::class, 'careersCategories']);
Route::get('/careers', [FrontendController::class, 'careers']);
Route::get('/careers/{slug}', [FrontendController::class, 'careersDetails']);
Route::post('/careers/apply', [FrontendController::class, 'careerApply']);


// Contact Submit
Route::post('/contact/submit', [FrontendController::class, 'contactSubmit']);

// Quote Submit
Route::post('/quote/submit', [FrontendController::class, 'quoteSubmit']);


// Blog Categories Route
Route::get('/bcategories', [FrontendController::class, 'bcategories']);


// Blog Route
Route::get('/blogs', [FrontendController::class, 'blogs']);
Route::get('/blogs/{slug}', [FrontendController::class, 'blogDetails']);

// Clients Route
Route::get('/clients', [FrontendController::class, 'clients']);

// Newsletters Route
Route::post('/newsletters/submit/', [FrontendController::class, 'newslettersSubmit']);

// Newsletters Route
Route::get('/visibilities/', [FrontendController::class, 'visibilities']);