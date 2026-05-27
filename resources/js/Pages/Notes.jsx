import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Notes({ user, notes }) {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

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

        {/* --- Header --- */}

        <div className="text-5xl font-bold m-6 p-2 bg-gray-400 text-center">
            <h1>Notes</h1>
        </div>

        {/* --- Body --- */}

        <div className="flex">
        {/* --- Title --- */}
            <input
            type="text" 
            value={title} 
            placeholder="Enter a title"
            onChange={(e) => setTitle(e.target.value)}/>

        {/* --- Comment --- */}
            <input
            type="text" 
            value={comment} 
            placeholder="Enter a comment"
            onChange={(e) => setComment(e.target.value)}/>
        </div>

        {/* --- Button --- */}
        <div>
            <button 
                onClick={() => router.post('/notes', {title: title, comment: comment})}
                className="">
                Submit 
            </button>
        </div>

        <div>
            {notes.map((note) => (
                <div key={note.id}>
                    <p>{note.title} - {note.comment}</p>
                    <button onClick={() => router.delete(`/notes/${note.id}`)}>Delete</button>
                </div>
            ))}
        </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        

    </div>) 
}