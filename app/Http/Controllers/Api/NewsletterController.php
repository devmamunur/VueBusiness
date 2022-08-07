<?php

namespace App\Http\Controllers\Api;

use App\Models\Newsletter;
use App\Models\Emailsetting;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use App\Http\Controllers\Controller;
use App\Http\Resources\Newsletter\NewsletterResource;

class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newsletters = Newsletter::orderBy('id', 'DESC')->paginate(10);
        return NewsletterResource::collection($newsletters);
    }


    public function mailsubscriber(Request $request){

        $request->validate([
            'subject' => 'required',
            'message' => 'required'
          ]);
          $sub = $request->subject;
          $msg = $request->message;

          $subscs = Newsletter::all();
          $be = Emailsetting::first();

          $mail = new PHPMailer(true);

          if ($be->is_smtp == 'Activated') {
            try {


                $mail->isSMTP();
                $mail->Host       = $be->smtp_host;
                $mail->SMTPAuth   = true;
                $mail->Username   = $be->smtp_user;
                $mail->Password   = $be->smtp_pass;
                $mail->SMTPSecure = $be->email_encryption;
                $mail->Port       = $be->smtp_port;

                //Recipients
                $mail->setFrom($be->from_email, $be->from_name);

                foreach ($subscs as $key => $subsc) {
                    $mail->addAddress($subsc->email);
                }

            } catch (Exception $e) {
                // die($e->getMessage());
            }
        } else {
            try {

                //Recipients
                $mail->setFrom($be->from_email, $be->from_name);
                foreach ($subscs as $key => $subsc) {
                    $mail->addAddress($subsc->email);     // Add a recipient
                }

            } catch (Exception $e) {
                // die($e->getMessage());
            }
        }

        $mail->isHTML(true);
        $mail->Subject = $sub;
        $mail->Body    = $msg;

        $mail->send();

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
        $subscriber = Newsletter::find($id);
        $subscriber->delete();
    }

    public function multipleDelete(Request $request)
    {

        foreach($request->all() as $item){
            $id = $item['id'];
            $subscriber = Newsletter::find($id);
            $subscriber->delete();
        }

    }
}
