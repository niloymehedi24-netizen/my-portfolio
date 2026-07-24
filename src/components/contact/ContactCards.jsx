import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";

import Container from "../shared/Container";

const contacts = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "niloymehedi24@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+880 1605954027",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn",
    value: "linkedin.com/in/mehedi-niloy",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-slate-900 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 transition-colors duration-300 group-hover:bg-blue-500">
                  <Icon
                    size={28}
                    className="text-blue-400 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 break-all text-sm text-slate-400">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
