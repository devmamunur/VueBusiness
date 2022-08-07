<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->integer('job_category_id')->nullable();
            $table->string('title', 255)->nullable();
            $table->string('slug', 255)->nullable();
            $table->string('position')->nullable();
            $table->string('company_name')->nullable();
            $table->integer('vacancy')->nullable();
            $table->string('deadline', 255)->nullable();
            $table->string('employment_status', 255)->nullable();
            $table->text('job_location', 255)->nullable();
            $table->text('salary')->nullable();
            $table->text('other_benefits')->nullable();
            $table->string('email', 255)->nullable();
            $table->text('job_responsibility')->nullable();
            $table->text('education_requirement')->nullable();
            $table->text('job_context')->nullable();
            $table->text('experience_requirement')->nullable();
            $table->text('additional_requirement')->nullable();
            $table->string('status', 10)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
