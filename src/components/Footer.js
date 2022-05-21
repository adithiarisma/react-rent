import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="footer-2 bg-light pt-6 md:pt-12">
      <div class="container px-4 mx-auto">
        <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div class="footer-info lg:w-1/3 md:px-4">
            <p class="text-gray-700">Jalan Suroyo No.161 Malangan Kota</p>
            <p class="text-gray-700">Probolinggo 672000</p>
            <div class="mt-4">
              <p class="text-gray-700">Binar@gmal.com</p>
            </div>
            <div class="mt-4">
              <p class="text-gray-700">081-22-3-23332</p>
            </div>
          </div>

          <div class="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div class="sm:flex">
              <div class="sm:flex-1">
                <div>
                  <a href="#" class="text-gray-700 py-1 block hover:underline">
                    Our Service
                  </a>
                  <a href="#" class="text-gray-700 py-1 block hover:underline">
                    Why Us
                  </a>
                  <a href="#" class="text-gray-700 py-1 block hover:underline">
                    Testimonial
                  </a>
                  <a href="#" class="text-gray-700 py-1 block hover:underline">
                    FAQ
                  </a>
                </div>
              </div>
              <div class="sm:flex-1 mt-4 sm:mt-0">
                <div className="p-2 bg-[#0D28A6] inline-block rounded-full mr-4">
                  <FiFacebook size={20} color="#ffffff" />
                </div>
                <div className="p-2 bg-[#0D28A6] inline-block rounded-full mr-4">
                  <FiInstagram size={20} color="#ffffff" />
                </div>
                <div className="p-2 bg-[#0D28A6] inline-block rounded-full mr-4">
                  <FiTwitter size={20} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 class="text-lg text-gray-700font-medium mb-4">Copyright Binar 2022</h5>
            <button class="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Subscribe</button>
          </div>
        </div>
      </div>

      <div class="border-t border-solid border-gray-900 mt-4 py-4">
        <div class="container px-4 mx-auto">
          <div class="md:flex md:-mx-4 md:items-center">
            <div class="md:flex-1 md:px-4 text-center md:text-left">
              <p class="text-gray-700">
                &copy; <strong>Rent Car</strong>
              </p>
            </div>
            <div class="md:flex-1 md:px-4 text-center md:text-right">
              <a href="#" class="py-2 px-4 text-gray-700 inline-block hover:underline">
                Terms of Service
              </a>
              <a href="#" class="py-2 px-4 text-gray-700 inline-block hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
