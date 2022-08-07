<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\History;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\History\HistoryResource;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $histories = History::orderBy('id', 'DESC')->paginate(10);
        return HistoryResource::collection($histories);
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

        $history = new History();
        $history->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $history = History::findOrFail($id);
        return new HistoryResource($history);
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

        $history = History::findOrFail($id);
        $image = $history->image;



        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }

        $history->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $history = History::findOrFail($id);
        Helper::imgDelete($history->image);
        $history->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $history = History::findOrFail($id);
            Helper::imgDelete($history->image);
            $history->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {
        $request->validate(
            [
                'title' => 'required|string',
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'date'=> 'required',
                'position'=> 'required',
                'status'=>'required'
            ]
        );
    }

}




















