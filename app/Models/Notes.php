<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use app\Http\Controllers\NoteController;

class Notes extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'comment'
    ];
}
