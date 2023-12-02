const ProjectsCard = (props) => {
  const { image, headLine, liveBtn, githubBtn } = props;
  return (
    <>
      <div className="card bg-base-100 border-2">
        <figure className="px-6 pt-6">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center p-5">
          <h2 className="card-title text-3xl font-bold text-slate-950 font-poppins pb-4">
            {headLine}
          </h2>
          <div className="card-actions">
            <div className="text-center">
              <a
                href={githubBtn}
                className="font-poppins btn btn-neutral btn-outline rounded-3xl p-4 mr-3"
                target="_blank"
              >
                Github
              </a>
              <a
                href={liveBtn}
                className="font-poppins btn btn-neutral btn-outline rounded-3xl p-4 mr-3"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
