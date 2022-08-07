<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\application\ApplicationResource;
use App\Http\Resources\quote\QuoteResource;
use App\Models\JobApplication;
use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        if($request->status == 'undefined' || $request->status == '' || $request->status == 99 ){
            $quotes = Quote::orderBy('id','desc')->paginate(10);
        }else{
            $quotes = Quote::where('status', $request->status)->orderBy('id','desc')->paginate(10);
        }

        return QuoteResource::collection($quotes);
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
        $quote = Quote::where('id', $id)->first();
        return new QuoteResource($quote);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $quote = Quote::findOrFail($id);
        $upload_path = public_path('uploads/');
        @unlink($upload_path.$quote->file);
        $quote->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $quote = Quote::findOrFail($id);
            $upload_path = public_path('uploads/');
            @unlink($upload_path.$quote->file);
            $quote->delete();
        }

    }

    public function status($id, $status){
        $quote = Quote::where('id', $id)->first();
        $quote->status = $status;
        $quote->save();
    }
}
