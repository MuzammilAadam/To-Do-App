const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-white text-2xl font-mono font-bold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            iTask
          </span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-slate-300 font-medium">
          <li onClick={() => alert("You have clicked Home")} className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li onClick={() => alert("You have clicked Features")} className="hover:text-cyan-400 cursor-pointer">Features</li>
          <li onClick={() => alert("You have clicked Pricing")} className="hover:text-cyan-400 cursor-pointer">Pricing</li>
          <li onClick={() => alert("You have clicked About")} className="hover:text-cyan-400 cursor-pointer">About</li>
          <li onClick={() => alert("You have clicked Contact")} className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>

        {/* Call to Action */}
        <button onClick={() => alert("Get Started clicked")} className="hidden md:block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition transform">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
