<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Testimonial\TestimonialResource;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $testimonials = Testimonial::orderBy('id', 'DESC')->paginate(10);
        return TestimonialResource::collection($testimonials);
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

        $testimonail = new Testimonial();
        $testimonail->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $testimonail = Testimonial::findOrFail($id);
        return new TestimonialResource($testimonail);
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

        $testimonial = Testimonial::findOrFail($id);
        $image = $testimonial->image;



        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }

        $testimonial->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        Helper::imgDelete($testimonial->image);
        $testimonial->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $testimonial = Testimonial::findOrFail($id);
            Helper::imgDelete($testimonial->image);
            $testimonial->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {
        $request->validate(
            [
                'name' => 'required|string|max:200',
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'position'=> 'required|max:200',
                'rating'=> 'required',
                'message'=> 'required',
                'status'=>'required'
            ]
        );
    }
}
