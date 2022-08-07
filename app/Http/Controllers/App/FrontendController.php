<?php

namespace App\Http\Controllers\App;

use App\Models\Faq;
use App\Models\Job;
use App\Models\Blog;
use App\Models\Team;
use App\Models\Quote;
use App\Models\Client;
use App\Models\Slider;
use App\Models\Counter;
use App\Models\Feature;
use App\Models\Gallery;
use App\Models\History;
use App\Models\Package;
use App\Models\Service;
use App\Models\Setting;
use App\Models\Gcategory;
use App\Models\Portfolio;
use App\Models\WhyChoose;
use App\Models\FooterLink;
use App\Models\SocialLink;
use App\Models\JobCategory;
use App\Models\Testimonial;
use Illuminate\Support\Str;
use App\Models\Emailsetting;
use App\Models\Sectiontitle;
use Illuminate\Http\Request;
use App\Models\JobApplication;
use App\Models\PortfolioImage;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\BlogCategoryResource;
use App\Http\Resources\Faq\FaqResource;
use App\Http\Resources\Job\JobResource;
use App\Http\Resources\Blog\BlogResource;
use App\Http\Resources\Team\TeamResource;
use App\Http\Resources\Client\ClientResource;
use App\Http\Resources\Slider\SliderResource;
use App\Http\Resources\Counter\CounterResource;
use App\Http\Resources\Feature\FeatureResource;
use App\Http\Resources\Gallery\GalleryResource;
use App\Http\Resources\History\HistoryResource;
use App\Http\Resources\Job\JobCategoryResource;
use App\Http\Resources\Package\PackageResource;
use App\Http\Resources\Section\SectionResource;
use App\Http\Resources\Service\ServiceResource;
use App\Http\Resources\Setting\SettingResource;
use App\Http\Resources\Gallery\GcategoryResource;
use App\Http\Resources\Portfolio\PortfolioResource;
use App\Http\Resources\Footerlink\FooterlinkResource;
use App\Http\Resources\SocialLink\SocialLinkResource;
use App\Http\Resources\WhayChoose\WhayChooseResource;
use App\Http\Resources\Testimonial\TestimonialResource;
use App\Http\Resources\Portfolio\PortfolioImageResource;
use App\Models\Bcategory;
use App\Models\Newsletter;
use App\Models\Visibility;

class FrontendController extends Controller
{
    public function sectionInfos(){
        $sectionInfo = Sectiontitle::first();
        return new SectionResource($sectionInfo);
    }

    public function settings(){
        $setting = Setting::first();
        return new SettingResource($setting);
    }
    public function visibilities(){
        $visibility = Visibility::first();
        return $visibility;
    }

    public function sliders(){
        $sliders = Slider::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return SliderResource::collection($sliders);
    }

    public function footerLinks(){
        $footerlinks = FooterLink::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return FooterlinkResource::collection($footerlinks);
    }

    public function features(){
        $features = Feature::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return FeatureResource::collection($features);
    }

    public function whyChooses(){
        $whyChooses = WhyChoose::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return WhayChooseResource::collection($whyChooses);
    }

    public function serviceSection(){
        $services = Service::orderBy('id', 'DESC')->where('status', 'Public')->limit(6)->get();
        return ServiceResource::collection($services);
    }

    public function portfolioSection(){
        $portfolios = Portfolio::with('service')->orderBy('id', 'DESC')->where('status', 'Public')->limit(6)->get();
        return PortfolioResource::collection($portfolios);
    }

    public function teamSection(){
        $teamSections = Team::orderBy('id', 'DESC')->where('status', 'Public')->limit(8)->get();
        return TeamResource::collection($teamSections);
    }

    public function blogSection(){
        $blogSections = Blog::orderBy('id', 'DESC')->where('status', 'Public')->limit(3)->get();
        return BlogResource::collection($blogSections);
    }

    public function counters(){
        $counters = Counter::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return CounterResource::collection($counters);
    }

