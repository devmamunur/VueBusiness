<?php

namespace App\Http\Resources\Portfolio;

use App\Http\Resources\Service\ServiceResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Portfolio\PortfolioImageResource;

class PortfolioResource extends JsonResource
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
            'slug' => $this->slug,
            'start_date' => (string)$this->start_date,
            'submission_date' => (string)$this->submission_date,
            'client_name' => $this->client_name,
            'featured_image' => $this->featured_image,
            'service_id' => $this->service_id,
            'content' => $this->content,
            'link' => $this->link,
            'status' => $this->status,
            'service' => new ServiceResource( $this->whenLoaded('service')),
            'image' => PortfolioImageResource::collection( $this->whenLoaded('portfolio_images'))

        ];
    }
}
