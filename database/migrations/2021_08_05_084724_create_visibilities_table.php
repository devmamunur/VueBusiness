<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisibilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visibilities', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('is_messenger')->default(1);
            $table->tinyInteger('is_disqus')->default(1);
            $table->tinyInteger('is_google_analytics')->default(1);
            $table->tinyInteger('is_announcement')->default(1);
            $table->tinyInteger('is_maintainance_mode')->default(1);
            $table->tinyInteger('is_blog_share_links')->default(1);
            $table->tinyInteger('is_tawk_to')->default(1);
            $table->string('is_recaptcha')->nullable();
            $table->tinyInteger('is_cooki_alert')->default(1);

            $table->tinyInteger('is_about_page')->default(1);
            $table->tinyInteger('is_service_page')->default(1);
            $table->tinyInteger('is_poerfolio_page')->default(1);
            $table->tinyInteger('is_package_page')->default(1);
            $table->tinyInteger('is_team_page')->default(1);
            $table->tinyInteger('is_faq_page')->default(1);
            $table->tinyInteger('is_blog_page')->default(1);
            $table->tinyInteger('is_gallery_page')->default(1);
            $table->tinyInteger('is_career_page')->default(1);
            $table->tinyInteger('is_add_this_status')->default(1);
            $table->tinyInteger('is_contact_page')->default(1);
            $table->tinyInteger('is_quote_page')->default(1);

            $table->tinyInteger('is_about_about')->default(1);
            $table->tinyInteger('is_about_featured_work')->default(1);
            $table->tinyInteger('is_about_choose_us')->default(1);
            $table->tinyInteger('is_about_history')->default(1);

            $table->tinyInteger('is_video_hero')->default(1);
            $table->tinyInteger('is_preloader')->default(1);

            $table->tinyInteger('is_t1_slider_section')->default(1);
            $table->tinyInteger('is_t1_about_section')->default(1);
            $table->tinyInteger('is_t1_featured_work_section')->default(1);
            $table->tinyInteger('is_t1_who_we_are_section')->default(1);
            $table->tinyInteger('is_t1_service_section')->default(1);
            $table->tinyInteger('is_t1_portfolio_section')->default(1);
            $table->tinyInteger('is_t1_team_section')->default(1);
            $table->tinyInteger('is_t1_counter_section')->default(1);
            $table->tinyInteger('is_t1_testimonial_section')->default(1);
            $table->tinyInteger('is_t1_meet_us_section')->default(1);
            $table->tinyInteger('is_t1_blog_section')->default(1);
            $table->tinyInteger('is_t1_clint_section')->default(1);

            $table->tinyInteger('is_t2_slider_section')->default(1);
            $table->tinyInteger('is_t2_who_we_are_section')->default(1);
            $table->tinyInteger('is_t2_service_section')->default(1);
            $table->tinyInteger('is_t2_portfolio_section')->default(1);
            $table->tinyInteger('is_t2_team_section')->default(1);
            $table->tinyInteger('is_t2_testimonial_section')->default(1);
            $table->tinyInteger('is_t2_faq_section')->default(1);
            $table->tinyInteger('is_t2_news_section')->default(1);
            $table->tinyInteger('is_t2_client_section')->default(1);


            $table->tinyInteger('is_t3_hero_section')->default(1);
            $table->tinyInteger('is_t3_about_section')->default(1);
            $table->tinyInteger('is_t3_service_section')->default(1);
            $table->tinyInteger('is_t3_intro_video_section')->default(1);
            $table->tinyInteger('is_t3_team_section')->default(1);
            $table->tinyInteger('is_t3_counter_section')->default(1);
            $table->tinyInteger('is_t3_testimonial_section')->default(1);
            $table->tinyInteger('is_t3_faq_section')->default(1);
            $table->tinyInteger('is_t3_meet_us_section')->default(1);
            $table->tinyInteger('is_t3_news_section')->default(1);
            $table->tinyInteger('is_t3_client_section')->default(1);

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
        Schema::dropIfExists('visibilities');
    }
}
