<?php

namespace App\Http\Controllers\Api;

use App\Models\Client;
use App\Helpers\Helper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Client\ClientResource;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::orderBy('id', 'DESC')->paginate(10);
        return ClientResource::collection($clients);
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

        $client = new Client();
        $client->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = Client::findOrFail($id);
        return new ClientResource($client);
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

        $client = Client::findOrFail($id);
        $image = $client->image;



        $input = $request->all();

        if($request->hasFile('image')){
            $input['image'] = Helper::imgUpdate($request->file('image'), $image);
        }

        $client->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        Helper::imgDelete($client->image);
        $client->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $client = Client::findOrFail($id);
            Helper::imgDelete($client->image);
            $client->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {
        $request->validate(
            [
                'image'=> Helper::imgValidation($id, $request->file('image')),
                'name' => 'required|max:250',
                'link' => 'required|max:250',
                'status' => 'required',
            ]
        );
    }
}
