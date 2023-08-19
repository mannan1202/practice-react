import { useEffect, useState } from 'react';

export default function Accordian({
  children,
  title,
  id,
  active = false,
}) {
  const [accordianOpen, setAccordianOpen] = useState(false);
  useEffect(() => {
    setAccordianOpen(active);
  }, [active]);
  return (
    <>
      <div className="py-2">
        <h2>
          <button
            type="button"
            id="faqs-title-01"
            className="flex justify-between w-full text-left font-semibold py-2"
            onClick={(e) => {
              e.preventDefault();
              setAccordianOpen(!accordianOpen);
            }}
            aria-expanded={accordianOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <span>{title}</span>
            <svg
              className="fill-slate-50 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`ttransform origin-center transition duration-200 ease-out ${
                  accordianOpen && '!rotate-180'
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordianOpen && '!rotate-180'
                }`}
              />
            </svg>
          </button>
        </h2>
      </div>
      {/* A fraction or 1FR is one part of the whole. One 1FR fraction is 100% of the available space. Two 1FR fractions are 50% each of the available space. So, in that case, 1FR is 1/2 of the available space. */}
      <div
        id={`accordion-text-${id}`}
        aria-labelledby={`accordion-title-${id}`}
        role="region"
        className={`grid text-sm pt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          accordianOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-3">{children}</p>
        </div>
      </div>
    </>
  );
}
