<?php

namespace App\Http\Resources\Blog;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Blog\BlogCategoryResource;

class BlogResource extends JsonResource
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
            'bcategory_id' => $this->bcategory_id,
            'title' => $this->title,
            'slug' => $this->slug,
            'image' => $this->image,
            'description' => $this->description,
            'status' => $this->status,
            'created_at' => (string)$this->created_at,
            'bcategory' => new BlogCategoryResource( $this->whenLoaded('bcategory'))
        ];
    }
}
