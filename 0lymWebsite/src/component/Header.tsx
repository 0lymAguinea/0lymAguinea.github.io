import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const items = [
  {
    name: "About",
    value: "#about",
  },
  {
    name: "Career",
    value: "#career",
  },
  {
    name: "Projects",
    value: "#projects",
  },
  {
    name: "Contact",
    value: "#contact",
  },
];

interface NavItemsProps {
  className?: string;
}

function NavItems({ className }: NavItemsProps) {
  return (
    <nav className={`flex flex-col gap-4 text-3xl font-semibold ${className}`}>
      {items.map((item) => {
        return (
          <a
            href={item.value}
            key={item.value}
            className="lg:hover:text-primary focus:text-primary block w-fit lg:font-semibold lg:transition-colors lg:ease-in-out"
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalIcon = isModalOpen ? "x-white" : "menu";

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsModalOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <div className="lg:hidden">
      <button
        className="border-accent-primary block rounded-lg border p-2"
        onClick={toggleModal}
      >
        <img
          width={24}
          height={24}
          src={`${modalIcon}.svg`}
          className="block text-white"
          alt="Toggle modal"
        />
      </button>

      {isModalOpen
        ? createPortal(
            <div className="text-plain bg-dark absolute top-22.5 left-0 min-h-[calc(100%-90px)] w-full px-4">
              <NavItems />
            </div>,
            document.body,
          )
        : ""}
    </div>
  );
}

function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between p-5">
      <a href="/">
        <img width={150} height={150} src="/logo.png" />
      </a>

      <div>
        <Modal />

        <NavItems className="hidden lg:flex lg:flex-row" />
      </div>
    </header>
  );
}
export default Header;
