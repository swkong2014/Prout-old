<?php

namespace App\Http\Controllers;

use App\Group;
use App\GroupMembership;
use App\User;
use Illuminate\Http\Request;

class GroupsController extends Controller
{
    //
    public function index()
    {
        return Group::all();
    }

    public function joinedGroups(User $user)
    {
        return
//            Group::findMany(
                $user->Memberships()->get()->map(function($membership){
                    return $membership;
                });
//            );
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'group_name' => 'required|unique:groups|max:255',
            'group_desc' => 'required',
            'category' => 'required',
        ]);
        $group = Group::create($request->all());

        return response()->json($group, 201);

    }

    public function update(Request $request, Group $group)
    {
        $group->update($request->all());

        return response()->json($group, 200);
    }

    public function delete(Group $group)
    {
        $group->delete();

        return response()->json(null, 204);
    }

    public function join(Request $request)
    {
        $this->validate($request, [
            'group_id' => 'required',
            'user_id' => 'required'
        ]);

        $group = GroupMembership::create($request->all());

        return response()->json($group, 201);

    }

    public function leaveGroup(Request $request){
        $this->validate($request, [
            'group_id' => 'required',
            'user_id' => 'required'
        ]);

        GroupMembership::where('user_id', '=', $request['user_id'])
            ->where('group_id', '=', $request['group_id'])
            ->first()->delete();

        return response()->json(null, 204);

    }

}
