import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "juancatu25@gmail.com" },
    { logo: "logo-whatsapp", text: "3104063050" },
    {
      logo: "location",
      text: "localization",
    },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ug7wzd",
        "template_epvlyjo",
        form.current,
        "tgg9SRoWO7bXcuG5n"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-green-400">Me</span>
        </h3>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder="Your Name" name="user_name" />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>

          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-400 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
