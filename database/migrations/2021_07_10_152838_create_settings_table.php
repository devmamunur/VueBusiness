<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('theme_version')->nullable();
            $table->string('website_title')->nullable();
            $table->string('base_color')->nullable();
            $table->string('header_logo_white')->nullable();
            $table->string('header_logo_dark')->nullable();
            $table->string('footer_logo')->nullable();
            $table->string('fav_icon')->nullable();
            $table->string('breadcrumb_image')->nullable();
            $table->string('number')->nullable();
            $table->string('email')->nullable();
            $table->string('contactemail')->nullable();
            $table->string('address')->nullable();
            $table->text('footer_text')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('copyright_text')->nullable();

            $table->text('opening_hours')->nullable();
            $table->text('footer_bg_image')->nullable();

            $table->text('messenger')->nullable();
            $table->text('disqus')->nullable();
            $table->text('add_this_status')->nullable();
            $table->text('google_analytics')->nullable();

            $table->string('announcement', 255)->nullable();
            $table->decimal('announcement_delay', 11, 2)->default(0.00);

            $table->text('maintainance_text')->nullable();
            $table->text('tawk_to')->nullable();
            $table->binary('cookie_alert_text')->nullable();

            $table->string('google_recaptcha_site_key')->nullable();
            $table->string('google_recaptcha_secret_key')->nullable();


            $table->string('whatsapp')->nullable();
            $table->string('maintainance_image')->nullable();
            $table->text('hero_section_video_link')->nullable();


            $table->string('preloader_icon')->nullable();
            $table->string('preloader_bg_color')->nullable();

            $table->string('hero_slider_overlay_color')->nullable();
            $table->string('hero_slider_overlay_color_opacity')->default(1);


            $table->text('about_meta_key')->nullable();
            $table->text('service_meta_key')->nullable();
            $table->text('portfolio_meta_key')->nullable();
            $table->text('package_meta_key')->nullable();
            $table->text('team_meta_key')->nullable();
            $table->text('faq_meta_key')->nullable();
            $table->text('gallery_meta_key')->nullable();
            $table->text('career_meta_key')->nullable();
            $table->text('blog_meta_key')->nullable();
            $table->text('product_meta_key')->nullable();
            $table->text('contact_meta_key')->nullable();
            $table->text('quot_meta_key')->nullable();


            $table->text('about_meta_desc')->nullable();
            $table->text('service_meta_desc')->nullable();
            $table->text('portfolio_meta_desc')->nullable();
            $table->text('package_meta_desc')->nullable();
            $table->text('team_meta_desc')->nullable();
            $table->text('faq_meta_desc')->nullable();
            $table->text('gallery_meta_desc')->nullable();
            $table->text('career_meta_desc')->nullable();
            $table->text('blog_meta_desc')->nullable();
            $table->text('product_meta_desc')->nullable();
            $table->text('contact_meta_desc')->nullable();
            $table->text('quot_meta_desc')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