    public function testimonials(){
        $testimonials = Testimonial::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return TestimonialResource::collection($testimonials);
    }


    public function clientSection(){
        $clientSections = Client::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return ClientResource::collection($clientSections);
    }

    public function whayChoose(){
        $whayChooses = WhyChoose::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return WhayChooseResource::collection($whayChooses);
    }

    public function history(){
        $histories = History::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return HistoryResource::collection($histories);
    }

    public function services(){
        $services = Service::orderBy('id', 'DESC')->where('status', 'Public')->get();
        return ServiceResource::collection($services);
    }

    public function serviceDetails($slug){
        $serviceDetails = Service::where('slug', $slug)->first();
        return new ServiceResource($serviceDetails);
    }

    public function portfolios(Request $request){
        $category = $request->category;
        $catid = null;
        if ($category == '') {
            $catid = null;
        }else{
            $data['category'] = Service::where('slug', $category)->firstOrFail();
            $catid = $data['category']->id;
        }
        $portfolios = Portfolio::with('service')->where('status', 'Public')
                            ->when($catid, function ($query, $catid) {
                                return $query->where('service_id', $catid);
                            })
                            ->orderBy('id', 'DESC')->paginate(8);
        return PortfolioResource::collection($portfolios);
    }

    public function portfolioDetails($slug){
        $portfolioDetails = Portfolio::with('service')->where('slug', $slug)->first();
        return new PortfolioResource($portfolioDetails);
    }

    public function portfolioImages($slug){

        $portfolio = Portfolio::where('slug', $slug)->first();
        $id = $portfolio->id;
        $portfolioImage = PortfolioImage::where('portfolio_id', $id)->get();
        return PortfolioImageResource::collection($portfolioImage);
    }


    public function socialLinks(){
        $socialLinks = SocialLink::orderBy('id', 'DESC')->get();
        return SocialLinkResource::collection($socialLinks);
    }

    public function packages(){
        $packages = Package::where('status', 'Public')->orderBy('id', 'DESC')->get();
        return PackageResource::collection($packages);
    }

    public function teams(){
        $teams = Team::where('status', 'Public')->orderBy('id', 'DESC')->paginate(9);
        return TeamResource::collection($teams);
    }

    public function teamDetails($id){
        $teamDetails = Team::where('id', $id)->first();
        return new TeamResource($teamDetails);
    }

    public function faqs(){
        $faqs = Faq::where('status', 'Public')->orderBy('id', 'DESC')->get();
        return FaqResource::collection($faqs);
    }

    public function galleries(){
        $galleries = Gcategory::where('status', 'Public')->orderBy('id', 'DESC')->get();
        return GcategoryResource::collection($galleries);
    }

    public function galleryItems($id = null){

        if($id == null){
            $galleryItems = Gallery::where('status', 'Public')->orderBy('id', 'DESC')->get();
        }else{
            $galleryItems = Gallery::where('gcategory_id', $id)->where('status', 'Public')->orderBy('id', 'DESC')->get();
        }

        return GalleryResource::collection($galleryItems);
    }


    public function careersCategories(){
        $careersCategories = JobCategory::where('status', 'Public')->orderBy('id', 'DESC')->get();
        return JobCategoryResource::collection($careersCategories);
    }

    public function careers(Request $request){
        $category = $request->category;
        $catid = null;
        if ($category == '') {
            $catid = null;
        }else{
            $data['category'] = JobCategory::where('slug', $category)->firstOrFail();
            $catid = $data['category']->id;
        }
        $jobs = Job::with('job_category')->where('status', 'Public')
                            ->when($catid, function ($query, $catid) {
                                return $query->where('job_category_id', $catid);
                            })
                            ->orderBy('id', 'DESC')->paginate(6);
        return JobResource::collection($jobs);
    }

    public function careersDetails($slug){
        $careersDetails = Job::with('job_category')->where('slug', $slug)->first();
        return new JobResource($careersDetails);
    }

