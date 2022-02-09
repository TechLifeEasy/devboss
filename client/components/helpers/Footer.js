import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 ">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block  text-base text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://github.com/TechLifeEasy/devboss"
            target="_blank"
            className="hover:underline">
            Devboss™
          </a>
          . All Rights Reserved. Build with love ❤️ by <a href="">Zeel</a>,{" "}
          <a href="">Dhruvil</a> and <a href="">Barun</a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
