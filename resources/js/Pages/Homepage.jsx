export default function Homepage({ user }) {
    return (
        <div className="bg-gray-300 min-h-screen">

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    <nav className="bg-gray-800 p-2 font-bold text-2xl font-mono text-white flex items-center gap-4">
        
        <h1 className="bg-gray-600 p-2 rounded-lg">Hello, {user ? user.name : 'Guest'}!</h1>
        <a href="/">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Homepage</button>
        </a>
        <a href="bank">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Bank</button>
        </a>
        <a href="profile">
            <button className="ml-5 p-2 bg-gray-700 hover:bg-gray-500 transition duration-300 rounded-lg hover:underline">Profile</button>
        </a>
    </nav>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

    </div>)
}