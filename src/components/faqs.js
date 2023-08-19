import Accordian from './accordian';

export default function Faqs() {
  const faqs = [
    {
      title: 'What is JavaScript and what is its main purpose?',
      text: 'JavaScript is a programming language primarily used to add interactivity and dynamic behavior to websites and web applications. Its main purpose is to enhance user experience by enabling real-time updates, animations, and interactive features on web pages',
      active: false,
    },
    {
      title:
        'How can I respond to user interactions on a webpage using JavaScript?',
      text: 'JavaScript allows you to respond to user actions like clicks and input changes by attaching event listeners to elements on the webpage. When the specified event occurs, the associated JavaScript code is executed to handle the action.',
      active: false,
    },
    {
      title: 'What is the DOM and how does it relate to JavaScript?',
      text: "The Document Object Model (DOM) is a representation of the structure and content of a web page in the form of objects. JavaScript can interact with and manipulate the DOM, enabling dynamic changes to the page's content, structure, and styles without requiring a full page reload.",
      active: false,
    },
    {
      title:
        'What are some common use cases for JavaScript in web development?',
      text: 'JavaScript is used for various tasks in web development, such as form validation, creating interactive forms, implementing sliders and carousels, fetching data from servers without reloading the page (AJAX), and building single-page applications (SPAs) with frameworks like React, Angular, or Vue.js.',
      active: false,
    },
  ];
  return (
    <div class="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
      <h1 class="text-2xl font-bold  mb-4">Javascript FAQs</h1>
      <div className="divide-y divide-gray-50-50">
        {faqs.map((faq, index) => (
          <Accordian
            title={faq.title}
            active={faq.active}
            id={`faqs-${index}`}
            key={index}
          >
            {faq.text}
          </Accordian>
        ))}
      </div>
    </div>
  );
}
