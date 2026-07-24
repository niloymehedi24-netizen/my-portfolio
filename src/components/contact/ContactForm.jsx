"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../shared/Container";
import toast from "react-hot-toast";
import MotionWrapper from "../shared/MotionWrapper";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        },
      )

      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.");

        setLoading(false);

        form.current.reset();
      })

      .catch((error) => {
        console.log(error);

        toast.error("Failed to send message. Please try again.");

        setLoading(false);
      });
  };
  return (
    <section className="bg-slate-950 py-24">
      <MotionWrapper>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <h2 className="text-center text-4xl font-bold">
              Send Me a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-6">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Container>
      </MotionWrapper>
    </section>
  );
}
