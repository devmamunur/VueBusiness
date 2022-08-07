<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_category_id',
        'title',
        'slug',
        'position',
        'company_name',
        'vacancy',
        'deadline',
        'employment_status',
        'job_location',
        'salary',
        'other_benefits',
        'email',
        'job_responsibility',
        'education_requirement',
        'job_context',
        'experience_requirement',
        'additional_requirement',
        'status'
    ];

    public function job_category()
    {
        return $this->belongsTo(JobCategory::class);
    }
}
