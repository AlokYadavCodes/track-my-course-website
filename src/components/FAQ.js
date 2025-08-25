"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// The Q&A data
const faqs = [
  {
    question: "Is Track My Course free?",
    answer: (
      <>
        Yes, Track My Course is completely free for everyone. Start tracking
        your YouTube playlists instantly.
      </>
    ),
  },
  {
    question: "Is Track My Course open source?",
    answer: (
      <>
        Yes! Track My Course is fully open source. You can view the code on{" "}
        <a
          href="https://github.com/AlokYadavCodes/track-my-course"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-red underline hover:opacity-80"
        >
          GitHub
        </a>{" "}
        and ⭐ it if you like.
      </>
    ),
  },
  {
    question: "How can I support Track My Course?",
    answer: (
      <>
        You can contribute code on{" "}
        <a
          href="https://github.com/AlokYadavCodes/track-my-course"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-red underline hover:opacity-80"
        >
          GitHub
        </a>{" "}
        or support financially through the{" "}
        <Link
          href="/contribute"
          className="text-primary-red underline hover:opacity-80"
        >
          Contribute
        </Link>{" "}
        page to help keep Track My Course free.
      </>
    ),
  },
  {
    question: "What about my privacy?",
    answer: (
      <>
        All your progress and data are stored locally in your browser. Track My
        Course never collects or shares personal information.
      </>
    ),
  },
  {
    question: "Which browsers support Track My Course?",
    answer: (
      <>
        Currently, the Track My Course extension works only on Google
        Chrome.
      </>
    ),
  },
  {
    question: "Are there other extensions doing the same?",
    answer: (
      <>
        No. Track My Course is the first and only extension that turns YouTube
        playlists into structured, trackable courses.
      </>
    ),
  },
  {
    question: "Are there other extensions we recommend?",
    answer: (
      <>
        We recommend{" "}
        <a
          href="https://unhook.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-red underline hover:opacity-80"
        >
          Unhook
        </a>{" "}
        for a distraction-free YouTube experience. It complements Track My
        Course and helps you stay focused.
      </>
    ),
  },
];

// Single FAQ item component
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-200 py-4">
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between text-left"
    >
      <span className="font-poppins text-lg font-medium text-gray-900">
        {question}
      </span>
      <ChevronDown
        size={24}
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="pt-4 text-base text-gray-600">{answer}</p>
      </div>
    </div>
  </div>
);

// FAQ section
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
          <p className="mt-6 text-center text-base text-gray-600">
            Can’t find your question? Feel free to{" "}
            <Link href="/contact" className="text-red-500 underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
