<?php

namespace App\Models;

use App\Models\Bcategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'bcategory_id',
        'title',
        'slug',
        'image',
        'description',
        'status'
    ];

    public function bcategory()
    {
        return $this->belongsTo(Bcategory::class);
    }

}
