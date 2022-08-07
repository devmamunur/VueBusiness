<?php

namespace App\Http\Controllers\Api;

use App\Models\Slider;
use App\Helpers\Helper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Slider\SliderResource;

class SliderController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sliders = Slider::orderBy('id', 'DESC')->paginate(10);
        return SliderResource::collection($sliders);
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
        $this->dataValidation($request);

        $input = $request->all();
        $input['image'] = Helper::imgStore($request->file('image'));
        $input['background_image'] = Helper::imgStore($request->file('background_image'));

        $slider = new Slider();
        $slider->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $slider = Slider::findOrFail($id);
        return new SliderResource($slider);
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
    public function update(Request $request, $id)
    {
        $this->dataValidation($request, $id);

        $slider = Slider::findOrFail($id);
        $image = $slider->image;
        $background_image = $slider->background_image;


        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }
        if($request->hasFile('background_image')){
            $input['background_image'] = Helper::imgUpdate($request->file('background_image'), $background_image);
        }

        $slider->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $slider = Slider::findOrFail($id);
        Helper::imgDelete($slider->image);
        $slider->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $slider = Slider::findOrFail($id);
            Helper::imgDelete($slider->image);
            $slider->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {

        $request->validate(
            [
                'title' => 'required|max:250',
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'text' => 'required',
                'subtitle' => 'required|max:250',
                'status'=>'required'
            ]
        );

    }
}
