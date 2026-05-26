export default function Profiles({ user }) {
    return (

    <div className="bg-gray-300 min-h-screen">

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

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
            
{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <h1 className="p-2 px-5 bg-gray-500 text-2xl font-bold">Username: {user.name}</h1>
    <p className="p-2 px-5 bg-gray-500 text-black">E-Mail: {user.email}</p>
    <p className="p-2 px-5 bg-gray-500 text-black">Current Balance: {user.balance}€</p>
    <p className="p-2 px-5 bg-gray-500 text-black">User ID: {user.id}</p>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <img src="https://imgs.search.brave.com/BF27SbH9q01MS3SzPoI_UUgdxlpeVbC02T82crM3Dts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEyLzUw/LUZ1bm55LUFuaW1h/bC1QaWN0dXJlcy1U/aGF0LVlvdS1OZWVk/LUluLVlvdXItTGlm/ZS04LmpwZz9maXQ9/NzAwLDQ2Nw" alt="" />
    </div>);
}