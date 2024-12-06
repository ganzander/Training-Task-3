import React from "react";
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 px-4 sm:px-8 pb-10">
      <div className="w-full px-0 sm:px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-4">
          {/* Text Links */}
          <div className="space-y-4">
            <nav className="space-y-2">
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/about-us"
              >
                About us
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/about-founder"
              >
                About Founder
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/contact"
              >
                Contact us
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/team"
              >
                Team
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/locations"
              >
                Locations
              </a>
            </nav>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <nav className="space-y-2">
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/faq"
              >
                FAQ
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/terms"
              >
                Terms & Conditions
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/careers"
              >
                Careers
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/solutions"
              >
                Solutions
              </a>
              <a
                className="block hover:text-gray-300 transition-colors text-[15px] sm:text-[20px] text-center lg:text-left"
                href="/process"
              >
                Our Process
              </a>
            </nav>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8a8a8a] text-[15px] sm:text-[20px] text-center lg:text-left">
              Get In Touch
            </h3>
            <p className="text-white w-[100%] lg:w-[80%] text-[15px] sm:text-[20px] text-center lg:text-left">
              Taking seamless key performance indicators offline to maximise the
              long tail.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <img src="/facebook.png" alt="Facebook" className="h-8 w-8" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <img src="/youtube.png" alt="YouTube" className="h-8 w-8" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <img src="/twitter.png" alt="Twitter" className="h-8 w-8" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 flex justify-center lg:justify-end">
            <img
              src="https://s3-alpha-sig.figma.com/img/6ecc/e053/9f21549897d8de2098d986e07aca70d3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-iMrWIHSWx3VZ1HYWEwe~EWTzjnYye4stTNp~WQu7aLpZj4RrgtCQSxZw~w0TQnw4QlYFLJs4YT9T6YbP7ccPzC41kHj~KDQJutzHzZpdK3WCFXOkAjTip11gr5K2nyycHguOdZVN9Z~0r22Nej6tUgFYkoMUbH7hkPOJXf0G8432NLh7cBJjwxDfFZE-eL6ba9Wj7sUY5KDeAorro6yCYESHvvmUSX4R7uIOZu0AHCrWx8ly0etdu3g~MZA4P~Iex8NET0twMlR5SPq1pq97A8DE~VM7Cor9I0whL74g~mG-lGGWusGrhC5aZqr7ikjKxp3oJ3HAJXqXQd2lyyjg__"
              alt="Footer Gif"
              className="w-[250px] h-[250px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
