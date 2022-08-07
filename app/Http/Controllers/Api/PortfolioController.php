<?php

namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Models\Portfolio;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PortfolioImage;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Http\Resources\Portfolio\PortfolioResource;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portfolios = Portfolio::with('service', 'portfolio_images')->orderBy('id', 'DESC')->paginate(10);
        return PortfolioResource::collection($portfolios);
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
        $input['featured_image'] = Helper::imgStore($request->file('featured_image'));
        $input['slug'] = $slug;
        $portfolio = new Portfolio();
        $portfolio->fill($input)->save();

        $portfolio_id = $portfolio->id;

        if($request->hasFile('image')){
            $files = $request->file('image');
            $count = 1;
            $upload_path = public_path('uploads');
            foreach ($files as $file){
                    $extension = $file->getClientOriginalExtension();
                    $image = time().rand().'.'.$extension;
                    $file->move($upload_path, $image);

                    $portfolio_slider = new PortfolioImage();
                    $portfolio_slider->image = $image;
                    $portfolio_slider->portfolio_id = $portfolio_id;
                    $portfolio_slider->save();
                    $count++;
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $portfolio = Portfolio::with('service', 'portfolio_images')->where('id', $id)->first();

        return new PortfolioResource($portfolio);
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

        $portfolio = Portfolio::findOrFail($id);
        $featured_image = $portfolio->featured_image;

        $slug = Str::slug($request->title);


        $input = $request->all();

        if($request->hasFile('featured_image')){
            $input['featured_image'] = Helper::imgUpdate($request->file('featured_image'), $featured_image);
        }

        $input['slug'] = $slug;
        $portfolio->fill($input)->save();
        $portfolio_id = $portfolio->id;


        if($request->imageId){
            foreach($request->imageId as $i){
                $pimage = PortfolioImage::find($i);
                $upload_path = public_path('uploads/');
                @unlink($upload_path. $pimage->image);
                $pimage->delete();
            }
        }

        if($request->hasFile('image')){

            $files = $request->file('image');
            $count = 1;
            $upload_path = public_path('uploads');
            foreach ($files as $file){
                    $extension = $file->getClientOriginalExtension();
                    $image = time().rand().'.'.$extension;
                    $file->move($upload_path, $image);

                    $portfolio_slider = new PortfolioImage();
                    $portfolio_slider->image = $image;
                    $portfolio_slider->portfolio_id = $portfolio_id;
                    $portfolio_slider->save();
                    $count++;
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        Helper::imgDelete($portfolio->image);
        $portfolio->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $portfolio = Portfolio::findOrFail($id);
            Helper::imgDelete($portfolio->image);
            $portfolio->delete();
        }

    }

    public function dataValidation($request, $id = null)
    {

        if($id == null){
            $title = 'required|string|unique:portfolios,title';

        }else{
            $title = 'required|string|unique:portfolios,title,'.$id;
        }

        $request->validate(
            [
                'image[]' => 'image',
                'featured_image'=> Helper::imgValidation($id, $request->file('featured_image')),
                'title' => $title,
                'service_id'=> 'required',
                'start_date' => 'required|max:250',
                'content'=> 'required',
                'status'=>'required'
            ]
        );

    }
}
