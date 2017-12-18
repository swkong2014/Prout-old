<?php
/**
 * Created by PhpStorm.
 * User: wakka
 * Date: 18/12/2017
 * Time: 4:51 PM
 */
namespace App\Observers;


use App\Group;

class GroupObserver
{

    public function deleting(Group $group)
    {
        //
//        $group->Memberships()->delete()
        error_log("OK");
        foreach($group->Memberships() as $membership){
            $membership->delete();
        }
    }
}