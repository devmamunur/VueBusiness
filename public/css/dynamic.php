<?php

header("Content-Type:text/css");

if( isset( $_GET[ 'color' ] ) ) {
    $color = '#'.$_GET[ 'color' ];
}else{
  $color = "#ff5200";
}

?>

.header-navigation .header-extra .my-dropdown .cart .icon span,
.header-navigation .primary-menu .megamenu-item .megamenu .tabnav a.active,
.header-navigation .primary-menu .megamenu-item .megamenu .tabnav a:hover,
.header-navigation .header-extra .my-dropdown .my-dropdown-menu .dropdownmenu-wrapper .dropdown-cart-products .product .product-image-container .cart-remove:hover,
.quick_call_area a,
.back-to-top a,
.team-member-two .team-content,
.features-sub .input-box button,
.feature-intro-video .video-popup,
.service-item-eight .services-overlay .icon,
.blog-sidebar .widget .widget-title::before,
.blog-sidebar .widget .widget-title::after,
.blog-sidebar .widget.categories-widget ul li a.active,
.blog-sidebar .widget.categories-widget ul li a:hover,
.blog-sidebar .side-bar-contact .overlay,
.single-blog-grid .cat,
.project-gallery .project-gallery-filter .project-gallery-menu .filter.active,
.project-gallery .project-gallery-filter .project-gallery-menu .filter:hover,
.blog-sidebar .widget.search-widget form button,
.blog-sidebar .widget.tags-widget ul a:hover,
.widget-range-slider .price-range-slider .value,
.widget-range-slider .price-range-slider .ui-state-default, .widget-range-slider .price-range-slider .ui-widget-content .ui-state-default, .widget-range-slider .price-range-slider .ui-widget-header .ui-state-default,
.widget-range-slider .price-range-slider div.ui-slider-range.ui-widget-header,
.product-item .product-thumb .product-overlay ul li a:hover,
.product-item .product-thumb .product-overlay ul li button:hover,
.header-navigation .primary-menu .megamenu-item .megamenu .product-item .product-thumb .product-overlay ul li a:hover,
.header-navigation .primary-menu .megamenu-item .megamenu .product-item .product-thumb .product-overlay ul li button:hover,
.product-summery .social-share a:hover,
.checkout-area .g-title,
.contact-info-items .contact-info-item i,
.service-item-four .services-content .title::before,
.intro-video-area .intro-thumb .video-popup,
.call-to-action-four .cta-btns .cta-btn.cta-btn-2,
.intro-video-area-two .video-popup,
.banner-slider .slick-arrow:hover,
.dashboard-inner .card,
.user-dashboard-area .card .card-header
{
background: <?php echo $color ?>;
}

.header-navigation .primary-menu li .submenu li a:hover,
.header-topbar .top-left-content .language-change .language-menu a:hover,
.header-topbar .top-right-wrapper .language-change .language-menu a:hover,
.main-btn,
.banner-slider.banner-slider-two .single-banner::before,
.feature-list li:hover::before,
.tile-gallery-two .img-two::before,
.service-item-four .services-content .service-link:hover,
.service-item-four .services-content .service-link::before,
.testimonial-box-two .testimonial-inner .testimonial-img i,
.primary-bg,
.service-item-three:hover,
.team-member .member-photo .social-icon a:hover,
.team-details-content ul a:hover,
.conatct-section .conatct-one-bg::before,
.service-section.service-with-shape::before,
.portfolio-arrow-two .slick-arrow.next,
.call-to-action-four::before,
.main-btn.transparent-border-btn:hover,
.main-btn.transparent-border-btn::before,
.service-item:hover,
.call-to-action::before,
.header-navigation.breakpoint-on .site-nav-menu
{
    background-color: <?php echo $color ?>;
}


