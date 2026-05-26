<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BankController;
use App\Models\Transaction;

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'user' => auth()->user()
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/bank', function () {
        return Inertia::render('Bank', [
            'user' => auth()->user(),
            'transactions' => Transaction::where('user_id', auth()->user()->id)->get(),
        ]);
    });

    Route::get('/profile', function () {
        return Inertia::render('Profiles', [
            'user' => auth()->user()
        ]);
    });

    Route::post('/deposit', [BankController::class, 'deposit']);
    Route::post('/withdraw', [BankController::class, 'withdraw']);
    Route::delete('/clear-history', [BankController::class, 'clearHistory']);
});

require __DIR__.'/auth.php';