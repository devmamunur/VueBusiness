<?php

namespace App\Http\Resources\quote;

use Illuminate\Http\Resources\Json\JsonResource;

class QuoteResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'country' => $this->country,
            'budget' => $this->budget,
            'skypeid' => $this->skypeid,
            'subject' => $this->subject,
            'file' => $this->file,
            'description' => $this->description,
            'status' => $this->status
        ];
    }
}
