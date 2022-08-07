<?php

namespace App\Helpers;

class Helper
{

    public static function imgValidation($id, $file) {
        if($id){
            if ($file) {
                $image = 'image';
              } else {
                $image = '';
              }
        }else{
          $image = 'required|image';
        }
        return $image;
    }

    public static function imgStore($file) {

        $data = $file;
        $extension = $data->getClientOriginalExtension();
        $image = time().rand().'.'.$extension;
        $upload_path = public_path('uploads');
        $data->move($upload_path, $image);

        return $image;
    }

    public static function imgUpdate($file, $image) {
        $upload_path = public_path('uploads/');
        @unlink($upload_path.$image);

        $data = $file;
        $extension = $data->getClientOriginalExtension();
        $newImage = time().rand().'.'.$extension;
        $data->move($upload_path, $newImage);

        return $newImage;
    }

    public static function imgDelete($image) {
        $upload_path = public_path('uploads/');
        @unlink($upload_path.$image);
        return $image;
    }

}
