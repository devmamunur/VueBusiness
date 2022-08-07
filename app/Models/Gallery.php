<?php

namespace App\Models;

use App\Models\Gcategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'gcategory_id',
        'title',
        'image',
        'video_link',
        'status'
    ];

    public function gcategory()
    {
        return $this->belongsTo(Gcategory::class);
    }

}
