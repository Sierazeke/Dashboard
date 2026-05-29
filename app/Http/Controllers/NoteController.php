<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Notes;

class NoteController extends Controller
{
    // --- Show All Posts ---
    public function show(Request $request) {
        return Inertia::render('Notes', [
            'user' => auth()->user(),
            'notes' => Notes::where('user_id', auth()->user()->id)->get()
        ]);
    }

    // --- Create A Post ---
    public function add(Request $request) {
        $request->validate([
            'title' => 'required',
            'comment' => 'required'
        ]);
        $user = auth()->user();
        Notes::create([
            'user_id' => $user->id,
            'title' => $request->input('title'),
            'comment' => $request->input('comment'),
        ]);
    }

    // --- Delete A Post ---
    public function delete($id) {
        $user = auth()->user();
        Notes::where('id', $id)->where('user_id', $user->id)->delete();
    }

    // --- Update A Post ---
    public function update(Request $request, $id) {
        $user = auth()->user();
        Notes::where('id', $id)->where('user_id', $user->id)->update([
            'title' => $request->input('title'),
            'comment' => $request->input('comment'),
        ]);
    }
}