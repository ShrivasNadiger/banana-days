import bananaImg from "../assets/banana-days_logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-yellow-200 to-yellow-400 shadow-md p-4 rounded-b-2xl">
      <div className="flex items-center space-x-4">
        <img
          src={bananaImg}
          alt="Banana Days Logo"
          className="w-14 h-14 rounded-full border-2 border-yellow-600 shadow-md"
        />
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
          Banana-Days
        </h1>
      </div>
    </header>
  );
}

export default Header;
