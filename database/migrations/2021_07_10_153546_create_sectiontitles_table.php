<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectiontitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sectiontitles', function (Blueprint $table) {
            $table->id();
            $table->string('w_we_are_sub_title')->nullable();
            $table->string('w_we_are_title')->nullable();
            $table->text('w_we_are_text')->nullable();

            $table->string('video_title')->nullable();
            $table->string('video_sub_title')->nullable();
            $table->string('video_text')->nullable();
            $table->string('video_image')->nullable();
            $table->string('video_link')->nullable();

            $table->string('service_title')->nullable();
            $table->string('service_sub_title')->nullable();

            $table->string('w_c_us_sub_title')->nullable();
            $table->string('w_c_us_title')->nullable();
            $table->string('w_c_us_image1')->nullable();
            $table->string('w_c_us_image2')->nullable();

            $table->string('team_title')->nullable();
            $table->string('team_sub_title')->nullable();

            $table->string('contact_sub_title')->nullable();
            $table->string('contact_title')->nullable();
            $table->string('contact_form_title')->nullable();
            $table->string('contact_section_bg_image')->nullable();
            $table->string('contact_form_image')->nullable();
            $table->text('contact_map')->nullable();

            $table->string('faq_sub_title')->nullable();
            $table->string('faq_title')->nullable();
            $table->string('faq_bg_image')->nullable();
            $table->string('faq_image1')->nullable();
            $table->string('faq_image2')->nullable();

            $table->string('blog_title')->nullable();
            $table->string('blog_sub_title')->nullable();

            $table->string('hero_sub_title')->nullable();
            $table->string('hero_title')->nullable();
            $table->string('hero_text')->nullable();
            $table->string('hero_image')->nullable();
            $table->string('hero_bg_image')->nullable();
            $table->string('hero_f_icon1')->nullable();
            $table->string('hero_f_icon2')->nullable();
            $table->string('hero_f_text1')->nullable();
            $table->string('hero_f_text2')->nullable();

            $table->string('about_title')->nullable();
            $table->string('about_sub_title')->nullable();
            $table->text('about_text')->nullable();
            $table->string('about_experince_yers')->nullable();
            $table->string('about_intro_video')->nullable();

            $table->string('get_quote_title')->nullable();
            $table->string('get_quote_sub_title')->nullable();

            $table->string('our_history_title')->nullable();
            $table->string('our_history_text')->nullable();

            $table->string('package_sub_title')->nullable();
            $table->string('package_title')->nullable();

            $table->string('portfolio_title')->nullable();
            $table->string('portfolio_sub_title')->nullable();

            $table->string('counter_bg_image')->nullable();

            $table->string('meeet_us_bg_image')->nullable();
            $table->string('meeet_us_button_text')->nullable();
            $table->string('meeet_us_button_link')->nullable();


            $table->text('video_content')->nullable();
            $table->string('video_bg_image')->nullable();
            $table->string('video_image_left')->nullable();
            $table->string('video_image_right')->nullable();

            $table->text('about_image')->nullable();
            $table->string('meeet_us_text')->nullable();
            $table->string('testimonial_title', 255)->nullable();
            $table->string('testimonial_subtitle', 255)->nullable();



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
        Schema::dropIfExists('sectiontitles');
    }
}
