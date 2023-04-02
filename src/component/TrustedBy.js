import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section className="mb-32 text-gray-800 text-center">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      . {\n        filter: (100%);\n      }\n    ",
          }}
        />
        <h2 className="text-3xl font-bold mb-12">
          Trusted by <u >8,000+</u> users
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="mb-12 lg:mb-0">
            <img
              src="/image/3m.png"
              className="img-fluid  px-6 md:px-12"
              alt="Nasa - logo"
            />
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="/image/avd.png  "
              className="img-fluid  px-6 md:px-12"
              alt="Amazon - logo"
            />
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/3.png"
              className="img-fluid  px-6 md:px-12"
              alt="Nike - logo"
            />
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/4.png"
              className="img-fluid  px-6 md:px-12"
              alt="Ikea - logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
