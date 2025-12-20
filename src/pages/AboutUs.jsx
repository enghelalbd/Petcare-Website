import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          <span className="text-accent">Warm</span>Paws
        </h1>
        <p className="text-xl italic">Where Every Paw Finds Warmth</p>
      </div>

      <div className="space-y-6 leading-relaxed">
        <p>
          WarmPaws was born from a simple belief: our furry companions deserve
          the same comfort and care we give ourselves. What started as a small
          winter pet caring shop has grown into a comprehensive pet's comfort
          destination trusted by thousands of pet parents.
        </p>
        <Fade>
          <img
            src="https://i.ibb.co.com/XfcCHnm7/image.png"
            alt="A Dog"
            className="rounded-xl"
          />
        </Fade>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            To provide exceptional care, quality products, and expert guidance
            that keeps pets healthy, happy, and comfortable through every
            season. We're committed to making pet care accessible, affordable,
            and most importantly—filled with love.
          </p>
        </div>
        <Fade>
          <img
            src="https://i.ibb.co.com/twK6Wgn7/image.png"
            alt="A Dog"
            className="rounded-xl"
          />
        </Fade>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>
            It all started on a particularly cold winter evening when our
            founder, Sarah, noticed her rescue dog shivering during their
            evening walk. Despite searching everywhere, she couldn't find
            quality winter gear that was both functional and comfortable for her
            furry companion.
          </p>
          <p>
            That frustration sparked an idea: create a place where pet parents
            could find everything they need to keep their pets cozy, healthy,
            and happy—no matter the season. From that moment, WarmPaws was born.
          </p>
          <p>
            Today, we've helped over 500 pets stay warm and comfortable. But our
            journey doesn't end there. We continue to expand our services,
            partner with the best brands, and most importantly, listen to our
            community of pet lovers who inspire us every day.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Over 500 happy pets served</li>
            <li>30+ certified groomers and veterinarians</li>
            <li>1200+ five-star reviews</li>
            <li>24/7 customer support</li>
            <li>Eco-friendly products and practices</li>
          </ul>
        </div>
        <Fade>
          <img
            src="https://i.ibb.co.com/8LDhLyBy/dog-and-cat-vet.jpg"
            alt="A Dog"
            className="rounded-xl"
          />
        </Fade>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <p>
            <strong>Compassion:</strong> Every pet deserves unconditional love
            and care. We treat your furry friends as family.
          </p>
          <p>
            <strong>Excellence:</strong> We maintain the highest standards in
            pet care, grooming, and winter protection services.
          </p>
          <p>
            <strong>Safety:</strong> Your pet's safety is our priority. All our
            staff are certified and background-checked.
          </p>
          <p>
            <strong>Sustainability:</strong> We use eco-friendly products and
            practices to protect our planet for future paws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
