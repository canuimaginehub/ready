import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import oliveBranch from "@/assets/olive-branch.png";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-square rounded-lg bg-mediterranean-light border-2 border-border overflow-hidden flex items-center justify-center order-2 md:order-1">
              <div className="text-center p-8">
                <img src={oliveBranch} alt="" className="w-16 mx-auto mb-4 opacity-50" />
                <p className="font-body text-sm text-muted-foreground italic">Angela's Photo Here</p>
              </div>
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

      {/* Family / Lifestyle placeholders */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Life with the Braziers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Family Photo 1", "Family Photo 2", "Lifestyle Photo", "Kitchen / Cooking"].map((label) => (
              <div
                key={label}
                className="aspect-square rounded-lg bg-mediterranean-light border border-border flex items-center justify-center"
              >
                <p className="font-body text-xs text-muted-foreground italic text-center px-4">{label}</p>
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
