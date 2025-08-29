'use client';

import { useState } from "react";

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] border-b-4 border-[#8EF27E] p-[20px_24px_16px_30px] lg:rounded-[0px_0px_0px_0px] rounded-[12px_12px_12px_12px] cursor-pointer mb-10 bg-[rgba(255,255,255,0.18)]" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h2 className="text-[1.25rem] font-light pr-2 mr-1 text-left text-white">{question}</h2>
        <span className="text-[2rem] font-bold text-[#8EF27E]">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-4 text-[0.85rem] lg:text-base lg:px-[2%] text-justify text-white">{answer}</p>}
    </div>
  );
}
