import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PersonIcon, EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";

function Contact() {
  const formRef = useRef();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="dark:bg-black min-h-screen flex items-center p-1">
      <section className="mx-auto w-full lg:w-11/20 px-6">
        <div className="flex flex-col gap-10 w-full items-center">
        <p className="text-red-600 text-lg">Message service is currently down so don't send any messages</p>
          {/* Header */}
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              contact.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Have something to share or discuss? Drop a message below or reach out directly.
            </p>

            {/* Phone */}
            <p className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <MobileIcon />
              <span className="font-medium">+91 7019065181</span>
            </p>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className="flex flex-col gap-6 w-full"
            onSubmit={handleOnSubmit}
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <PersonIcon /> Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full rounded-lg px-4 py-2.5
                             bg-white dark:bg-neutral-900
                             border border-gray-300 dark:border-gray-700
                             text-gray-900 dark:text-gray-100
                             focus:outline-none focus:ring-2
                             focus:ring-gray-900 dark:focus:ring-gray-100"
                  required
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <EnvelopeClosedIcon /> Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg px-4 py-2.5
                             bg-white dark:bg-neutral-900
                             border border-gray-300 dark:border-gray-700
                             text-gray-900 dark:text-gray-100
                             focus:outline-none focus:ring-2
                             focus:ring-gray-900 dark:focus:ring-gray-100"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Share your thoughts..."
                className="w-full rounded-lg px-4 py-2.5 resize-none
                           bg-white dark:bg-neutral-900
                           border border-gray-300 dark:border-gray-700
                           text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2
                           focus:ring-gray-900 dark:focus:ring-gray-100"
                required
              />
            </div>

            {/* Consent */}
            <p className="text-xs text-gray-500 dark:text-gray-500">
              By submitting this message, I am willing to share my name, email,
              and thoughts with the site owner.
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-fit px-6 py-2.5 rounded-lg text-sm font-medium
                         bg-gray-900 text-white
                         dark:bg-gray-100 dark:text-black
                         hover:opacity-90 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;