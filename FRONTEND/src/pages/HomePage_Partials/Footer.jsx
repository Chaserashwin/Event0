import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white w-full h-auto items-center p-6 md:px-14">
      Footer starts here
      <div className="flex flex-wrap border-t-2 border-gray-300 py-2">
        <div className="md:w-[43%] w-[100%] pl-0 p-3 md:pr-[120px]">
          Address
          <p className="justify text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            officia nostrum aliquam necessitatibus provident dolor explicabo
            quaerat dignissimos ex neque!
          </p>
        </div>
        <ul className="md:w-[23%] w-[50%] pl-0 p-3 md:pl-16 md:items-center">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Find Event</li>
          <li>Create Event</li>
        </ul>
        <ul className="md:w-[33%] w-[50%] pl-0 p-3 md:pl-20 md:items-center">
          <li>© 2024 Event0</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Help</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