.header-navigation .navbar-btn a:hover,
.header-navigation .primary-menu .megamenu-item .megamenu .tabnav a.active,
.header-navigation .primary-menu .megamenu-item .megamenu .tabnav a:hover,
.sticky-header.sticky-on .header-navigation:not(.breakpoint-on) .primary-menu > li.current > a,
.sticky-header.sticky-on .header-navigation:not(.breakpoint-on) .primary-menu > li.current > .dd-trigger,
.sticky-header.sticky-on .header-navigation:not(.breakpoint-on) .primary-menu > li a:hover,
.sticky-header.sticky-on .header-navigation:not(.breakpoint-on) .primary-menu > li a:hover ~ .dd-trigger,
.header-navigation .primary-menu li.current > a,
.header-navigation .primary-menu li.current > .dd-trigger,
.header-navigation .primary-menu li a:hover,
.header-navigation .primary-menu li a:hover ~ .dd-trigger,
.header-two .header-navigation .primary-menu li.current > a,
.header-two .header-navigation .primary-menu li.current > .dd-trigger,
.header-two .header-navigation .primary-menu li a:hover,
.header-two .header-navigation .primary-menu li a:hover ~ .dd-trigger,
.header-navigation.breakpoint-on .site-nav-menu .primary-menu li .submenu a:hover,
.header-navigation.breakpoint-on .site-nav-menu .primary-menu li a:hover,
.banner-slider.banner-slider-two .slick-arrow,
.banner-slider.banner-slider-two .banner-text .main-btn,
.section-title .title-tag,
.feature-list li::before,
.portfolio-item .portfolio-link,
.testimonials-arrow .slick-arrow,
.latest-news-box .post-content .post-meta a,
.latest-news-box .post-content .read-more-btn:hover,
.footer-area .widget-item-2 ul li a:hover,
.service-item-three .icon,
.about-history-area .history-item .history-content span,
.blog-sidebar .side-bar-contact .content i,
.blog-sidebar .case-live .case-live-item-area .case-live-item i,
.pricing-plan-item .plan-name,
.pricing-plan-item .plans-btn,
.team-member .team-content .name a:hover,
.team-member .member-photo .social-icon a,
.page-link,
.team-details-content span,
.accordion-three .card .card-header a,
.single-job a:hover,
.single-job .title:hover,
.single-job p i,
.jobdetails-area .job_name,
.widget-range-slider .price-range-slider .filter_price:hover,
.product-item .product-content .price,
.shop-top-bar .shop-search-form button,
.product-summery .price,
.cart-table table tbody tr td.product-name a:hover,
.checkout-area .cart-product .add-shiping-methods table tbody tr td p span,
.banner-slider.banner-slider-three .banner-text .main-btn,
.video-cta .video-cta-play .video-popup,
.portfolio-arrow-two .slick-arrow,
.counter-box-three .counter-wrap,
.accordion-one .card .card-header a,
.about-text-block .about-experience h3,
.intro-video-area .intro-video-content span,
.team-member-three .position,
.service-item-six .icon,
.service-item-six .service-link:hover,
.portfolio-item-two .portfolio-content .category,
.portfolio-slider-three .slick-arrow,
.section-title-two .title-tag,
.counter-box-four .counter-wrap,
.team-member-four .member-content .position,
.service-item .icon,
.portfolio-arrow .slick-arrow.next, .portfolio-arrow-two .slick-arrow.next,
.main-btn.main-btn-3,
.header-topbar .top-right-wrapper .language-change .name.login-btn:hover,
.header-topbar .social-icon li a:hover,
.user-dashboard-area .user-menu ul li a:hover,
.user-dashboard-area .user-menu ul li a.active,
.progress-steps li.active .icon,
.service-item-two.color-1 .icon,
.gradint_body .footer-area .widget-item-3 .features-sub .input-box button
{
color: <?php echo $color ?>;
}

.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: <?php echo $color ?> !important;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: <?php echo $color ?> !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: <?php echo $color ?>;
}
.header-navigation .navbar-btn a {
    background-color: <?php echo $color ?>;
    border: 2px solid <?php echo $color ?>;
}

 {
    border-top: 2px solid <?php echo $color ?>;
}


.header-topbar .top-left-content .language-change .language-menu,
.header-navigation .primary-menu .megamenu-item .megamenu,
.header-topbar .top-right-wrapper .language-change .language-menu,
.header-navigation .header-extra .my-dropdown .my-dropdown-menu,
.header-navigation .primary-menu li .submenu
{
    border-top: 2px solid <?php echo $color ?>;
}

