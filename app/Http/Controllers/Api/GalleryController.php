<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\Gallery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Gallery\GalleryResource;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galleries = Gallery::with('gcategory')->orderBy('id', 'DESC')->paginate(10);

        return GalleryResource::collection($galleries);
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
        $gallery = new Gallery();
        $gallery->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $gallery = Gallery::findOrFail($id);
        return new GalleryResource($gallery);
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

        $gallery = Gallery::findOrFail($id);
        $image = $gallery->image;

        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }

        $gallery->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);
        Helper::imgDelete($gallery->image);
        $gallery->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $gallery = Gallery::findOrFail($id);
            Helper::imgDelete($gallery->image);
            $gallery->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {

        if($id == null){
            $title = 'required|string|unique:galleries,title';

        }else{
            $title = 'required|string|unique:galleries,title,'.$id;
        }

        $request->validate(
            [
                'title' => $title,
                'gcategory_id'=> 'required',
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'status'=>'required'
            ]
        );

    }
}
