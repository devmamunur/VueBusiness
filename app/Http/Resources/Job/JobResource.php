<?php

namespace App\Http\Resources\Job;

use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'job_category_id' => $this->job_category_id,
            'title' => $this->title,
            'slug' => $this->slug,
            'position' => $this->position,
            'company_name' => $this->company_name,
            'vacancy' => $this->vacancy,
            'deadline' => $this->deadline,
            'employment_status' => $this->employment_status,
            'job_location' => $this->job_location,
            'salary' => $this->salary,
            'other_benefits' => $this->other_benefits,
            'email' => $this->email,
            'job_responsibility' => $this->job_responsibility,
            'education_requirement' => $this->education_requirement,
            'job_context' => $this->job_context,
            'experience_requirement' => $this->experience_requirement,
            'additional_requirement' => $this->additional_requirement,
            'status' => $this->status,
            'created_at' => (string)$this->created_at,
            'job_category' => new JobCategoryResource( $this->whenLoaded('job_category'))
        ];
    }
}
