import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);

  return (
    <nav class="nav">
      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none mt-3 mb-3" >
          <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
            Our Service
          </a>
        </li>

        <li class="border-t md:border-none mt-3 mb-3">
          <a href="/about/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
            Why Us?
          </a>
        </li>

        <li class="border-t md:border-none mt-3 mb-3">
          <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
            Testimonial
          </a>
        </li>

        <li class="border-t md:border-none mt-3 mb-3">
          <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
            FAQ
          </a>
        </li>

        <li class="border-t md:border-none mt-3 mb-3 mr-10">
          <a
            href="#"
            class="block md:inline-block px-4 py-3 no-underline text-white  leading-none border rounded border-dark bg-green-500 hover:text-teal-500 mt-4 lg:mt-0 ml-3"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
