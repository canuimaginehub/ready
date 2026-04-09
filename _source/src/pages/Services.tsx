import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import angelaFocus from "@/assets/angela-focus.jpg";
import oliveBranch from "@/assets/olive-branch.png";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm text-accent font-bold uppercase tracking-widest mb-3">Work With Me</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your Path to Healing Starts Here
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                I specialize in helping women and moms reach their best health so they can be most present in their lives and families — using the body's gift to heal naturally.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                My approach is simple: <strong className="text-foreground">Test, don't guess.</strong> Solutions are extremely personalized, so you never have to worry about investing in the wrong approach.
              </p>
              <Link
                to="/contact"
                className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Book Your Free Call
              </Link>
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-border">
              <img src={angelaFocus} alt="Angela Brazier" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            How It Works
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Getting started is easy. Here's what your journey looks like:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free Discovery Call",
                desc: "We'll chat about where you are, where you want to be, and whether Solutions with Ang is the right fit for you. No pressure — just a real conversation.",
              },
              {
                step: "02",
                title: "Personalized Testing",
                desc: "Instead of guessing, we test. Through DNA testing and bloodwork analysis, we understand exactly what YOUR body needs to thrive.",
              },
              {
                step: "03",
                title: "Your Healing Journey",
                desc: "With a customized plan built around your unique results, we work together to lower inflammation, boost energy, and help your body heal from within.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-display text-5xl font-bold text-primary/20 block mb-4">{item.step}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What I Can Help You With
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🧪",
                title: "Test-Based Nutrition",
                desc: "No more random supplements. We use DNA and blood tests to find exactly what your body is missing.",
              },
              {
                icon: "🔥",
                title: "Lowering Inflammation",
                desc: "Chronic inflammation is at the root of so many health issues. We address it naturally with proven solutions.",
              },
              {
                icon: "⚡",
                title: "Energy & Vitality",
                desc: "Tired of being tired? We'll find the root cause and build a plan to get your energy back.",
              },
              {
                icon: "🌿",
                title: "Natural Healing",
                desc: "Move away from conventional medicine that only masks symptoms. Your body has the ability to heal when given the right tools.",
              },
              {
                icon: "🧠",
                title: "Mental Clarity",
                desc: "Brain fog, stress, and emotional imbalance don't have to be your normal. Let's clear the fog.",
              },
              {
                icon: "💛",
                title: "Whole-Life Coaching",
                desc: "Health isn't just physical — it's spiritual, mental, emotional, relational, and financial. We address it all.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-2xl mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-2xl text-center">
          <img src={oliveBranch} alt="" className="w-16 mx-auto mb-6 opacity-40" />
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-4">
            "You can have a million problems until the problem is your health. Once you are sick, nothing else matters."
          </blockquote>
          <cite className="font-body text-sm text-muted-foreground not-italic">— Angela Brazier</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 leading-relaxed">
            Sign up for a free call with me to see if Solutions with Ang is the right fit for you. No pressure, just a real conversation about your health and goals.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary-foreground text-primary px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Book Your Free Discovery Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
