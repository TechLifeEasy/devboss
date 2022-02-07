import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://github.com/TechLifeEasy/devboss"
            target="_blank"
            class="hover:underline">
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
