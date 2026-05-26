<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\BookController;

class Transaction extends Model
{
    protected $fillable = [
        'user_id',
        'amount',
        'type'
    ];
}
