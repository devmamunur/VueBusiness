<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_title',
        'type',
        'zipFile',
        'name',
        'email',
        'phone',
        'expected_salary',
        'status',
        'message'
    ];
}
