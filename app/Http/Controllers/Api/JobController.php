<?php

namespace App\Http\Controllers\Api;

use App\Models\Job;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Job\JobResource;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jobs = Job::with('job_category')->orderBy('id', 'DESC')->paginate(10);
        return JobResource::collection($jobs);
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
        $input['slug'] = $slug;
        $blog = new Job();
        $blog->fill($input)->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $job = Job::findOrFail($id);
        return new JobResource($job);
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

        $job = Job::findOrFail($id);
        $slug = Str::slug($request->title);

        $input = $request->all();
        $input['slug'] = $slug;
        $job->fill($input)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $job = Job::findOrFail($id);
        $job->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $job = Job::findOrFail($id);
            $job->delete();
        }

    }


    public function dataValidation($request, $id = null)
    {
        if($id == null){
            $title = 'required|string|unique:jobs';

        }else{
            $title = 'required|string|unique:jobs,id,'.$id;
        }

        $request->validate(
            [
                'title' => $title,
                'position' => 'required|string|max:191',
                'company_name' => 'required|string|max:191',
                'job_category_id' => 'required|numeric',
                'vacancy' => 'required|numeric|max:191',
                'job_responsibility' => 'required|string',
                'employment_status' => 'required|string',
                'education_requirement' => 'nullable|string',
                'job_context' => 'nullable|string',
                'experience_requirement' => 'nullable|string',
                'additional_requirement' => 'nullable|string',
                'job_location' => 'required|string',
                'salary' => 'required|string',
                'other_benefits' => 'nullable|string',
                'email' => 'nullable|string|max:191',
                'deadline' => 'required'
            ]
        );

    }
}
