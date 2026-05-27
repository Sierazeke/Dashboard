import { useState } from 'react';
import { router } from '@inertiajs/react';

/* ----------------------------------------------------------------------------------------------------------------------------------------- */

export default function Homepage({ user, transactions }) {
    const [deposit, setDeposit] = useState('');
    const [withdraw, setWithdraw] = useState('');
    return (
        <div className="bg-gray-300 min-h-screen">

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <nav className="bg-gray-800 p-2 font-bold text-2xl font-mono text-white flex items-center gap-4">

        <h1 className="bg-gray-600 p-2 rounded-lg">Hello, {user ? user.name : 'Guest'}!</h1>

        {/* --- Homepage --- */}
        <a href="/">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Homepage</button>
        </a>
        {/* --- Bank --- */}
        <a href="bank">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Bank</button>
        </a>
        {/* --- Calculator --- */}
        <a href="calculator">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Calculator</button>
        </a>
        {/* --- Notes --- */}
        <a href="notes">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Notes</button>
        </a>
        {/* --- Profile --- */}
        <a href="profile">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Profile</button>
        </a>

    </nav>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <div>

    {/* --- Balance --- */}

            <h1 className="font-bold ml-5 w-40 my-6 bg-gray-400 text-center ">Your current balance is {user.balance}€</h1> 
        
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
            className="font-bold ml-5 bg-zinc-400 p-2 rounded-lg hover:bg-zinc-500 transition duration-300"> 
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
                className="font-bold ml-5 bg-zinc-400 p-2 rounded-lg hover:bg-zinc-500 hover:bg-zinc-500 transition duration-300"> 
                Withdraw! 
            </button>
        </div>

    {/* --- History --- */}
        
        <div className="font-bold font-mono ml-5 my-4">
            <nav className="flex bg-gray-400 w-1/4 p-2">
                <h2 className="mr-3 text-xl p-2 text-center">Transaction History</h2>
                <button
                    onClick={() => router.delete('/clear-history')} 
                    className="bg-gray-400 rounded-xl border-2 border-gray-600 hover:bg-gray-500 transition duration-300 p-1">
                        Clear History
                </button>
            </nav>

            {transactions.map((transaction) => (
                <p className="bg-slate-400 w-1/4 text-center my-1 p-1"
                 key={transaction.id}>
                    {transaction.type} - {transaction.amount}€
                </p>
            ))}
        </div>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
    </div>)
}