import { useState } from 'react';
import { router } from '@inertiajs/react';

/* ----------------------------------------------------------------------------------------------------------------------------------------- */

export default function Homepage({ user, transactions }) {
    const [deposit, setDeposit] = useState('');
    const [withdraw, setWithdraw] = useState('');
    return (
        <div className="bg-neutral-200 min-h-screen">

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <nav className="bg-slate-900 p-2 font-bold text-2xl font-mono text-white flex items-center gap-4">

        <h1 className="bg-slate-200 text-black p-1.5 rounded-lg">Hello, {user ? user.name : 'Guest'}!</h1>

        {/* --- Homepage --- */}
        <a href="/">
            <button className="ml-5  p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:scale-105 transition-smooth duration-300 rounded-lg ">Homepage</button>
        </a>
        {/* --- Bank --- */}
        <a href="bank">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:scale-105 transition-smooth duration-300 rounded-lg ">Bank</button>
        </a>
        {/* --- Calculator --- */}
        <a href="calculator">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:scale-105 transition-smooth duration-300 rounded-lg ">Calculator</button>
        </a>
        {/* --- Notes --- */}
        <a href="notes">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:scale-105 transition-smooth duration-300 rounded-lg ">Notes</button>
        </a>
        {/* --- Profile --- */}
        <a href="profile">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:scale-105 transition-smooth duration-300 rounded-lg ">Profile</button>
        </a>

    </nav>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <div className="block justify-center mx-auto w-96">
        <div>

    {/* --- Balance --- */}

            <h1 className="font-bold ml-5 w-40 my-6 bg-slate-400 text-center p-2 rounded-lg">Your current balance is {user.balance}€</h1> 
        
    {/* --- Deposit --- */}

            <input 
                className="font-bold ml-5 bg-zinc-200 text-center"
                type="number" 
                value={deposit}
                placeholder="Enter a number"
                onChange={(e) => setDeposit(e.target.value)} 
            />

            <button 
            onClick={() => router.post('/deposit', { amount: deposit })} 
            className="font-bold ml-5 bg-[#2dab18] p-2 rounded-lg hover:bg-[#2c8e1b] transition duration-300"> 
            Deposit! 
            </button> 
            <br /> <br /> 
            
    {/* --- Withdraw --- */}

            <input 
                className="font-bold ml-5 bg-zinc-200 text-center"
                type="number" 
                value={withdraw} 
                placeholder="Enter a number"
                onChange={(e) => setWithdraw(e.target.value)} 
            />
            <button 
                onClick={() => router.post('/withdraw', { amount: withdraw })}
                className="font-bold ml-5 bg-[#cf341f] p-2 rounded-lg hover:bg-zinc-500 hover:bg-[#ac3222] transition duration-300"> 
                Withdraw! 
            </button>
        </div>

    {/* --- History --- */}
        
        <div className="font-bold font-mono ml-5 my-4">
            <nav className="flex bg-gray-400 p-2">
                <h2 className="mr-3 text-xl p-2 text-center">Transaction History</h2>
                <button
                    onClick={() => router.delete('/clear-history')} 
                    className="bg-gray-400 rounded-xl border-2 border-gray-600 hover:bg-gray-500 transition duration-300 p-1">
                        Clear History
                </button>
            </nav>

            {transactions.map((transaction) => (
                <p className="bg-slate-400 w-auto text-center my-1 p-1"
                 key={transaction.id}>
                    {transaction.type} - {transaction.amount}€
                </p>
            ))}
        </div>
    </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
    </div>)
}