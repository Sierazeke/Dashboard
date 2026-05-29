export default function Homepage({ user }) {
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
        
    </div>)
}