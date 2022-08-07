<?php

namespace App\Http\Controllers\Api;

use App\Models\WhyChoose;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\WhayChoose\WhayChooseResource;

class WhayChooseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $whyChooses = WhyChoose::orderBy('id', 'DESC')->paginate(10);
        return  WhayChooseResource::collection($whyChooses);
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
        $whyChoose = new WhyChoose();
        $whyChoose->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $whyChoose = WhyChoose::findOrFail($id);
        return new WhayChooseResource($whyChoose);
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

        $whyChoose = WhyChoose::findOrFail($id);

        $input = $request->all();

        $whyChoose->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $whyChoose = WhyChoose::findOrFail($id);
        $whyChoose->delete();
    }
    public function dataValidation($request, $id = null)
    {
        $request->validate(
            [
                'icon'=> 'required|max:250',
                'title'=> 'required|max:250',
                'text'=> 'required|max:250',
                'status'=>'required'
            ]
        );

    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $feature = WhyChoose::findOrFail($id);
            $feature->delete();
        }

    }
}
