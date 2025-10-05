import React, { useRef } from "react";
import { Element } from "react-scroll";
import { GrMail, GrLocation, GrPhone } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "emailjs-com";
import NotFoundPage from "./NotFoundPage";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8syisf7",   //  service ID
        "template_is7d7hr",  // template ID
        form.current,
        "IcUfMdnHUwehTmV41",  //  public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          alert(" Failed to send message. Try again!");
        }
      );
  };

  return (
    <Element
      name="contact"
      className="lg:h-[100vh] md:flex justify-between md:px-10 lg:px-20 lg:px-36 px-4 w-full bg-green-200 py-5"
    >
      {/* Left side details */}
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="text-[16px]">
          I am here to help you, you can <br /> contact me freely. Just drop the{" "}
          <br /> message or contact with social media
        </p>
        <h2 className="font-semibold flex items-center gap-2">
          <GrMail /> alfahadkhan715@gmail.com
        </h2>
        <h2 className="font-semibold flex items-center gap-2">
          <GrLocation /> Near Rungta College Bhilai, Chhattisgarh 490024
        </h2>
        <h2 className="font-semibold flex items-center gap-2">
          <GrPhone /> +91-6260379325
        </h2>
        <div className="links flex gap-5 py-4">
          <a className="md:text-4xl text-3xl hover:text-green-400" href={NotFoundPage}>
            <FaInstagram />
          </a>
          <a className="md:text-4xl text-3xl hover:text-green-400" href="https://www.linkedin.com/in/md-alfahad-b56a48344/">
            <FaLinkedin />
          </a>
          <a className="md:text-4xl text-3xl hover:text-green-400" href="https://github.com/MDAlfahad">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right side form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 justify-center items-center"
      >
        <input
          className="px-4 py-2 md:w-[400px] w-full outline-none border border-green-400 bg-transparent placeholder-black"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="px-4 py-2 md:w-[400px] w-full outline-none border border-green-400 bg-transparent placeholder-black "
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="px-4 py-2 md:w-[400px] w-full outline-none border border-green-400 bg-transparent placeholder-black"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-green-400 w-full font-semibold border border-green-400 hover:bg-transparent hover:text-green-400 transition-all duration-300"
        >
          Send
        </button>
      </form>
    </Element>
  );
};

export default Contact;
