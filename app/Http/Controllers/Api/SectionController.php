<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\Sectiontitle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Section\SectionResource;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sectiontitle = Sectiontitle::first();
        return new SectionResource($sectiontitle);
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
                'about_image' => Helper::imgValidation($id, $request->file('about_image')),
                'video_image' => Helper::imgValidation($id, $request->file('video_image')),
                'video_bg_image' => Helper::imgValidation($id, $request->file('video_bg_image')),
                'video_image_left' => Helper::imgValidation($id, $request->file('video_image_left')),
                'video_image_right' => Helper::imgValidation($id, $request->file('video_image_right')),
                'w_c_us_image1' => Helper::imgValidation($id, $request->file('w_c_us_image1')),
                'w_c_us_image2' => Helper::imgValidation($id, $request->file('w_c_us_image2')),
                'faq_bg_image' => Helper::imgValidation($id, $request->file('faq_bg_image')),
                'faq_image1' => Helper::imgValidation($id, $request->file('faq_image1')),
                'faq_image2' => Helper::imgValidation($id, $request->file('faq_image2')),
                'meeet_us_bg_image' => Helper::imgValidation($id, $request->file('meeet_us_bg_image')),
                'contact_form_image' => Helper::imgValidation($id, $request->file('contact_form_image')),
                'contact_section_bg_image' => Helper::imgValidation($id, $request->file('contact_section_bg_image')),
                'hero_bg_image' => Helper::imgValidation($id, $request->file('hero_bg_image')),
                'hero_image' => Helper::imgValidation($id, $request->file('hero_image')),
            ]
        );


        $sectiontitle = Sectiontitle::first();
        $about_image = $sectiontitle->about_image;
        $video_image = $sectiontitle->video_image;
        $video_bg_image = $sectiontitle->video_bg_image;
        $video_image_left = $sectiontitle->video_image_left;
        $video_image_right = $sectiontitle->video_image_right;
        $w_c_us_image1 = $sectiontitle->w_c_us_image1;
        $w_c_us_image2 = $sectiontitle->w_c_us_image2;
        $faq_bg_image = $sectiontitle->faq_bg_image;
        $faq_image1 = $sectiontitle->faq_image1;
        $faq_image2 = $sectiontitle->faq_image2;
        $meeet_us_bg_image = $sectiontitle->meeet_us_bg_image;
        $contact_form_image = $sectiontitle->contact_form_image;
        $contact_section_bg_image = $sectiontitle->contact_section_bg_image;
        $hero_bg_image = $sectiontitle->hero_bg_image;
        $hero_image = $sectiontitle->hero_image;

        $input = $request->all();

        if($request->hasFile('about_image')){
            $input['about_image'] = Helper::imgUpdate($request->file('about_image'), $about_image);
        }
        if($request->hasFile('video_image')){
            $input['video_image'] = Helper::imgUpdate($request->file('video_image'), $video_image);
        }
        if($request->hasFile('video_bg_image')){
            $input['video_bg_image'] = Helper::imgUpdate($request->file('video_bg_image'), $video_bg_image);
        }
        if($request->hasFile('video_image_left')){
            $input['video_image_left'] = Helper::imgUpdate($request->file('video_image_left'), $video_image_left);
        }
        if($request->hasFile('video_image_right')){
            $input['video_image_right'] = Helper::imgUpdate($request->file('video_image_right'), $video_image_right);
        }
        if($request->hasFile('w_c_us_image1')){
            $input['w_c_us_image1'] = Helper::imgUpdate($request->file('w_c_us_image1'), $w_c_us_image1);
        }
        if($request->hasFile('w_c_us_image2')){
            $input['w_c_us_image2'] = Helper::imgUpdate($request->file('w_c_us_image2'), $w_c_us_image2);
        }
        if($request->hasFile('faq_bg_image')){
            $input['faq_bg_image'] = Helper::imgUpdate($request->file('faq_bg_image'), $faq_bg_image);
        }
        if($request->hasFile('faq_image1')){
            $input['faq_image1'] = Helper::imgUpdate($request->file('faq_image1'), $faq_image1);
        }
        if($request->hasFile('faq_image2')){
            $input['faq_image2'] = Helper::imgUpdate($request->file('faq_image2'), $faq_image2);
        }
        if($request->hasFile('meeet_us_bg_image')){
            $input['meeet_us_bg_image'] = Helper::imgUpdate($request->file('meeet_us_bg_image'), $meeet_us_bg_image);
        }
        if($request->hasFile('contact_form_image')){
            $input['contact_form_image'] = Helper::imgUpdate($request->file('contact_form_image'), $contact_form_image);
        }
        if($request->hasFile('contact_section_bg_image')){
            $input['contact_section_bg_image'] = Helper::imgUpdate($request->file('contact_section_bg_image'), $contact_section_bg_image);
        }
        if($request->hasFile('hero_bg_image')){
            $input['hero_bg_image'] = Helper::imgUpdate($request->file('hero_bg_image'), $hero_bg_image);
        }
        if($request->hasFile('hero_image')){
            $input['hero_image'] = Helper::imgUpdate($request->file('hero_image'), $hero_image);
        }


        $sectiontitle->fill($input)->save();
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
