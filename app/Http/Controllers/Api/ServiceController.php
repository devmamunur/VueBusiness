<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\Service;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Service\ServiceResource;

class ServiceController extends Controller
{

    // Display All Service Without Pagination
    public function allService(){

        $services = Service::where('status', 'Public')->orderBy('id','desc')->get();
        return ServiceResource::collection($services);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::orderBy('id', 'DESC')->paginate(10);
        return ServiceResource::collection($services);
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
        $service = new Service();
        $service->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $service = Service::findOrFail($id);
        return new ServiceResource($service);
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

        $service = Service::findOrFail($id);
        $image = $service->image;
        $slug = Str::slug($request->title);


        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }
        $input['slug'] = $slug;
        $service->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        Helper::imgDelete($service->image);
        $service->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $service = Service::findOrFail($id);
            Helper::imgDelete($service->image);
            $service->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {

        if($id == null){
            $title = 'required|string|unique:services,title';

        }else{
            $title = 'required|string|unique:services,title,'.$id;
        }

        $request->validate(
            [
                'title' => $title,
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'icon'=> 'required',
                'content'=> 'required',
                'status'=>'required'
            ]
        );

    }
}
