<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        'background_image',
        'image',
        'subtitle',
        'title',
        'text',
        'button_text',
        'button_link',
        'status'
    ];
}
