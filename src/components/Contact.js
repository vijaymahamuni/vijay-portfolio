import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          console.log("SUCCESS!", response.status, response.text);
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
    <div className="bg-[#0a192f] h-[87.5vh] text-white">
      <div className="mx-auto w-9/12 pt-12 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Contact</h1>
          <h1 className="text-gray-400 mt-4">
            Get in touch or shoot me an email directly on
            vijaysethu0101@gmail.com
          </h1>
          <div className="text-white">
            <div className="mt-10">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0a192f] p-2 w-10/12 font-bold rounded-md"
                style={{ border: "0.5px solid gray", Opacity: "0.1" }}
              />
            </div>

            <div className="mt-10">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0a192f] p-2 w-10/12 font-bold rounded-md"
                style={{ border: "0.5px solid gray", Opacity: "0.1" }}
              />
            </div>
            <div className="mt-10">
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#0a192f] p-2 w-10/12 font-bold rounded-md"
                style={{ border: "0.5px solid gray", Opacity: "0.1" }}
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
            <div className="mt-10 cursor-pointer" onClick={backToHome}>
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
        <div>
          <div className="mt-4">
            <p className="font-bold text-xl">Email</p>
            <p className="mt-3 text-lg  text-blue-400 cursor-pointer">
              vijaysethu0101@gmail.com
            </p>
          </div>
          <div className="mt-12">
            <p className="font-bold text-xl">Address</p>
            <p className="mt-3 text-lg text-blue-400">Chennai</p>
          </div>
          <div className="mt-12">
            <p className="font-bold text-xl">Social</p>
            <div className="flex md:justify-start">
              <h1 className="mr-5 mt-6 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
                <LinkedInIcon
                  fontSize="large"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/vijaymahamuni",
                      "_blank"
                    );
                  }}
                />
              </h1>
              <h1 className="mr-5 mt-6 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
                <InstagramIcon
                  fontSize="large"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/the_vijay11",
                      "_blank"
                    );
                  }}
                />
              </h1>
              <h1 className="mr-5 mt-6 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
                <GitHubIcon
                  fontSize="large"
                  onClick={() => {
                    window.open("https://github.com/vijaymahamuni", "_blank");
                  }}
                />
              </h1>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
