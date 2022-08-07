<?php

namespace App\Http\Resources\Slider;

use Illuminate\Http\Resources\Json\JsonResource;

class SliderResource extends JsonResource
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
            'background_image' => $this->background_image,
            'image' => $this->image,
            'subtitle' => $this->subtitle,
            'title' => $this->title,
            'text' => $this->text,
            'button_text' => $this->button_text,
            'button_link' => $this->button_link,
            'status' => $this->status
        ];
    }
}
