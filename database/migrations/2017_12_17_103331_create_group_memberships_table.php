<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupMembershipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_memberships', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->unique(['user_id', 'group_id']);  // note, this is a *primary* key
            $table->integer('user_id')->unsigned();
            $table->integer('group_id')->unsigned();
//            $table->foreign('user_id')->references('id')->on('users');
//            $table->foreign('group_id')->references('id')->on('groups');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
            $table->boolean('is_admin');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_memberships');
    }
}
