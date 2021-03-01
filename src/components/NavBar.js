import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="nav-bar">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Berin Karjala
          </NavLink>
          <NavLink
            to="/post"
            className="inflex-flex items-center py-3 cursive px-3 my-6 rounded text-blue-100 hover:text-green-800"
            activeClassName="text-white-100 bg-blue-700"
          >
            Social Media
          </NavLink>
          <NavLink
            to="/project"
            className="inflex-flex items-center py-3 cursive px-3 my-6 rounded text-red-100 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inflex-flex items-center py-3 cursive px-3 my-6 rounded text-red-100 hover:text-green-800"
            activeClassName="text-red-100 bg-green-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://facebook.com/berin.karjala"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/berin-karjala-90846842/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}