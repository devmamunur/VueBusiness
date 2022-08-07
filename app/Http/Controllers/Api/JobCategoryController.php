<?php

namespace App\Http\Controllers\Api;

use App\Models\JobCategory;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Job\JobCategoryResource;
use App\Models\Job;

class JobCategoryController extends Controller
{


    // Display All  Category Without Pagination

    public function allJobCategory(){

        $jobCategories = JobCategory::where('status', 'Public')->orderBy('id','desc')->get();
        return JobCategoryResource::collection($jobCategories);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jobCategories = JobCategory::orderBy('id','desc')->paginate(10);
        return JobCategoryResource::collection($jobCategories);
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
            'name' => 'required|max:255|unique:job_categories,name',
            'status' => 'required'
        ]);

        $data = new JobCategory();
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
            'name' => 'required|max:255|unique:job_categories,name,'.$id,
            'status' => 'required'
        ]);

        $data =  JobCategory::find($id);
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
        $jobCategory = JobCategory::find($id);
        $jobs = Job::where('job_category_id', $jobCategory->id)->get();

        if($jobs->count() >= 1){
            return response()->json([
                'warning' => 'First Delete Jobs Under This Category !'
            ], 200);
        }

        $jobCategory->delete();
    }


    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];

            $jobCategory = JobCategory::find($id);
            $jobs = Job::where('job_category_id', $jobCategory->id)->get();

            if($jobs->count() >= 1){
                return response()->json([
                    'warning' => 'First Delete Jobs Under This Category !'
                ], 200);
            }

            $jobCategory->delete();
        }

    }
}
