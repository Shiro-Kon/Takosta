
import React from 'react';

type SectionProps = {
  title: string;
  isOpen: boolean;
  toggleSection: () => void;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, isOpen, toggleSection, children }) => (
  <div className="-mb-2 md:mb-6">
    <div
      className="cursor-pointer font-semibold text-soft-sand flex justify-between items-center text-2xl md:text-3xl xl:text-2xl xxl:text-5xl select-none"
      onClick={toggleSection}
    >
      {title}
      <span className={`transform transition-transform duration-300 text-soft-sand/50 ${isOpen ? "rotate-180" : ""}`}>
        ▼
      </span>
    </div>
    <div
      className={`mt-6 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
    >
      {children}
    </div>
  </div>
);

export default Section;
