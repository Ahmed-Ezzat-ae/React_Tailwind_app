const FeatureBox = ({ icon, title, desc }) => {
  return (
    <div className="text-white element-center text-center">
      <img
        src={`/src/assets/images/${icon}`}
        alt={title}
        className="w-[80px] h-[80px] object-contain"
      />
      <h2 className="text-lg font-semibold my-3">{title}</h2>
      <p className="text-sm leading-6 tracking-wider">{desc}</p>
    </div>
  );
};

export default FeatureBox;
