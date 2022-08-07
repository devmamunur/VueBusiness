<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Footerlink\FooterlinkResource;
use App\Models\FooterLink;
use Illuminate\Http\Request;

class FooterlinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $footerlinks = FooterLink::orderBy('id', 'DESC')->paginate(10);
        return FooterlinkResource::collection($footerlinks);
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
        $footerlink = new FooterLink();
        $footerlink->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $footerlink = FooterLink::findOrFail($id);
        return new FooterlinkResource($footerlink);
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

        $footerlink = FooterLink::findOrFail($id);

        $input = $request->all();

        $footerlink->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $footerlink = FooterLink::findOrFail($id);
        $footerlink->delete();
    }

    public function dataValidation($request, $id = null)
    {
        $request->validate(
            [
                'name' => 'required|max:250',
                'url' => 'required|max:250',
                'status'=>'required'
            ]
        );
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $footerlink = FooterLink::findOrFail($id);
            $footerlink->delete();
        }

    }
}
