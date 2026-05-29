export default function Profiles({ user }) {
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

    <div className="flex items-center flex-col mt-10 gap-3">
        <div className="bg-neutral-300 w-1/3 px-4 py-2 mb-5 text-xl">
            <h1 className="font-bold">Username: <span className="underline decoration-slate-700">{user.name}</span></h1>
            <p>E-Mail: {user.email}</p>
            <p>Current Balance: {user.balance}€</p>
            <p>User ID: {user.id}</p>
        </div>
        <img className="w-1/2" src="https://imgs.search.brave.com/BF27SbH9q01MS3SzPoI_UUgdxlpeVbC02T82crM3Dts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEyLzUw/LUZ1bm55LUFuaW1h/bC1QaWN0dXJlcy1U/aGF0LVlvdS1OZWVk/LUluLVlvdXItTGlm/ZS04LmpwZz9maXQ9/NzAwLDQ2Nw" alt="" />
    </div>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    </div>);
}