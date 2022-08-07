<?php

namespace App\Http\Controllers\Api;

use App\Models\Job;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Job\JobResource;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $upload_path = public_path('../resources/js/locales/app/en.json');

        $json =  file_get_contents($upload_path);

        return $json;
    }

    public function frontendUpdate(Request $request){

        $content = json_encode($request->all());

        $upload_path = public_path('../resources/js/locales/app/en.json');

        file_put_contents($upload_path, $content);

    }

    public function backendLanguage(){

        $upload_path = public_path('../resources/js/locales/admin/en.json');

        $json =  file_get_contents($upload_path);

        return $json;
    }

    public function backendUpdate(Request $request){

        $content = json_encode($request->all());

        $upload_path = public_path('../resources/js/locales/admin/en.json');

        file_put_contents($upload_path, $content);
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

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

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

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }

}
