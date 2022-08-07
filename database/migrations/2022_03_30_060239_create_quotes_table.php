<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('phone', 255)->nullable();
            $table->string('country', 255)->nullable();
            $table->string('budget', 255)->nullable();
            $table->string('skypeid', 255)->nullable();
            $table->string('subject', 255)->nullable();
            $table->string('file', 255)->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('status')->default(0)->comment('0-pending, 1-prcessing, 2-completed, 3-rejected');
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
        Schema::dropIfExists('quotes');
    }
}
