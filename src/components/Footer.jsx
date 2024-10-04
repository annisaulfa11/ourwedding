import logo from "../assets/ourwedding.png";
export default function Footer() {
  return (
    <>
      <footer className="flex flex-col lg:px-20 py-10 bg-white">
        <div className="mx-auto flex flex-col lg:flex-row  items-center lg:items-start space-y-8 lg:gap-x-24 lg:space-y-0">
          <div className="text-center lg:text-left lg:w-2/3 mx-5">
            <div className="flex lg:justify-start justify-center items-center mb-4 ">
              <img
                src={logo}
                alt="OurWedding"
                className="w-12"
              />
              <h2 className="text-primary text-xl font-thin ml-3">OurWedding</h2>
            </div>
            <p className="text-gray-600 mb-4">
            Your Trusted Partner in Creating Beautiful Digital Wedding Invitations. Let Us Help You Make Your Special Day Even More Memorable.            </p>
            <div className="flex justify-center lg:justify-start">
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/3 lg:pt-3">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Template Collection
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left lg:w-1/3 lg:pt-3">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Help/FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left lg:w-1/3 lg:pt-3">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Social Media
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-500">
          &copy; Copyright powered by{" "}
          <a href="#" className="text-primary font-thinhover:underline">
            OurWedding
          </a>
        </div>
      </footer>
    </>
  );
}
