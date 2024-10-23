import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const sendMessages = () => {
    emailjs
      .send(
        "service_5jydapm", // Replace with your actual Service ID
        "template_diicbrn", // Replace with your actual Template ID
        {
          name,
          email,
          message,
        },
        "FF3Lg0iQLn4VfrfMo" // Replace with your actual Public Key
      )
      .then(
        (response) => {
          alert("Successfully Sent");
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };
  return (
    <div className="flex-grow bg-[#0a192f] text-white">
      <div className="mx-auto lg:w-9/12 lg:pt-12 max-md:h-[800px] lg:flex   lg:flex-row ">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:font-bold max-md:mt-2 max-md:text-center">
            Contact
          </h1>
          <h1 className="text-gray-400 mt-4 max-md:text-center">
            Get in touch or shoot me an email directly on
            vijaysethu0101@gmail.com
          </h1>
          <div className="max-md:text-center">
            <div className="mt-10 ">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0a192f] text-white p-2 w-10/12 font-bold rounded-md"
                style={{ border: "0.5px solid gray" }}
              />
            </div>
            <div className="mt-10">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0a192f] text-white p-2 w-10/12 font-bold rounded-md"
                style={{ border: "0.5px solid gray" }}
              />
            </div>
            <div className="mt-10">
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#0a192f] text-white p-2 w-10/12 h-24 font-bold rounded-md"
                style={{ border: "0.5px solid gray" }}
              />
            </div>
            <div className="mt-10 text-black">
              <button
                className="bg-[#e1e1e1] p-3 w-48 rounded-lg"
                onClick={sendMessages}
              >
                Send Message
              </button>
            </div>
            <div
              className="mt-10 cursor-pointer hidden md:hidden lg:flex"
              onClick={backToHome}
            >
              <p className="text-[#e1e1e1]">
                Go Back Home
                <span className="ml-6 inline-block animate-move-right">
                  <EastIcon />
                </span>
              </p>
              <style jsx>{`
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                @keyframes move-right {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(
                      8px
                    ); /* Adjust the distance as needed */
                  }
                }

                .animate-move-right {
                  animation: move-right 0.4s ease infinite alternate;
                }
              `}</style>
            </div>
          </div>
        </div>
        <div></div>
        <div className="lg:w-1/2 lg:pl-52 max-md:mt-2 max-md:ml-10  lg:mt-0">
          <div className="lg:mt-4">
            <p className=" lg:text-xl mt-6 ">Email</p>
            <p className="lg:mt-4 text-lg text-blue-400 cursor-pointer">
              vijaysethu0101@gmail.com
            </p>
          </div>
          <div className="lg:mt-12 md:mt-10">
            <p className=" lg:text-xl mt-4">Address</p>
            <p className="lg:mt-4 md:mt-1 text-lg text-blue-400">Chennai</p>
          </div>
          <div className="lg:mt-12 md:mt-4 ">
            <p className=" lg:text-xl mt-4">Mobile</p>
            <p className="lg:mt-4 md:mt-1 text-lg text-blue-400">
              +91 9384974729
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
