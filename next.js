import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moksha Fest - NSUT</title>
      </Head>
      
      {/* Hero Section */}
      <header className="bg-black text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Moksha'25</h1>
        <p className="text-xl mt-4">Experience the Best Fest at NSUT</p>
      </header>
      
      {/* Timeline Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Moksha Timeline</h2>
        <div className="flex justify-center space-x-4 overflow-auto">
          {[2003, 2007, 2010, 2014, 2018, 2022, 2023].map((year) => (
            <div key={year} className="p-4 bg-white shadow-md rounded-lg text-center">
              <p className="text-lg font-semibold">{year}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            "Accommodation",
            "Mini-fests",
            "Category",
            "Dress Code",
            "Eatables",
            "Scoring",
            "Entry",
          ].map((faq) => (
            <div key={faq} className="p-4 border-b">
              <h3 className="text-xl font-semibold">{faq}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Us */}
      <footer className="py-10 bg-black text-white text-center">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>Netaji Subhas University Of Technology, Dwarka, Delhi, 110078</p>
      </footer>
    </div>
  );
}
