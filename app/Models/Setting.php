<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'theme_version',
        'website_title',
        'base_color',
        'header_logo_dark',
        'footer_logo',
        'fav_icon',
        'breadcrumb_image',
        'number',
        'email',
        'contactemail',
        'address',
        'footer_text',
        'meta_keywords',
        'meta_description',
        'copyright_text',
        'opening_hours',
        'footer_bg_image',
        'hero_section_video_link',
        'preloader_icon',
        'preloader_bg_color',
        'hero_slider_overlay_color',
        'hero_slider_overlay_color_opacity',
    ];
}
