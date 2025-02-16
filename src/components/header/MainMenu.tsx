import Logo from "./Logo";

function MainMenu() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 shadow-md">
      {/* Logo a la izquierda */}
      <Logo />

      {/* Menú a la derecha */}
      <ul className="flex space-x-6 text-white font-semibold">
        <li className="hover:text-gray-300 transition-colors">
          <a href="/">Inicio</a>
        </li>
        <li className="hover:text-gray-300 transition-colors">
          <a href="/productos">Productos</a>
        </li>
        <li className="hover:text-gray-300 transition-colors">
          <a href="/servicios">Servicios</a>
        </li>
        <li className="hover:text-gray-300 transition-colors">
          <a href="/contacto">Contáctenos</a>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
