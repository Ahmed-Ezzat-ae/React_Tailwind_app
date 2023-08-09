import { useState } from 'react';
import FeatureBox from './FeatureBox';

const Features = () => {
  const [items] = useState([
    {
      icon: 'icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      desc: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      icon: 'icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      desc: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      icon: 'icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      desc: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      icon: 'icon-access-anywhere.svg',
      title: 'Access your files, anywhere',
      desc: '    Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
  ]);
  return (
    <section className='pb-[150px]'>
      <div className="container">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 w-[865px] mx-auto max-w-full">
          {items.map((item, index) => (
            <FeatureBox
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
