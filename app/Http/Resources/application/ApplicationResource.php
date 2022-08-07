<?php

namespace App\Http\Resources\application;

use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'job_title' => $this->job_title,
            'type' => $this->type,
            'zipFile' => $this->zipFile,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'expected_salary' => $this->expected_salary,
            'status' => $this->status,
            'message' => $this->message
        ];
    }
}
