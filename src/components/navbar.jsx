import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  const links = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
  ];
  const loseActiveFocus = () => {
    const elem = document.activeElement;
    if (elem) elem.blur();
  };

  const LinkItem = (title, to, location) => {
    const activeClasses = location === to ? "bg-secondary text-base-300" : "";
    return (
      <li
        key={title}
        onClick={loseActiveFocus}
        className={`rounded-md mx-3 ${activeClasses}`}
      >
        <Link to={to} className="text-center inline">
          {title}
        </Link>
      </li>
    );
  };
  return (
    <div className="fixed z-10 navbar bg-base-300">
      <div className="flex-none">
        <div className="dropdown md:w-0 visible md:invisible">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-50"
          >
            {links.map(({ title, to }) => LinkItem(title, to, location))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Kaine Binch</a>
      </div>
      <ul className="flex-none menu menu-horizontal invisible md:visible">
        {links.map(({ title, to }) => LinkItem(title, to, location))}
      </ul>
    </div>
  );
};

export default Navbar;
