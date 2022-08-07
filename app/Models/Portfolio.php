<?php

namespace App\Models;

use App\Models\Service;
use App\Models\PortfolioImage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Portfolio extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'start_date',
        'submission_date',
        'client_name',
        'featured_image',
        'service_id',
        'content',
        'link',
        'status'
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function portfolio_images(){
        return $this->hasMany(PortfolioImage::class);
    }

}
