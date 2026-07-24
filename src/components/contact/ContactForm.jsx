import Container from "../shared/Container";

export default function ContactForm() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="text-center text-4xl font-bold">Send Me a Message</h2>

          <form className="mt-10 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
