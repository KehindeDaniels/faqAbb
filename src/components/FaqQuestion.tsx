import Accordion from "./Accordion";
import Cta from "./Cta";
const FaqHero = () => {
  return (
    <section className="p-6 flex flex-col justify-center items-center">
      {/* top */}
      <div className="faq max-w-[500px] my-4 flex flex-col items-center">
        <span className="text-[#F6D155] bg-[#131D26] py-1 px-2 rounded-2xl">
          FAQ
        </span>
        <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
        <p className="text-center">
          You might have some questions, here are some answers to some of those
          questions
        </p>
      </div>

      {/* question */}
      <div className="max-w-[840px] mx-auto rounded-r-2xl rounded-bl-3xl flex items-center justify-center">
        <Accordion />
      </div>

      {/* bottom */}
      <div className="max-w-[840px] faq w-full flex flex-col items-center py-8 mt-8 bg-[#F0F0F0]">
        <div className="max-w-[400px] mx-auto my-4 flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <p className="text-center">
            Reach out to our customer support and we will get back to you ASAP
          </p>
          <button className="text-[#F6D155] bg-[#131D26] py-2 px-4 rounded-md cursor-pointer hover:text-[#131D26] hover:bg-[#F6D155]">
            info@cloutra.com
          </button>
        </div>
      </div>

      <Cta />
    </section>
  );
};

export default FaqHero;
