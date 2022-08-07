<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'name',
        'dagenation',
        'description',
        'status',
        'icon1',
        'icon2',
        'icon3',
        'icon4',
        'icon5',
        'url1',
        'url2',
        'url3',
        'url4',
        'url5'
    ];
}
