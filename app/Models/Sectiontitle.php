<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sectiontitle extends Model
{
    use HasFactory;


    protected $fillable = [
        'about_image',
        'about_title',
        'about_sub_title',
        'about_text',
        'about_experince_yers',
        'about_intro_video',
        'w_we_are_title',
        'w_we_are_sub_title',
        'w_we_are_text',
        'video_image',
        'video_bg_image',
        'video_title',
        'video_sub_title',
        'video_text',
        'video_content',
        'video_link',
        'w_c_us_image1',
        'w_c_us_image2',
        'w_c_us_title',
        'w_c_us_sub_title',
        'service_title',
        'service_sub_title',
        'portfolio_title',
        'portfolio_sub_title',
        'testimonial_title',
        'testimonial_subtitle',
        'team_title',
        'team_sub_title',
        'faq_bg_image',
        'faq_image1',
        'faq_image2',
        'faq_title',
        'faq_sub_title',
        'meeet_us_bg_image',
        'meeet_us_text',
        'meeet_us_button_text',
        'meeet_us_button_link',
        'contact_title',
        'contact_sub_title',
        'blog_title',
        'blog_sub_title',
        'our_history_title',
        'our_history_text',
        'hero_bg_image',
        'hero_image',
        'hero_title',
        'hero_sub_title',
        'hero_text',
        'hero_f_icon1',
        'hero_f_text1',
        'hero_f_icon2',
        'hero_f_text2',
    ];
}
