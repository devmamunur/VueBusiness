<?php

namespace App\Http\Resources\Counter;

use Illuminate\Http\Resources\Json\JsonResource;

class CounterResource extends JsonResource
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
            'title' => $this->title,
            'number' => $this->number,
            'icon' => $this->icon,
            'text' => $this->text,
            'status' => $this->status,
        ];
    }
}
