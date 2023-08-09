import { useState } from 'react';
import TestmonialBox from './TestmonialBox';

const Testimonials = () => {
  const [items] = useState([
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione qui sapiente dolores earum illo eius tempora reiciendis nihil, impedit quibusdam inventore. Odio doloremque animi a quo quidem ratione neque est!',
      image: 'profile-1.jpg',
      position: 'Founder $ SEO, Huddle',
      name: 'Ahmed',
    },

    {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione qui sapiente dolores earum illo eius tempora reiciendis nihil, impedit quibusdam inventore. Odio doloremque animi a quo quidem ratione neque est!',
      image: 'profile-2.jpg',
      position: 'Founder $ SEO, Huddle',
      name: 'Ahmed',
    },
    {
      id: 3,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione qui sapiente dolores earum illo eius tempora reiciendis nihil, impedit quibusdam inventore. Odio doloremque animi a quo quidem ratione neque est!',
      image: 'profile-3.jpg',
      position: 'Founder $ SEO, Huddle',
      name: 'Ahmed',
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div>
          <div className="absolute left-[20px] top-[-35px]">
            <img src="/src/assets/images/bg-quotes.png" alt="quote-img" />
          </div>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <TestmonialBox
                key={item.id}
                desc={item.desc}
                position={item.position}
                image={item.image}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
