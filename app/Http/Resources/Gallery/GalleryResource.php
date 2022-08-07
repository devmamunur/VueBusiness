<?php

namespace App\Http\Resources\Gallery;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Gallery\GcategoryResource;

class GalleryResource extends JsonResource
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
            'gcategory_id' => $this->gcategory_id,
            'title' => $this->title,
            'image' => $this->image,
            'video_link' => $this->video_link,
            'status' => $this->status,
            'gcategory' => new GcategoryResource( $this->whenLoaded('gcategory'))
        ];
    }
}
