<?php

namespace App\Http\Controllers\Api;

use App\Models\Gcategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Gallery\GcategoryResource;
use App\Models\Gallery;

class GcategoryController extends Controller
{


    // Display All  Category Without Pagination

    public function allGalleryCategory(){

        $gcategories = Gcategory::where('status', 'Public')->orderBy('id','desc')->get();
        return GcategoryResource::collection($gcategories);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gcategories = Gcategory::orderBy('id','desc')->paginate(10);
        return GcategoryResource::collection($gcategories);
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
            'name' => 'required|max:255|unique:gcategories,name',
            'status' => 'required'
        ]);

        $data = new Gcategory();
        $data->fill($request->all())->save();
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
            'name' => 'required|max:255|unique:gcategories,name,'.$id,
            'status' => 'required'
        ]);

        $data =  Gcategory::find($id);
        $data->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gcategory = Gcategory::find($id);
        $galleries = Gallery::where('gcategory_id', $gcategory->id)->get();

        if($galleries->count() >= 1){
            return response()->json([
                'warning' => 'First Delete Gallery Under This Category !'
            ], 200);
        }

        $gcategory->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];

            $gcategory = Gcategory::find($id);
            $galleries = Gallery::where('gcategory_id', $gcategory->id)->get();

            if($galleries->count() >= 1){
                return response()->json([
                    'warning' => 'First Delete Gallery Under This Category !'
                ], 200);
            }

            $gcategory->delete();
        }

    }
}
