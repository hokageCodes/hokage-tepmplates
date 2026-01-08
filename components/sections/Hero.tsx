import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="w-full flex justify-center pt-16">
      <div className="w-full max-w-3xl px-4 flex flex-col items-start sm:items-center text-left sm:text-center gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Clean website templates to help you launch without overthinking.
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 max-w-xl">
          Five production-ready templates built with Next.js and Tailwind, designed to be simple, flexible, and safe to customize.
        </p>
        <div className="flex flex-col gap-2 items-center">
          <Button href="#" size="md" className="bg-accent hover:bg-accent/90">Download free templates</Button>
          <span className="text-xs text-neutral-500">Free for personal and commercial use</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;