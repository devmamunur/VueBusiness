<?php

namespace App\Http\Resources\Email;

use Illuminate\Http\Resources\Json\JsonResource;

class EmailSettingResource extends JsonResource
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
            'is_smtp' => $this->is_smtp,
            'header_email' => $this->header_email,
            'smtp_host' => $this->smtp_host,
            'smtp_port' => $this->smtp_port,
            'email_encryption' => $this->email_encryption,
            'smtp_user' => $this->smtp_user,
            'smtp_pass' => $this->smtp_pass,
            'from_email' => $this->from_email,
            'from_name' => $this->from_name,
            'is_verification_email' => $this->is_verification_email,
        ];
    }
}



