<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            :src="`/uploads/${adminInfox.image}`"
            alt=""
            class="img-circle elevation-2"
          />
        </div>
        <div class="info">
          <a href="javascript:void(0)" class="d-block">
            {{ adminInfox.name }}
          </a>
        </div>
      </div>

      <!-- <sidebar-menu :menu="menu" /> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column nav-child-indent"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item no-treeview">
            <router-link
              :to="{ name: 'AdminDashboard' }"
              class="nav-link"
              :class="$route.name == 'AdminDashboard' ? 'active' : ''"
            >
              <i class="fas fa-tachometer-alt"></i>
              <p>
                {{ $t("Dashboard") }}
              </p>
            </router-link>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'BasicInformation' ||
              $route.name == 'Visibility' ||
              $route.name == 'SocialLinkList'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'BasicInformation' ||
                $route.name == 'SocialLinkList' ||
                $route.name == 'Visibility'
                  ? 'active'
                  : ''
              "
            >
              <i class="fab fa-intercom"></i>
              <p>
                {{ $t("Website Customize") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'BasicInformation' }"
                  class="nav-link"
                  :class="$route.name == 'BasicInformation' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Basic Information") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'SocialLinkList' }"
                  class="nav-link"
                  :class="$route.name == 'SocialLinkList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Social Link") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'Visibility' }"
                  class="nav-link"
                  :class="$route.name == 'Visibility' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Visibility") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'Theme' ||
              $route.name == 'MailConfiguration' ||
              $route.name == 'ServiceAdd'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'Theme' ||
                $route.name == 'MailConfiguration' ||
                $route.name == 'ServiceAdd'
                  ? 'active'
                  : ''
              "
            >
              <i class="fas fa-cog"></i>
              <p>
                {{ $t("General Setting") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'Theme' }"
                  class="nav-link"
                  :class="$route.name == 'Theme' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Theme") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'MailConfiguration' }"
                  class="nav-link"
                  :class="$route.name == 'MailConfiguration' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Mail Configuration") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'SliderList' ||
              $route.name == 'SliderAdd' ||
              $route.name == 'AboutSection' ||
              $route.name == 'IntroVideoSection' ||
              $route.name == 'WhayChooseUsSection' ||
              $route.name == 'ServiceSection' ||
              $route.name == 'PortfolioSection' ||
              $route.name == 'TestimonialSection' ||
              $route.name == 'TeamSection' ||
              $route.name == 'FaqSection' ||
              $route.name == 'MeetUsSection' ||
              $route.name == 'ContactSection' ||
              $route.name == 'BlogSection' ||
              $route.name == 'HistorySection' ||
              $route.name == 'SliderEdit' ||
              $route.name == 'FeatureList' ||
              $route.name == 'FeatureAdd' ||
              $route.name == 'WhayChooseList' ||
              $route.name == 'WhayChooseAdd' ||
              $route.name == 'WhayChooseEdit' ||
              $route.name == 'TestimonialList' ||
              $route.name == 'TestimonialAdd' ||
              $route.name == 'TestimonialEdit' ||
              $route.name == 'FeatureEdit' ||
              $route.name == 'TeamList' ||
              $route.name == 'TeamAdd' ||
              $route.name == 'TeamEdit' ||
              $route.name == 'FaqList' ||
              $route.name == 'FaqAdd' ||
              $route.name == 'FaqEdit' ||
              $route.name == 'CounterList' ||
              $route.name == 'CounterAdd' ||
              $route.name == 'CounterEdit' ||
              $route.name == 'ClientList' ||
              $route.name == 'ClientAdd' ||
              $route.name == 'ClientEdit' ||
              $route.name == 'HeroStatic' ||
              $route.name == 'HeroVideo'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'SliderList' ||
                $route.name == 'SliderAdd' ||
                $route.name == 'AboutSection' ||
                $route.name == 'IntroVideoSection' ||
                $route.name == 'WhayChooseUsSection' ||
                $route.name == 'ServiceSection' ||
                $route.name == 'PortfolioSection' ||
                $route.name == 'TestimonialSection' ||
                $route.name == 'TeamSection' ||
                $route.name == 'FaqSection' ||
                $route.name == 'MeetUsSection' ||
                $route.name == 'ContactSection' ||
                $route.name == 'BlogSection' ||
                $route.name == 'HistorySection' ||
                $route.name == 'SliderEdit' ||
                $route.name == 'FeatureList' ||
                $route.name == 'FeatureAdd' ||
                $route.name == 'WhayChooseList' ||
                $route.name == 'WhayChooseAdd' ||
                $route.name == 'WhayChooseEdit' ||
                $route.name == 'TestimonialList' ||
                $route.name == 'TestimonialAdd' ||
                $route.name == 'TestimonialEdit' ||
                $route.name == 'TeamList' ||
                $route.name == 'TeamAdd' ||
                $route.name == 'TeamEdit' ||
                $route.name == 'FeatureEdit' ||
                $route.name == 'FaqList' ||
                $route.name == 'FaqAdd' ||
                $route.name == 'FaqEdit' ||
                $route.name == 'CounterList' ||
                $route.name == 'CounterAdd' ||
                $route.name == 'CounterEdit' ||
                $route.name == 'ClientList' ||
                $route.name == 'ClientAdd' ||
                $route.name == 'ClientEdit' ||
                $route.name == 'HeroStatic' ||
                $route.name == 'HeroVideo'
                  ? 'active'
                  : ''
              "
            >
              <i class="fas fa-home"></i>
              <p>
                {{ $t("Home Page") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li
                class="nav-item with-child"
                :class="
                  $route.name == 'AboutSection' ||
                  $route.name == 'IntroVideoSection' ||
                  $route.name == 'ServiceSection' ||
                  $route.name == 'PortfolioSection' ||
                  $route.name == 'TestimonialSection' ||
                  $route.name == 'TeamSection' ||
                  $route.name == 'FaqSection' ||
                  $route.name == 'MeetUsSection' ||
                  $route.name == 'ContactSection' ||
                  $route.name == 'BlogSection' ||
                  $route.name == 'HistorySection' ||
                  $route.name == 'WhayChooseUsSection'
                    ? 'menu-open'
                    : ''
                "
              >
                <a
                  href="javascript:void(0)"
                  class="nav-link"
                  :class="
                    $route.name == 'AboutSection' ||
                    $route.name == 'IntroVideoSection' ||
                    $route.name == 'ServiceSection' ||
                    $route.name == 'PortfolioSection' ||
                    $route.name == 'TestimonialSection' ||
                    $route.name == 'TeamSection' ||
                    $route.name == 'FaqSection' ||
                    $route.name == 'MeetUsSection' ||
                    $route.name == 'ContactSection' ||
                    $route.name == 'BlogSection' ||
                    $route.name == 'HistorySection' ||
                    $route.name == 'WhayChooseUsSection'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    {{ $t("Section") }}
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'AboutSection' }"
                      class="nav-link"
                      :class="$route.name == 'AboutSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("About") }}</p>
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'IntroVideoSection' }"
                      class="nav-link"
                      :class="
                        $route.name == 'IntroVideoSection' ? 'active' : ''
                      "
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Intro Video") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{
                        name: 'WhayChooseUsSection',
                      }"
                      class="nav-link"
                      :class="
                        $route.name == 'WhayChooseUsSection' ? 'active' : ''
                      "
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Whay Choose Us") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'ServiceSection' }"
                      class="nav-link"
                      :class="$route.name == 'ServiceSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Service") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'PortfolioSection' }"
                      class="nav-link"
                      :class="$route.name == 'PortfolioSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Portfolio") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'TestimonialSection' }"
                      class="nav-link"
                      :class="
                        $route.name == 'TestimonialSection' ? 'active' : ''
                      "
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Testimonial") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'TeamSection' }"
                      class="nav-link"
                      :class="$route.name == 'TeamSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Team") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'FaqSection' }"
                      class="nav-link"
                      :class="$route.name == 'FaqSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("FAQ") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'MeetUsSection' }"
                      class="nav-link"
                      :class="$route.name == 'MeetUsSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Meet Us") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'ContactSection' }"
                      class="nav-link"
                      :class="$route.name == 'ContactSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Contact") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'BlogSection' }"
                      class="nav-link"
                      :class="$route.name == 'BlogSection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Blog") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'HistorySection' }"
                      class="nav-link"
                      :class="$route.name == 'HistorySection' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("History") }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li
                class="nav-item with-child"
                :class="
                  $route.name == 'SliderList' ||
                  $route.name == 'SliderAdd' ||
                  $route.name == 'SliderEdit' ||
                  $route.name == 'HeroStatic' ||
                  $route.name == 'HeroVideo'
                    ? 'menu-open'
                    : ''
                "
              >
                <a
                  href="javascript:void(0)"
                  class="nav-link"
                  :class="
                    $route.name == 'SliderList' ||
                    $route.name == 'SliderAdd' ||
                    $route.name == 'HeroStatic' ||
                    $route.name == 'SliderEdit' ||
                    $route.name == 'HeroVideo'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    {{ $t("Hero") }}
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'SliderList' }"
                      class="nav-link"
                      :class="
                        $route.name == 'SliderList' ||
                        $route.name == 'SliderAdd' ||
                        $route.name == 'SliderEdit'
                          ? 'active'
                          : ''
                      "
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Slider") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'HeroStatic' }"
                      class="nav-link"
                      :class="$route.name == 'HeroStatic' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Static") }}</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'HeroVideo' }"
                      class="nav-link"
                      :class="$route.name == 'HeroVideo' ? 'active' : ''"
                    >
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>{{ $t("Video") }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'FeatureList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'FeatureList' ||
                    $route.name == 'FeatureAdd' ||
                    $route.name == 'FeatureEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Feature") }}</p>
                </router-link>
              </li>
              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'WhayChooseList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'WhayChooseList' ||
                    $route.name == 'WhayChooseAdd' ||
                    $route.name == 'WhayChooseEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Whay Choose Us") }}</p>
                </router-link>
              </li>
              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'TestimonialList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'TestimonialList' ||
                    $route.name == 'TestimonialAdd' ||
                    $route.name == 'TestimonialEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Testimonial") }}</p>
                </router-link>
              </li>
              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'TeamList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'TeamList' ||
                    $route.name == 'TeamAdd' ||
                    $route.name == 'TeamEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Team") }}</p>
                </router-link>
              </li>
              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'FaqList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'FaqList' ||
                    $route.name == 'FaqAdd' ||
                    $route.name == 'FaqEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Faq") }}</p>
                </router-link>
              </li>
              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'CounterList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'CounterList' ||
                    $route.name == 'CounterAdd' ||
                    $route.name == 'CounterEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Counter") }}</p>
                </router-link>
              </li>
              <li class="nav-item without-hide">
                <router-link
                  :to="{ name: 'ClientList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'ClientList' ||
                    $route.name == 'ClientAdd' ||
                    $route.name == 'ClientEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Client") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'ServiceList' ||
              $route.name == 'ServiceAdd' ||
              $route.name == 'ServiceEdit' ||
              $route.name == 'PortfolioList' ||
              $route.name == 'PortfolioAdd' ||
              $route.name == 'PortfolioEdit' ||
              $route.name == 'PackageList' ||
              $route.name == 'PackageAdd' ||
              $route.name == 'PackageEdit' ||
              $route.name == 'HistoryList' ||
              $route.name == 'HistoryAdd' ||
              $route.name == 'HistoryEdit' ||
              $route.name == 'ContactPage'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'ServiceList' ||
                $route.name == 'ServiceAdd' ||
                $route.name == 'ServiceEdit' ||
                $route.name == 'PortfolioList' ||
                $route.name == 'PortfolioAdd' ||
                $route.name == 'PortfolioEdit' ||
                $route.name == 'PackageList' ||
                $route.name == 'PackageAdd' ||
                $route.name == 'PackageEdit' ||
                $route.name == 'HistoryList' ||
                $route.name == 'HistoryAdd' ||
                $route.name == 'HistoryEdit' ||
                $route.name == 'ContactPage'
                  ? 'active'
                  : ''
              "
            >
              <i class="nav-icon fas fa-copy"></i>
              <p>
                {{ $t("Inner Page") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'HistoryList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'HistoryList' ||
                    $route.name == 'HistoryAdd' ||
                    $route.name == 'HistoryEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("History") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'PackageList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'PackageList' ||
                    $route.name == 'PackageAdd' ||
                    $route.name == 'PackageEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Package") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'ServiceList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'ServiceList' ||
                    $route.name == 'ServiceAdd' ||
                    $route.name == 'ServiceEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Service") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'PortfolioList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'PortfolioList' ||
                    $route.name == 'PortfolioAdd' ||
                    $route.name == 'PortfolioEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Portfolio") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'ContactPage' }"
                  class="nav-link"
                  :class="$route.name == 'ContactPage' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Contact") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'GalleryList' ||
              $route.name == 'GalleryCategoryList'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'GalleryList' ||
                $route.name == 'GalleryCategoryList'
                  ? 'active'
                  : ''
              "
            >
              <i class="fas fa-images"></i>
              <p>
                {{ $t("Gallery") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'GalleryCategoryList' }"
                  class="nav-link"
                  :class="$route.name == 'GalleryCategoryList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Categories") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'GalleryList' }"
                  class="nav-link"
                  :class="$route.name == 'GalleryList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Gallery") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'JobList' || $route.name == 'JobCategoryList'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'JobList' || $route.name == 'JobCategoryList'
                  ? 'active'
                  : ''
              "
            >
              <i class="fas fa-briefcase"></i>
              <p>
                {{ $t("Job") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'JobCategoryList' }"
                  class="nav-link"
                  :class="$route.name == 'JobCategoryList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Categories") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'JobList' }"
                  class="nav-link"
                  :class="$route.name == 'JobList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Jobs") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'AllApplications' }"
                  class="nav-link"
                  :class="$route.name == 'AllApplications' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("All Applications") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'BlogList' || $route.name == 'BlogCategoryList'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'BlogList' || $route.name == 'BlogCategoryList'
                  ? 'active'
                  : ''
              "
            >
              <i class="fab fa-blogger"></i>
              <p>
                {{ $t("Blog") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'BlogCategoryList' }"
                  class="nav-link"
                  :class="$route.name == 'BlogCategoryList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Categories") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'BlogList' }"
                  class="nav-link"
                  :class="$route.name == 'BlogList' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Blogs") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item no-treeview">
            <router-link :to="{ name: 'AllQuote' }" class="nav-link">
              <i class="fas fa-quote-left"></i>
              <p>
                {{ $t("Quote") }}
              </p>
            </router-link>
          </li>

          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'Subscribers' || $route.name == 'MailToSubscribers'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'Subscribers' ||
                $route.name == 'MailToSubscribers'
                  ? 'active'
                  : ''
              "
            >
              <i class="fas fa-newspaper"></i>
              <p>
                {{ $t("Subscribers") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'Subscribers' }"
                  class="nav-link"
                  :class="$route.name == 'Subscribers' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Subscribers") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'MailToSubscribers' }"
                  class="nav-link"
                  :class="$route.name == 'MailToSubscribers' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Mail to Subscribers") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-treeview"
            :class="
              $route.name == 'FooterInfo' ||
              $route.name == 'FooterLinkList' ||
              $route.name == 'FooterLinkAdd' ||
              $route.name == 'FooterLinkEdit'
                ? 'menu-open'
                : ''
            "
          >
            <a
              href="javascript:void(0)"
              class="nav-link"
              :class="
                $route.name == 'FooterInfo' ||
                $route.name == 'FooterLinkList' ||
                $route.name == 'FooterLinkAdd' ||
                $route.name == 'FooterLinkEdit'
                  ? 'active'
                  : ''
              "
            >
              <i class="fas fa-leaf"></i>
              <p>
                {{ $t("Footer") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'FooterInfo' }"
                  class="nav-link"
                  :class="$route.name == 'FooterInfo' ? 'active' : ''"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Footer Information") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'FooterLinkList' }"
                  class="nav-link"
                  :class="
                    $route.name == 'FooterLinkList' ||
                    $route.name == 'FooterLinkAdd' ||
                    $route.name == 'FooterLinkEdit'
                      ? 'active'
                      : ''
                  "
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("Footer Link") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item no-treeview">
            <router-link :to="{ name: 'Language' }" class="nav-link">
              <i class="fas fa-globe-americas"></i>
              <p>
                {{ $t("Language") }}
              </p>
            </router-link>
          </li>
          <li class="nav-item no-treeview">
            <a href="javascript:void(0)" @click="logout" class="nav-link">
              <i class="fas fa-sign-out-alt"></i>
              <p>
                {{ $t("Logout") }}
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "AdminSidebar",
  data() {
    return {};
  },
  created() {
    this.adminInfo();
  },
  methods: {
    logout() {
      axios
        .get("/api/admin/logout")
        .then((response) => {
          localStorage.removeItem('token');
          this.$router.push({ name: "AdminLogin" });
        })
        .catch((errors) => {
          localStorage.removeItem('token');
          this.$router.push({ name: "AdminLogin" });
          console.log(errors);
        });
    },
    adminInfo() {
      this.$store.dispatch("dashboard/getAdminInfo");
    },
  },
  computed: {
    adminInfox() {
      return this.$store.getters["dashboard/getAdminInfo"];
    },
  },
};
</script>

<style scoped>
.nav-sidebar > .nav-item .nav-icon {
  padding-right: 0px;
  margin: 0px;
  width: auto;
}
</style>

