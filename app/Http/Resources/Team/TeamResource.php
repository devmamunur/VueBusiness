<?php

namespace App\Http\Resources\Team;

use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
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
            'image' => $this->image,
            'name' => $this->name,
            'dagenation' => $this->dagenation,
            'description' => $this->description,
            'status' => $this->status,
            'icon1' => $this->icon1,
            'icon2' => $this->icon2,
            'icon3' => $this->icon3,
            'icon4' => $this->icon4,
            'icon5' => $this->icon5,
            'url1' => $this->url1,
            'url2' => $this->url2,
            'url3' => $this->url3,
            'url4' => $this->url4,
            'url5' => $this->url5
        ];
    }
}
