const Intro = () => {
  return (
    <>
      <div className="intro_area my-32">
        <div className="container justify-center mx-auto">
          <div className="intro_con_main w-3/4 mx-auto">
            <div className="flex items-center gap-6 justify-center">
              <div className="intro_img avatar w-2/4">
                <div className="w-96 rounded-full ml-auto">
                  <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg" />
                </div>
              </div>
              <div className="intro_con w-2/4 text-center font-poppins">
                <h6 className="text-md text-[#555] font-semibold">
                  Hello, I'm
                </h6>
                <h1 className="text-5xl text-slate-950 font-semibold my-4">
                  John Doe
                </h1>
                <h2 className="text-[28px] text-[#555] font-semibold mb-4">
                  Frontend Developer
                </h2>
                <div className="intro_btn_area">
                  <a
                    href="#"
                    className="intro_btn text-md btn btn-neutral btn-outline rounded-3xl font-medium text-slate-900 mr-4"
                  >
                    Download CV
                  </a>
                  <a
                    href="#"
                    className="text-md btn btn-neutral rounded-3xl font-medium text-slate-50 mr-4"
                  >
                    Contact Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
