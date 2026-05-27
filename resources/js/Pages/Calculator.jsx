import { useState, useEffect } from 'react';

/* ----------------------------------------------------------------------------------------------------------------------------------------- */

export default function Calculator({ user }) {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        try {
            setResult(eval(expression));
        } catch {
            // 
        }
    }, [expression]);


    function CalcButton({ label, onClick }) {
        return (
            <button 
                onClick={onClick}
                className="bg-zinc-500 font-bold ml-2 text-white w-20 h-14 mr-1 mt-1 rounded-lg hover:bg-zinc-600">
                {label}
            </button>
        );
    }
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

    <div className="m-4">

        <div className="p-2 bg-gray-400 w-1/4">{expression || '0'}</div>

        <div className="p-2 bg-gray-400 w-1/4">= {result}</div>

        <div>
            <CalcButton label="7" onClick={() => setExpression(expression + '7')}/>
            <CalcButton label="8" onClick={() => setExpression(expression + '8')}/>
            <CalcButton label="9" onClick={() => setExpression(expression + '9')}/>
            <CalcButton label="/" onClick={() => setExpression(expression + '/')}/>
        </div>

        <div>
            <CalcButton label="4" onClick={() => setExpression(expression + '4')}/>
            <CalcButton label="5" onClick={() => setExpression(expression + '5')}/>
            <CalcButton label="6" onClick={() => setExpression(expression + '6')}/>
            <CalcButton label="*" onClick={() => setExpression(expression + '*')}/>
        </div>

        <div>
            <CalcButton label="1" onClick={() => setExpression(expression + '1')}/>
            <CalcButton label="2" onClick={() => setExpression(expression + '2')}/>
            <CalcButton label="3" onClick={() => setExpression(expression + '3')}/>
            <CalcButton label="-" onClick={() => setExpression(expression + '-')}/>
        </div>

        <div>
            <CalcButton label="0" onClick={() => setExpression(expression + '0')}/>
            <CalcButton label="(" onClick={() => setExpression(expression + '(')}/>
            <CalcButton label="+" onClick={() => setExpression(expression + '+')}/>
            <CalcButton label=")" onClick={() => setExpression(expression + ')')}/>
        </div>

        
        <div>
            <CalcButton label="C" onClick={() => setExpression('')}/>
            <CalcButton label="=" onClick={() => setExpression(result)}/>
            <CalcButton label="." onClick={() => setExpression(expression + '.')}/>
            <CalcButton label="^" onClick={() => setExpression(expression + '**')}/>

        </div>

        <div className="mt-1 bg-zinc-400">
        </div>
    </div>



    </div>) 
}