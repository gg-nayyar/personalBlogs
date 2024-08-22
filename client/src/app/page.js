"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-5 flex">
        <div>
          <div className="flex">
            <h1 className="pb-4 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
              Welcome to the life of a Programer
            </h1>
            <div className="h-10 w-10"></div>
          </div>
          <p className="mt-20 flex justify-center content-center text-sky-200">
            "This is not sitting in your AirConditioned office having fun life"
            ~ Krish Nayyar
          </p>
        </div>
        <Image
          className="ml-auto mr-4 h-80 w-60 rounded-xl"
          src="/hacker1.webp"
          height={50}
          width={50}
          alt="Picture of a hacker"
          unoptimized
        />
      </div>
      <div className="mt-8">
        <h1 className=" mb-4 text-2xl font-extrabold leading-none tracking-tight text-fuchsia-400 md:text-3xl lg:text-4xl dark:text-fuchsia-400">
          How It All Began
        </h1>
        <p className="mt-4 text-sky-200">
          So what a laymen would think of a person who's a program? Well if we
          see in India people think of programmers as some kind of hackers they
          will form a image in their mind of a person who's sitting on his
          system doing something malicious as you can see in that photo.Well if
          i talk about my personal experience when i said i want to be
          programmer everyone around me was like eh? coding? "WoUlD yOu bE aBle
          tO hAcK SoMeone's WifI or iNstAgraM". Well my journey started when i
          went to college and came to know what actually Computer Science is
          Everyone there were clueless some people wanted to learn it in order
          to earn having no interest in it and many people would run behind
          marks and academics thinking they will get high packages but what i
          was thinking at that time was everyone was in a rat race but now here
          i was and i had to do something so i thought i should develop skills
          atleast if it is something common as web development but the problem
          is people see web development as HTML CSS and JS thats it and that too
          JS front-end only so few people were with me who knew what they were
          doing so taking there advice and researching on my own i started my
          journey
        </p>
        <h1 className=" mt-6 mb-4 text-2xl font-extrabold leading-none tracking-tight text-fuchsia-400 md:text-3xl lg:text-4xl dark:text-fuchsia-400">
          What Am I doing?
        </h1>
        <p className="mt-4 text-sky-200">
          Well this is a question everyone asks themselves right? And its quiet
          frustrating like what the hell am i doing so i started to make few
          project learn HTML CSS JavaScript. The link to which is here "
          <a
            target="blank"
            href="https://gg-nayyar.github.io/construx.github.io/"
          >
            https://gg-nayyar.github.io/construx.github.io/
          </a>
          ". Pretty sick project for a first timer right? Well atleast thats
          what i thought and then all college pressure like exams and all came
          in then my pace went slow and i came back with another site on
          valorant which was all frontend and nothing great just like first one
          with a lil bit more of JavaScript here's the link to that too "
          <a
            target="blank"
            href="https://gg-nayyar.github.io/valoinfo.github.io/"
          >
            https://gg-nayyar.github.io/valoinfo.github.io/
          </a>
          " . At that point I thought I can finally earn money after learning
          react and won't be a burden on family. Well turns out i was didn't
          possessed much skill at least in my head, also that period was
          RECESSION period our college placements average was like 4 lpa my god!
          after that i learned react and made some to-do and all learnt api
          integration in front-end and then made this anime suggestor "
          <a target="blank" href="https://github.com/gg-nayyar/animine">
            https://github.com/gg-nayyar/animine
          </a>
          " well after that here I am learning back-end doing a course and
          making this blogging site as practice.
        </p>
        <h1 className=" mt-6 mb-4 text-2xl font-extrabold leading-none tracking-tight text-fuchsia-400 md:text-3xl lg:text-4xl dark:text-fuchsia-400">
          What Comes Ahead?
        </h1>
        <p className="mt-4 text-sky-200">
          So what comes ahead? Well who doesn't wanna be best in what they do
          right? So does this novice does.Well I wanna be best in what i do and
          wanna make a change earn money for a good life of me and my loved ones
          and wanna have a great startup and be a expert proggrammer who knows
          what he's doing which is a basic thing. beacause most of people are
          last nowadays.
        </p>
        <h1 className="justify-center mt-6 mb-4 text-xl font-extrabold leading-none tracking-tight text-fuchsia-400 md:text-1xl lg:text-2xl dark:text-fuchsia-400">
        Thankyou!
        </h1>
      </div>
    </div>
  );
}
