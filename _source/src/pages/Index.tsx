import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import oliveBranch from "@/assets/olive-branch.png";
import lifestyleFlatlay from "@/assets/lifestyle-flatlay.jpg";
import angelaFocus from "@/assets/angela-focus.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <img src={oliveBranch} alt="" className="w-20 mx-auto mb-6 opacity-80" />
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Heal from Within. <br />
            <span className="italic font-normal">Thrive Naturally.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Helping women and moms find real solutions for their healthiest, happiest lives — body, mind, and spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Book a Free Call
            </Link>
            <Link
              to="/about"
              className="font-body font-bold text-sm uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40 px-8 py-4 rounded-md hover:bg-primary-foreground/30 transition-colors backdrop-blur-sm"
            >
              Meet Angela
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Test. Don't Guess.
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Solutions are extremely personalized. Your journey to health shouldn't be a guessing game — it should be a guided path with real answers and real results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Inside-Out Healing",
                desc: "Your body has the ability to heal when given the right tools. We focus on natural, root-cause solutions.",
              },
              {
                icon: "💛",
                title: "Whole-Life Wellness",
                desc: "Spiritual, mental, emotional, physical, relational, nutritional, and financial health — all connected.",
              },
              {
                icon: "🏛️",
                title: "Mediterranean Living",
                desc: "Inspired by the world's healthiest cultures, embracing fresh food, community, and joyful living.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for Angela's photo */}
              <div className="aspect-[3/4] rounded-lg border-2 border-border overflow-hidden">
                <img src={angelaFocus} alt="Angela Brazier" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hi, I'm Angela!
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                As someone who has lived through it, I specialize in helping women and moms reach their best health so they can be most present in their lives and families.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                I was sick and tired of not feeling well. After years and countless hours of research, I found real solutions — and now I want to share them with the world.
              </p>
              <p className="font-body text-sm font-bold text-accent uppercase tracking-wider mb-6">
                Certified Diet Free Life Coach · 10+ Years of Research
              </p>
              <Link
                to="/about"
                className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Read My Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Image Section */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={lifestyleFlatlay} alt="Healthy Mediterranean lifestyle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-lg">
              <p className="font-display text-2xl md:text-3xl text-primary-foreground italic leading-relaxed">
                "You can have a million problems until the problem is your health. Once you are sick, nothing else matters."
              </p>
              <cite className="font-body text-sm text-primary-foreground/80 mt-4 block not-italic">— Angela Brazier</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            The Pillars of a Thriving Life
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            True wellness isn't just about what you eat — it's about nurturing every dimension of your life.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✝️", title: "Spiritual", desc: "Living with joy through the fruit of the spirit" },
              { icon: "🧠", title: "Mental", desc: "A clean and clear mind, free from fog and stress" },
              { icon: "💗", title: "Emotional", desc: "Cortisol in check, emotions balanced and healthy" },
              { icon: "💪", title: "Physical", desc: "Strength and mobility to be present for your family" },
              { icon: "👨‍👩‍👧‍👦", title: "Relational", desc: "God first, family second, healthy communication" },
              { icon: "🌱", title: "Financial", desc: "Shrinking debt and growing a fulfilling future" },
            ].map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-2xl mt-1">{v.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "What does 'Test, Don't Guess' mean?",
                a: "Instead of trying random supplements or diets, I believe in testing to understand exactly what your body needs. Solutions are extremely personalized, so you never have to worry about investing in the wrong approach.",
              },
              {
                q: "Do I need to be a mom to work with you?",
                a: "Not at all! While I have a special heart for moms, I work with all women who want to feel their best — whether you're starting a family, in your golden years, or anywhere in between.",
              },
              {
                q: "What makes your approach different?",
                a: "I focus on inside-out healing using natural solutions. I'm not a doctor and I'm not a quick fix — I'm a guide who has walked this journey personally and has 10+ years of research and real results to share.",
              },
              {
                q: "What products do you recommend?",
                a: "I personally use and recommend products like ZINZINO Balanced Omega 3 Oil, NücleoGenex DNA testing, and GLP THREE natural drops. You can find these on my Favorites page.",
              },
              {
                q: "How do I get started?",
                a: "The best way to start is to book a free call with me! We'll chat about where you are, where you want to be, and whether Solutions with Ang is the right fit for you.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-display text-left text-foreground hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <img src={oliveBranch} alt="" className="w-16 mx-auto mb-6 opacity-70 brightness-200" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Feel Like Yourself Again?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 leading-relaxed">
            Sign up for a call with me to see if Solutions with Ang is the right fit for you. Let's find your path to healing — together.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary-foreground text-primary px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Book Your Free Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
