<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\Setting;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Setting\SettingResource;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $setting = Setting::find(1);
        return new SettingResource($setting);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {






        $id = '1';
        $request->validate(
            [
                'footer_logo' => Helper::imgValidation($id, $request->file('footer_logo')),
                'footer_bg_image' => Helper::imgValidation($id, $request->file('footer_bg_image')),
                'hero_section_video_link' => 'mimes:mp4',
                'fav_icon' => Helper::imgValidation($id, $request->file('fav_icon')),
                'header_logo_dark' => Helper::imgValidation($id, $request->file('header_logo_dark')),
                'breadcrumb_image' => Helper::imgValidation($id, $request->file('breadcrumb_image')),
            ]
        );


        $setting = Setting::first();
        $footer_logo = $setting->footer_logo;
        $footer_bg_image = $setting->footer_bg_image;
        $fav_icon = $setting->fav_icon;
        $header_logo_dark = $setting->header_logo_dark;
        $breadcrumb_image = $setting->breadcrumb_image;

        $input = $request->all();

        if($request->hasFile('footer_logo')){
            $input['footer_logo'] = Helper::imgUpdate($request->file('footer_logo'), $footer_logo);
        }
        if($request->hasFile('footer_bg_image')){
            $input['footer_bg_image'] = Helper::imgUpdate($request->file('footer_bg_image'), $footer_bg_image);
        }
        if($request->hasFile('fav_icon')){
            $input['fav_icon'] = Helper::imgUpdate($request->file('fav_icon'), $fav_icon);
        }
        if($request->hasFile('header_logo_dark')){
            $input['header_logo_dark'] = Helper::imgUpdate($request->file('header_logo_dark'), $header_logo_dark);
        }
        if($request->hasFile('breadcrumb_image')){
            $input['breadcrumb_image'] = Helper::imgUpdate($request->file('breadcrumb_image'), $breadcrumb_image);
        }


        // Video Upload Start
        if($request->hasFile('hero_section_video_link')){
            $file = $request->file('hero_section_video_link');
            $upload_path = public_path('uploads/');
            $video = Str::random().$request->name.'.'.$file->getClientOriginalExtension();
            $file->move($upload_path, $video);
            $input['hero_section_video_link'] = $video;
        }
        // Video Upload End

        if($request->meta_keywords){
            $metaKey = explode(',', $request->meta_keywords);
            $input['meta_keywords'] = $metaKey;
        }

        $setting->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
