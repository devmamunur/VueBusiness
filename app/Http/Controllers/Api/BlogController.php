<?php

namespace App\Http\Controllers\Api;

use App\Models\Blog;
use App\Helpers\Helper;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\BlogResource;

class BlogController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = Blog::with('bcategory')->orderBy('id', 'DESC')->paginate(10);

        return BlogResource::collection($blogs);

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

        $slug = Str::slug($request->title);
        $input = $request->all();
        $input['image'] = Helper::imgStore($request->file('image'));
        $input['slug'] = $slug;
        $blog = new Blog();
        $blog->fill($input)->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blog = Blog::findOrFail($id);
        return new BlogResource($blog);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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

        $blog = Blog::findOrFail($id);
        $image = $blog->image;
        $slug = Str::slug($request->title);


        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }

        $input['slug'] = $slug;
        $blog->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $blog = Blog::findOrFail($id);
        Helper::imgDelete($blog->image);
        $blog->delete();
    }


    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $blog = Blog::findOrFail($id);
            Helper::imgDelete($blog->image);
            $blog->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {

        if($id == null){
            $title = 'required|string|unique:blogs,title';

        }else{
            $title = 'required|string|unique:blogs,title,'.$id;
        }

        $request->validate(
            [
                'title' => $title,
                'bcategory_id'=> 'required',
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'description'=> 'required',
                'status'=>'required'
            ]
        );

    }
}
