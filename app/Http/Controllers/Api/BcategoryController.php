<?php

namespace App\Http\Controllers\Api;

use App\Models\Blog;
use App\Models\Bcategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\BlogCategoryResource;

class BcategoryController extends Controller
{


    // Display All  Category Without Pagination

    public function allBlogCategory(){

        $blogCategories = Bcategory::where('status', 'Public')->orderBy('id','desc')->paginate(10);
        return BlogCategoryResource::collection($blogCategories);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogCategories = Bcategory::orderBy('id','desc')->paginate(10);
        return BlogCategoryResource::collection($blogCategories);
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
        $request->validate([
            'name' => 'required|max:255|unique:bcategories,name',
            'status' => 'required'
        ]);

        $data = new Bcategory();
        $input = $request->all();
        $input['slug'] = Str::slug($request->name);
        $input['status'] = $request->status;
        $data->fill($input)->save();
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
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:255|unique:bcategories,name,'.$id,
            'status' => 'required'
        ]);

        $data =  Bcategory::find($id);
        $input = $request->all();
        $input['slug'] = Str::slug($request->name);
        $input['status'] = $request->status;
        $data->update($input);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $bcategory = Bcategory::find($id);
        $blogs = Blog::where('bcategory_id', $bcategory->id)->get();

        if($blogs->count() >= 1){
            return response()->json([
                'warning' => 'First Delete Blogs Under This Category !'
            ], 200);
        }

        $bcategory->delete();

    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];

            $bcategory = Bcategory::find($id);
            $blogs = Blog::where('bcategory_id', $bcategory->id)->get();

            if($blogs->count() >= 1){
                return response()->json([
                    'warning' => 'First Delete Blogs Under This Category !'
                ], 200);
            }

            $bcategory->delete();
        }

    }
}
