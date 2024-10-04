import { Link } from "react-router-dom";
import homePic from "../assets/home-pic.jpeg";

function Home() {
  return (
    <>
      <section className="relative flex flex-col lg:flex-row items-center lg:h-screen pt-20 lg:px-20 px-6 bg-white">
        <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
          <h3 className="text-primary font-semibold mb-2">OurWedding</h3>
          <h2 className="font-banner text-3xl mb-2">
            Build Beautiful Memories, One Digital Invitation at a Time
          </h2>
          <p className="text-gray-600 mb-10">
            At OurWedding, we help you craft stunning digital wedding
            invitations that leave lasting impressions. With our easy-to-use
            tools, you can create personalized, unique invitations that capture
            the essence of your special day. Save time, stay eco-friendly, and
            give your guests an experience they will cherish forever.
          </p>
          <Link className="bg-primary px-6 py-2 text-white rounded-full">
            Create Now
          </Link>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center mb-5">
          <img src={homePic} className="h-80 lg:w-full" alt="Wedding" />
        </div>
      </section>

      <section className="flex flex-col bg-tertiary lg:px-20 py-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-5 text-center">
            Template Collection
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl px-5">
            Explore our elegant, customizable wedding invitation templates.
            Whether your style is modern, classic, or whimsical, personalize
            every detail to create a unique invitation that reflects your love
            story.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-3">
          <div className="border border-primary text-center flex flex-col mx-4">
            <h4 className="bg-primary py-2 px-3 text-white font-semibold">
              Fresh Designs Updated Regularly
            </h4>
            <h5 className="py-2 px-4">
              Explore our ever-growing collection of elegant, modern, and
              customizable wedding invitation templates. Each design is crafted
              to help you celebrate your special day in style.
            </h5>
          </div>
          <div className="border border-primary text-center flex flex-col mx-4">
            <h4 className="bg-primary py-2 px-3 text-white font-semibold">
              Personalized Music for Your Invitations
            </h4>
            <h5 className="py-2 px-4">
              Add a personal touch to your invitations by embedding your
              favorite songs or special tracks that represent your love story.
              Make every invitation as unique as your relationship.
            </h5>
          </div>
          <div className="border border-primary text-center flex flex-col mx-4">
            <h4 className="bg-primary py-2 px-3 text-white font-semibold">
              Lifetime Access to Your Invitation
            </h4>
            <h5 className="py-2 px-4">
              With lifetime access to your invitations, you can revisit the
              special moments of your wedding anytime. Share your digital
              invitations with loved ones and keep them as a lasting memory.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
