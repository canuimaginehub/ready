import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import angelaFocus from "@/assets/angela-focus.jpg";
import angfam from "@/assets/angfam.jpg";
import family from "@/assets/family.jpg";
import angandjefyoung from "@/assets/angandjefyoung.jpg";
import angndcos from "@/assets/angndcos.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Angela's photo */}
            <div className="aspect-square rounded-lg border-2 border-border overflow-hidden order-2 md:order-1">
              <img src={angelaFocus} alt="Angela Brazier" className="w-full h-full object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <p className="font-body text-sm text-accent font-bold uppercase tracking-widest mb-3">My Story</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Meet Angela Brazier
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                I'm a certified Diet Free Life health and weight loss coach with over 10 years of dedicated research into natural health solutions. But more than that — I'm a woman and a mom who has lived every bit of the struggle.
              </p>
              <p className="font-body text-sm text-accent font-bold uppercase tracking-wider">
                Certified Diet Free Life Coach · 10+ Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            The Turning Point
          </h2>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <p>
              I was sick and tired of not feeling well. I had zero energy, I wanted to sleep all the time, I was always getting sick, and I was unable to have children. I knew there had to be a better way.
            </p>
            <p>
              I wanted to get away from conventional medicine — the antibiotics and allergy shots that only masked my symptoms and caused worse issues down the road. After years and countless hours of research, I finally found real solutions that work.
            </p>
            <p>
              Once I was able to help myself, I kept seeking better. And then something beautiful happened — I started helping my family and friends, too. I've tracked the progress of many, and the success stories speak for themselves.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
              <p className="font-display text-xl text-foreground italic">
                "Supplementing your diet is like exercise; you can't do it just once and expect to be fit."
              </p>
            </blockquote>

            <p>
              I'll be honest — I'm not 100% where I want to be in my own health journey. Life is not a straight climb up. It's a roller coaster, and I will eventually get to the top. But that raw honesty is exactly what makes me relatable to the women I serve.
            </p>
          </div>
        </div>
      </section>

      {/* Family / Lifestyle photos */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Life with the Braziers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: angfam, alt: "Angela with her family" },
              { src: family, alt: "The Brazier family" },
              { src: angandjefyoung, alt: "Angela and Jeff when young" },
              { src: angndcos, alt: "Angela with her dogs" },
            ].map((photo) => (
              <div
                key={photo.alt}
                className="aspect-square rounded-lg border border-border overflow-hidden"
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold mb-6">My Mission</h2>
          <p className="font-body text-lg opacity-90 leading-relaxed mb-8">
            I am a certified health and weight loss coach that aims to grow healthy, happy, and successful families. I envision building a community of thriving moms and families that lean on each other and feel that they have reached the best version of themselves.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary-foreground text-primary px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Work Together
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