.service-item-four .services-content .service-link {
    border: 3px solid <?php echo $color ?>;
}
.service-item-four .services-content .service-link:hover {
    border-color: <?php echo $color ?>;
}

.testimonials-arrow .slick-arrow.next {
    background-color: <?php echo $color ?>;
    border-color: <?php echo $color ?>;
}

.header-navigation .primary-menu .megamenu-item .megamenu .tabnav a.active,
.header-navigation .primary-menu .megamenu-item .megamenu .tabnav a:hover{
    background: none;
}

.about-thumb::before,
.main-btn.transparent-border-btn:hover
{
    border-color: <?php echo $color ?>;
}

.service-item-eight:hover .services-overlay {
    background-color: <?php echo $color ?>e6;
}

.blog-sidebar .case-live .case-live-btn a,
.pricing-plan-item:hover .plans-btn
{
    background: <?php echo $color ?>;
    border-color: <?php echo $color ?>;
}
.page-item.active .page-link {
    background-color: <?php echo $color ?>;
    border-color: <?php echo $color ?>;
}

.project-gallery .project-gallery-filter .project-gallery-menu .filter {
    border: 2px solid <?php echo $color ?>;
    color: <?php echo $color ?>;
}
.project-gallery .project-gallery-item .gallery-item .item-thumbnail .content-overlay .content .links a:hover {
    background: <?php echo $color ?>;
    border-color: <?php echo $color ?>;
}
.widget-range-slider .price-range-slider .value:after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid <?php echo $color ?>;
}

.widget-range-slider .price-range-slider .filter_price {
    background: <?php echo $color ?>;
    border: 2px solid <?php echo $color ?>;
}

.widget-check-rating .check-area .form-group label::before {
    border: 1px solid <?php echo $color ?>;
}
.widget-check-rating .check-area .form-group input:checked ~ label::before {
    background: <?php echo $color ?>;
    border: 1px solid <?php echo $color ?>;
}

.product-details-tab .nav .nav-item a.active, .product-details-tab .nav .nav-item a:hover {
    background-color: <?php echo $color ?>;
    border-color: <?php echo $color ?>;
}
td.product-remove a{
    color : <?php echo $color ?>;
}

.banner-slider.banner-slider-three .single-banner::before {
    background-image: linear-gradient(90deg, <?php echo $color ?> 0%, <?php echo $color ?>99 50%, rgba(255, 255, 255, 0) 100%);
}

.testimonial-box p {
    border-top: 3px solid <?php echo $color ?>;
}

.about-text-block .about-experience h3::before {
    border-top: 30px solid <?php echo $color ?>;
    border-right: 30px solid transparent;
}

.intro-video-area .intro-thumb .video-popup::before {
    border: 1px solid <?php echo $color ?>;
}
.intro-video-area .intro-thumb .video-popup::after {
    border: 1px solid <?php echo $color ?>;
}

.intro-video-area .intro-thumb::before {
    border-bottom: 400px solid <?php echo $color ?>;
    border-left: 400px solid transparent;
}
.contact-map-two::before{
    border-bottom: 400px solid <?php echo $color ?>;
    border-left: 400px solid transparent;
}
.banner-slider .slick-arrow {
    background: <?php echo $color ?>80;
}
.portfolio-arrow .slick-arrow, .portfolio-arrow-two .slick-arrow {
    border: 2px solid <?php echo $color ?>;
}
.team-member-four .member-photo::before {
    border-left: 5px solid <?php echo $color ?>;
    border-bottom: 5px solid <?php echo $color ?>;
}

.portfolio-area.portfolio-area-shape .portfolio-arrow .slick-arrow.next,
.portfolio-area.portfolio-area-shape .portfolio-arrow-two .slick-arrow.next {
    color: <?php echo $color ?>;
}

.gradint_body .footer-area .widget-item-3 .features-sub .input-box button:hover{
    color: #fff
}


.spinner {
	border: 2px solid #f3f3f3;
	border-top: 3px solid <?php echo $color ?> !important;
}