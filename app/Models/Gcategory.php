<?php

namespace App\Models;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Gcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'status'
    ];

    public function galleries(){
        return $this->hasMany(Gallery::class);
    }
}
