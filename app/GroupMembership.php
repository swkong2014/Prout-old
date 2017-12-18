<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupMembership extends Model
{
    //

    protected $fillable = ['user_id','group_id'];

    protected $attributes = [
        'is_admin' => 0
    ];


    public function Group()
    {
        return $this->hasOne('App\Group');
    }

    public function User()
    {
        return $this->hasOne('App\User');
    }
}
