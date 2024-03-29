import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarMenu({ menuState, toggleMenu }) {
  const [servicesOpen, setOpenServices] = useState(false);

  const toggleServices = () => {
    setOpenServices(!servicesOpen);
  };

  return (
    <nav
      aria-expanded={menuState}
      className={`uppercase pl-5 z-10 w-full md:max-w-max md:flex flex-col md:justify-center md:items-center md:flex-row bg-[#F5F5F5] md:bg-transparent text-primary h-[calc(100vh_-_64px)] md:h-12 fixed top-16 left-0 md:static pt-4 md:pt-0  ${
        menuState === true
          ? "animate-openMenu flex flex-col items-start"
          : menuState === false
          ? "animate-closeMenu md:block"
          : "hidden"
      }`}
    >
      <Link
        onClick={toggleMenu}
        href="#inicio"
        className="mb-4 md:mb-0 md:mr-4 h-fit"
      >
        <Image
          src="/icons-menu/home.svg"
          width="24"
          height="24"
          className="inline-block mr-1 md:hidden"
          alt="Ícono de una casa"
        />
        Inicio
      </Link>

      <button
        onClick={toggleServices}
        className={`uppercase ${
          servicesOpen
            ? "mb-4 md:mb-0 md:mr-4 h-fit font-bold md:font-normal"
            : ""
        } mb-4 md:mb-0 md:mr-4 h-fit`}
      >
        <Image
          src="/icons-menu/crystal-ball.svg"
          width="24"
          height="24"
          className="inline-block mr-1 md:hidden"
          alt="Ícono de una bola de cristal"
        />
        Servicios
        {servicesOpen ? (
          <Image
            src="/icons-menu/arrow-narrow-down.svg"
            width="24"
            height="24"
            className="inline-block md:hidden"
            alt="Ícono de una flecha apuntando hacia abajo"
          />
        ) : null}
      </button>
      {servicesOpen ? (
        <>
          <Link
            href="/servicios/carta-natal"
            className="pl-4 mb-4 md:pl-0 md:mb-0 md:mr-4"
            onClick={toggleMenu}
          >
            <Image
              src="/icons-menu/star.svg"
              width="14"
              height="14"
              className="inline-block mr-1 md:hidden"
              alt="Ícono de una estrella"
            />
            Lectura de Carta Natal
          </Link>
          <Link
            href="/servicios/tarot-evolutivo"
            className="pl-4 mb-4 md:pl-0 md:mb-0 md:mr-4"
            onClick={toggleMenu}
          >
            <Image
              src="/icons-menu/star.svg"
              width="14"
              height="14"
              className="inline-block mr-1 md:hidden"
              alt="Ícono de una estrella"
            />
            Tarot evolutivo
          </Link>
          <Link
            href="/servicios/revolucion-solar"
            className="pl-4 mb-4 md:pl-0 md:mb-0 md:mr-4"
            onClick={toggleMenu}
          >
            <Image
              src="/icons-menu/star.svg"
              width="14"
              height="14"
              className="inline-block mr-1 md:hidden"
              alt="Ícono de una estrella"
            />
            Revolución solar
          </Link>
        </>
      ) : null}

      <Link
        onClick={toggleMenu}
        href="#quien-soy"
        className="mb-4 md:mb-0 md:mr-4 h-fit"
      >
        <Image
          src="/icons-menu/user.svg"
          width="24"
          height="24"
          className="inline-block mr-1 md:hidden"
          alt="Ícono de una persona"
        />
        Quien soy
      </Link>

      <Link
        onClick={toggleMenu}
        href="#contacto"
        className="mb-4 md:mb-0 md:mr-4 h-fit"
      >
        <Image
          src="/icons-menu/messages.svg"
          width="24"
          height="24"
          className="inline-block mr-1 h-fit md:hidden"
          alt="Ícono de mensajes"
        />
        Contacto
      </Link>
    </nav>
  );
}