    public function careerApply(Request $request){

        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'file' => 'required',
        ]);

        $input = $request->all();

        if($request->hasFile('file')){{
            $file = $request->file('file');
            $pdf = Str::random().time().'.'.$file->getClientOriginalExtension();
            $upload_path = public_path('uploads');
            $file->move($upload_path, $pdf);
            $input['zipFile'] = $pdf;
         }}

        $application = new JobApplication();
        $application->fill($input)->save();

    }

    public function contactSubmit(Request $request){

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'message' => 'required',
            'subject' => 'required|string',
        ]);

        $cs = Setting::first();
        $contactemail = $cs->contactemail;
        $name = $request->name;
        $fromemail = $request->email;
        $number = $request->phone;
        $subject = $request->subject;
        $mail = new PHPMailer(true);
        $em = Emailsetting::first();

        if ($em->is_smtp == 'Activated') {
            try {
                $mail->isSMTP();
                $mail->Host       = $em->smtp_host;
                $mail->SMTPAuth   = true;
                $mail->Username   = $em->smtp_user;
                $mail->Password   = $em->smtp_pass;
                $mail->SMTPSecure = $em->email_encryption;
                $mail->Port       = $em->smtp_port;

                //Recipients
                $mail->setFrom($fromemail, $name);
                $mail->addAddress($contactemail);

                // Content
                $mail->isHTML(true);
                $mail->Subject = $subject;
                $mail->Body    = "Name: ".$name."<br> Email: ".$fromemail."<br> Phone: ".$number."<br> Message: ".$request->message;

                $mail->send();
            } catch (Exception $e) {
                // die($e->getMessage());
            }
        } else {
            try {
                //Recipients
                $mail->setFrom($fromemail, $name);
                $mail->addAddress($contactemail);


                // Content
                $mail->isHTML(true);
                $mail->Subject = $subject;
                $mail->Body    = "Name: ".$name."<br> Email: ".$fromemail."<br> Phone: ".$number."<br> Message: ".$request->message;

                $mail->send();
            } catch (Exception $e) {
                // die($e->getMessage());
            }
        }
    }

    public function quoteSubmit(Request $request){

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'subject' => 'required|string',
            'description' => 'required',
            'file' => 'nullable|mimes:zip,rar',
        ]);

        $quote = new Quote();

        $input = $request->all();

        if($request->hasFile('file')){
            $file = $request->file('file');
            $extension = $file->getClientOriginalExtension();
            $newfile = time().rand().'.'.$extension;
            $upload_path = public_path('uploads/');
            $file->move($upload_path, $newfile);

            $input['file'] = $newfile;
        }
        $quote->fill($input)->save();
    }

    public function bcategories(){
        $blogs = Bcategory::where('status', 'Public')->orderBy('id', 'DESC')->get();
        return BlogCategoryResource::collection($blogs);
    }

    public function blogs(Request $request){

        $category = $request->category;
        $search = $request->search;
        $catid = null;
        if ($category == '') {
            $catid = null;
        }else{
            $data['category'] = Bcategory::where('slug', $category)->firstOrFail();
            $catid = $data['category']->id;
        }
        $blogs = Blog::where('status', 'Public')
                            ->when($catid, function ($query, $catid) {
                                return $query->where('bcategory_id', $catid);
                            })
                            ->when($search, function ($query, $search) {
                                return $query->where('title', 'like', '%'.$search.'%');
                            })
                            ->orderBy('id', 'DESC')->paginate(6);

        return BlogResource::collection($blogs);
    }

    public function blogDetails($slug){
        $blogDetails = Blog::where('slug', $slug)->first();
        return new BlogResource($blogDetails);
    }
    public function clients(){
        $clients = Client::where('status', 'Public')->orderBy('id', 'DESC')->get();
        return ClientResource::collection($clients);
    }

    public function newslettersSubmit(Request $request){

        $request->validate([
            'email' => [
                'required',
                'unique:newsletters,email',
                'max:255'
            ],
        ]);
        $newsletter = new Newsletter();
        $newsletter->fill($request->all())->save();

    }

}











