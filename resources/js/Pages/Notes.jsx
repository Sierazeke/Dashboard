import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Notes({ user, notes }) {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    return (

    <div className="bg-neutral-200 min-h-screen">

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <nav className="bg-slate-900 p-2 font-bold text-2xl font-mono text-white flex items-center gap-4">

        <h1 className="bg-slate-200 text-black p-1.5 rounded-lg">Hello, {user ? user.name : 'Guest'}!</h1>

        {/* --- Homepage --- */}
        <a href="/">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:p-2.5 transition-smooth duration-300 rounded-lg ">Homepage</button>
        </a>
        {/* --- Bank --- */}
        <a href="bank">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:p-2.5 transition-smooth duration-300 rounded-lg ">Bank</button>
        </a>
        {/* --- Calculator --- */}
        <a href="calculator">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:p-2.5 transition-smooth duration-300 rounded-lg ">Calculator</button>
        </a>
        {/* --- Notes --- */}
        <a href="notes">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:p-2.5 transition-smooth duration-300 rounded-lg ">Notes</button>
        </a>
        {/* --- Profile --- */}
        <a href="profile">
            <button className="ml-5 p-2 bg-slate-700 hover:bg-gray-600 hover:underline hover:p-2.5 transition-smooth duration-300 rounded-lg ">Profile</button>
        </a>

    </nav>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* --- Header --- */}

        <div className="flex flex-col text-center text-5xl font-bold m-6 p-2">
            <h1>Notes 🕮</h1>
        </div>

        {/* --- Body --- */}

        <div className="flex flex-col items-center my-1">
        {/* --- Title --- */}
            <input
            type="text" 
            value={title} 
            placeholder="Enter a title"
            className="bg-gray-200 text-center rounded"
            onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="flex flex-col items-center my-1">
        {/* --- Comment --- */}
            <input
            type="text" 
            value={comment} 
            placeholder="Enter a comment"
            className="bg-gray-200 text-center rounded"
            onChange={(e) => setComment(e.target.value)}/>
        </div>

        {/* --- Button --- */}
        <div className="flex flex-col items-center">
            <button 
                onClick={() => router.post('/notes', {title: title, comment: comment})}
                className="bg-emerald-400 py-2 px-4 m-1 rounded-lg transition duration-300 hover:bg-emerald-500">
                Submit 
            </button>
        </div>

        <div className="flex flex-col items-center">
            {notes.map((note) => (
                <div key={note.id}>
                    <p className="bg-gray-400 p-2 rounded-lg">Title:{note.title}, Comment:{note.comment}</p>
                    <button onClick={() => router.delete(`/notes/${note.id}`)} className="bg-red-700 text-white p-1.5 rounded-lg">Delete</button>
                </div>
            ))}
        </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        

    </div>) 
}