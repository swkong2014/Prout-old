<?php

namespace App;
use App\GroupMembership;


use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    //
    protected $fillable = ['group_name','group_desc', 'category'];

    public function Memberships()
    {
        return $this->hasMany('App\GroupMembership');
    }
}
