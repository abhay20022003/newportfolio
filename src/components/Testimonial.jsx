import React from "react";

const testimonials = [
  {
    name: "Rajeev Prajapati",
    position: "Web Developer at RF Nanocomposites Pvt Ltd",
    feedback:
      "Working with you was an absolute pleasure! Your expertise in WordPress and backend development is commendable.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHtOlwd-UTseQ/profile-displayphoto-shrink_100_100/B56ZSuj2FtHsAU-/0/1738095420902?e=1744848000&v=beta&t=-H56o6XK8flW_BKj4XIzrD3HdtNstF930UnxzOUPQ_s",
  },
  {
    name: "Yashwant Singh",
    position: "SDE at GlobalLogic",
    feedback:
      "Highly professional and proactive! Your ability to solve problems quickly really impressed me.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHCe5mIIzmTdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720623939055?e=1744848000&v=beta&t=btAlf0m_Qen6qpBQmlb67on07lDiht5fDuDiKwuXxU8",
  },
  {
    name: "Mo. Dilshad",
    position: "Software Developer at Lepide",
    feedback:
      "Your technical skills and attention to detail made our project a success. Looking forward to working together again!",
    image: "https://media.licdn.com/dms/image/v2/C5603AQEo4a5mkuKxtg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1632042703420?e=1744848000&v=beta&t=lyFRG5C2O8M34yZAa15Uxet7M9oq4hUhXctEV8noxSY",
  },
];

function Testimonial() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          What People Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-blue-300">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.position}</p>
              <p className="text-gray-300 mt-3 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonial;
