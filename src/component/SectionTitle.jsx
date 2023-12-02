const SectionTitle = ({ subTitle, mainTitle }) => {
  return (
    <>
      <div className="section_title text-center pb-6 font-poppins">
        <h4 className="text-md text[#555]">{subTitle}</h4>
        <h3 className="text-5xl text-slate-950 font-bold pt-2">{mainTitle}</h3>
      </div>
    </>
  );
};

export default SectionTitle;
