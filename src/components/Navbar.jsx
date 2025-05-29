function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Web Design</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
