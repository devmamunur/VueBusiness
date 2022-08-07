<?php

namespace App\Http\Resources\WhayChoose;

use Illuminate\Http\Resources\Json\JsonResource;

class WhayChooseResource extends JsonResource
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
            'icon' => $this->icon,
            'title' => $this->title,
            'text' => $this->text,
            'status' => $this->status,
        ];
    }
}
