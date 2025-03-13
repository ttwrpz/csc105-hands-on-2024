import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-row gap-4" id="about">
      <div className="w-full flex-6/12">
          <img
              src="/images/profile.jpg"
              alt="Theerawat Patthawee"
              className="object-fit rounded transition hover:scale-105"
          />
      </div>
      <div className="flex flex-col gap-4">
          <div className="space-x-2">
              <h1 className="text-xl font-semibold">About Me</h1>
              <h2 className="text-3xl font-semibold">I'm Computer Science Student</h2>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          adipisci animi atque consequuntur debitis eaque eos ex iure,
          laboriosam, nostrum officiis omnis sunt tenetur ullam voluptate.
          Consequuntur earum iusto nulla.
        </p>
        <a className="rounded bg-green-800 px-4 py-2 text-white cursor-pointer transition hover:scale-105">Read More</a>
      </div>
    </section>
  );
}

export default AboutMe;
