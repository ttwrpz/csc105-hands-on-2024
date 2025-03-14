import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

function Home() {
  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row" id="home">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-4/12">
          <span className="font-xl font-semibold">Hello, It's me, Champ!</span>
          <h1 className="text-3xl font-semibold">Theerawat Patthawee</h1>
          <h2 className="text-2l font-semibold">
            I'm a Computer Science Student
          </h2>
          <p>
            Computer Science student passionate about software development. I
            love stargazing and enjoy spending time with myself.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a href="https://www.facebook.com/ttwrpz" target="_blank">
            <IconBrandFacebook className="size-8 transition hover:scale-105" />
          </a>
          <a href="https://www.instagram.com/ttwrpz" target="_blank">
            <IconBrandInstagram className="size-8 transition hover:scale-105" />
          </a>
          <a href="mailto:theerawat.patt@kmutt.ac.th" target="_blank">
            <IconMail className="size-8 transition hover:scale-105" />
          </a>
        </div>
        <a className="cursor-pointer rounded bg-green-800 px-4 py-2 text-white transition hover:scale-105">
          My Portfolio
        </a>
      </div>
      <div className="flex w-full items-center justify-center md:flex-8/12">
        <img
          src="/images/profile.jpg"
          alt="Theerawat Patthawee"
          className="object-fit mx-auto w-full max-w-sm rounded transition hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Home;
