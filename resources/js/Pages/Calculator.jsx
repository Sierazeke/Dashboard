import { useState, useEffect } from 'react';

/* ----------------------------------------------------------------------------------------------------------------------------------------- */

export default function Calculator({ user }) {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {

    });

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
        {/* Profile */}
        <a href="profile">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Profile</button>
        </a>

    </nav>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <div className="m-4">

        <div className="p-2 bg-gray-400 w-1/4">{expression || '0'}</div>

        <div className="text-2xl mt-2 bg-zinc-400 w-1/3 p-1 text-center">
            <button onClick={() => setExpression(expression + '7')} className="mx-10">7</button>
            <button onClick={() => setExpression(expression + '8')} className="mx-10">8</button>
            <button onClick={() => setExpression(expression + '9')} className="mx-10">9</button>
            <button onClick={() => setExpression(expression + '/')} className="mx-10">/</button>
        </div>
        <div className="text-2xl mt-1 bg-zinc-400 w-1/3 p-1 text-center">
            <button onClick={() => setExpression(expression + '4')} className="mx-10">4</button>
            <button onClick={() => setExpression(expression + '5')} className="mx-10">5</button>
            <button onClick={() => setExpression(expression + '6')} className="mx-10">6</button>
            <button onClick={() => setExpression(expression + '*')} className="mx-10">*</button>
        </div>
        <div className="text-2xl mt-1 bg-zinc-400 w-1/3 p-1 text-center">
            <button onClick={() => setExpression(expression + '1')} className="mx-10">1</button>
            <button onClick={() => setExpression(expression + '2')} className="mx-10">2</button>
            <button onClick={() => setExpression(expression + '3')} className="mx-10">3</button>
            <button onClick={() => setExpression(expression + '-')} className="mx-10">-</button>
        </div>
        <div className="text-2xl mt-1 bg-zinc-400 w-1/3 p-1 text-center">
            <button onClick={() => setExpression(expression + '0')} className="mx-10">0</button>
            <button onClick={() => setExpression(expression + '(')} className="mx-10">(</button>
            <button onClick={() => setExpression(expression + '+')} className="mx-10">+</button>
        </div>
        <div className="text-2xl mt-1 bg-zinc-400 w-1/3 p-1 text-center">
            <button onClick={() => setExpression('')} className="mx-10">C</button>
            <button onClick={() => setExpression(expression + ')')} className="mx-10">)</button>
            <button onClick={() => setResult('expression')} className="mx-10">=</button>
        </div>

        <div className="mt-1 bg-zinc-400">
        </div>
    </div>



    </div>) 
}