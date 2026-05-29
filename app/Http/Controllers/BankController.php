<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class BankController extends Controller
{
    // --- Deposit Money ---

    public function deposit(Request $request) {
        $request->validate([
            'amount' => 'required|numeric|min:1|max:1000'
        ]);
        $user = auth()->user();
        $user->balance = $user->balance + $request->input('amount');
        $user->save();
        Transaction::create([
            'user_id' => $user->id,
            'amount' => $request->input('amount'),
            'type' => 'Deposit'
        ]);

        sleep(1);
    }

    // --- Withdraw Money ---

    public function withdraw(Request $request) {
        $request->validate([
            'amount' => 'required|nu    meric|min:1|max:1000'
        ]);
        $user = auth()->user();
        if ($request->input('amount') > $user->balance) {
            abort(422, "Insufficient funds!");
        }
        $user->balance = $user->balance - $request->input('amount');
        $user->save();
            Transaction::create([
            'user_id' => $user->id,
            'amount' => $request->input('amount'),
            'type' => 'Withdraw'
        ]);

        sleep(2);
    }

    // --- Clear History ---

        public function clearHistory() {
            $user = auth()->user();
            Transaction::where('user_id', $user->id)->delete();
        }
        
}