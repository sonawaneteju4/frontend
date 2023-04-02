
import React from "react";
import AccordData from "./AccordData";

const FAQ = () => {
    const accordionData = [
        {
          title: 'What are the different services offered by AR Coustoms? ',
          content: `We Offer Car Wraping, Bike Wraping, Car Modification, Bike Modification, PPF, Detailling And Polishing, Mobile Cover & wrap, Laptop Wrap, Restore, Alloy Paint, And Paint Job, Accessories Customization, And Many More....  `
        },
        {
          title: 'Section 2',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Section 3',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
          title: 'Section 4',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'Section 5',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Section 6',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
      ];
    
  return (
    <>
     <div className="m-5">
     <p className="font-bold text-5xl text-blue-800 text-center pb-5 ">
      Frequently Ask Questions
    </p>
        {accordionData.map(({ title, content }) => (
          <AccordData key={title} title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default FAQ;
