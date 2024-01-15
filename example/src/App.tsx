import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { ColorTokens } from "code-colors-react";
import { GithubIcon } from "./components/GithubIcon";
import {
  TestimonialCard,
  TestimonialProps,
} from "./components/TestimonialCard";

const testimonials: TestimonialProps[] = [
  {
    name: "Emily Johnson",
    title: "Senior Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=21",
    content:
      "Marquee Library has been a game-changer for our TypeScript projects. Its seamless integration and robust features have significantly improved our UI's dynamic capabilities.",
  },
  {
    name: "Raj Patel",
    title: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=18",
    content:
      "I'm thoroughly impressed with Marquee's performance and ease of use. It made implementing complex scrolling texts a breeze, and the support for TypeScript is top-notch.",
  },
  {
    name: "Sofia Garcia",
    title: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "As a designer, I appreciate how Marquee enhances the visual appeal of our applications. The flexibility it offers in styling and animation is fantastic.",
  },
  {
    name: "John Mack",
    title: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=60",
    content:
      "Integrating Marquee into our full-stack TypeScript projects has been incredibly efficient. Its compatibility and ease of customization are ideal for our diverse project needs.",
  },
  {
    name: "Isabella Smith",
    title: "Project Manager",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "Marquee Library has consistently delivered beyond our expectations. It's not just a tool; it's an asset that enhances productivity and creativity in our TypeScript applications.",
  },
];

function Logo({ src }: { src: string }) {
  return <img src={src} className="h-16 inline-block" />;
}

function Code({ children, lang = "js" }: { children: string; lang?: string }) {
  return (
    <pre className="w-full text-wrap px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white">
      <ColorTokens code={children} lang={lang} />
    </pre>
  );
}

const codeImport = `
import { Marquee } from "marquee";
import "marquee/dist/index.css";
`.trim();

const codeExample1 = `
// Use fade props
<Marquee fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`.trim();

const codeExample2 = `
// Use reserve props
<Marquee fade={true} reserve={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`.trim();

const codeExample3 = `
// Use pauseOnHover props
<Marquee fade={true} pauseOnHover={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`.trim();

const codeExample4 = `
// Use direction props
<Marquee fade={true} direction="up">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`.trim();

const codeExample5 = `
// Use css vars for gap and duration
// Default is 1 rem and 40s
<Marquee className="gap-[3rem] [--duration:5s]" innerClassName="gap-[3rem] [--gap:3rem]" fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`.trim();

function App() {
  return (
    <div className="bg-stone-50 w-screen min-h-screen">
      <div className="max-w-screen-md mx-auto py-6 px-4 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl font-semibold">Marquee</h1>
            <div className="text-stone-600">
              A beautiful marquee component for React.
            </div>
          </div>
          <a
            href="https://github.com/devnomic/marquee"
            target="_blank"
            className="bg-black text-sm font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-colors"
          >
            <GithubIcon className="size-5 mr-1" />
            Star Us
          </a>
        </div>
        <div className="py-4">
          <Marquee className="py-2" fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </Marquee>
          <Marquee className="py-2" reverse={true} fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </Marquee>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Installation</h2>
          <Code lang="bash">npm install @devnomic/marquee</Code>
          <div className="text-sm">
            or you can skip npm install, and just copy and paste the source code
            into your component ala{" "}
            <a className="underline" href="https://ui.shadcn.com/">
              shadcn ui
            </a>
            .
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Import</h3>
          <Code>{codeImport}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Fade</h3>
          <Marquee className="py-4" fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </Marquee>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample1}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Reverse direction</h3>
          <Marquee className="py-4" reverse={true} fade={true}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                title={testimonial.title}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </Marquee>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample2}</Code>
        </div>
        <hr className="border-stone-200" />
        <div>
          <h3 className="font-semibold">Pause on hover</h3>
          <Marquee pauseOnHover={true} fade={true}>
            <Logo src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
          </Marquee>
        </div>
        <div>
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample3}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Vertical</h3>
          <div className="flex justify-center">
            <Marquee className="h-[400px]" direction="up" fade={true}>
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={i}
                  name={testimonial.name}
                  title={testimonial.title}
                  avatar={testimonial.avatar}
                  content={testimonial.content}
                />
              ))}
            </Marquee>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample4}</Code>
        </div>
        <hr className="border-stone-200" />
        <div className="space-y-1">
          <h3 className="font-semibold">Custom gap and speed</h3>
          <Marquee
            className="gap-[3rem] [--duration:5s]"
            innerClassName="gap-[3rem] [--gap:3rem]"
            fade={true}
          >
            <Logo src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" />
            <Logo src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
          </Marquee>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Code</h3>
          <Code>{codeExample5}</Code>
        </div>
      </div>
    </div>
  );
}

export default App;
