import Layout from "@/components/Layout";
import oliveBranch from "@/assets/olive-branch.png";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="font-body text-sm text-accent font-bold uppercase tracking-widest mb-3">Let's Connect</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Start Your Journey
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Whether you're curious about my approach, want to learn more about the products I use, or are ready to book a coaching call — I'd love to hear from you.
              </p>
              <div className="bg-secondary rounded-lg p-6 border border-border mb-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Free Discovery Call</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Sign up for a call with me to see if Solutions with Ang is the right fit for you. No pressure, just a real conversation about your health and goals.
                </p>
              </div>
              <img src={oliveBranch} alt="" className="w-20 opacity-40" />
            </div>

            {/* Form */}
            <div className="bg-card rounded-lg border border-border p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Angela will be in touch soon. 💛");
                }}
                className="space-y-5"
              >
                <div>
                  <label className="font-body text-sm font-bold text-foreground block mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full font-body text-sm bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-bold text-foreground block mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full font-body text-sm bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-bold text-foreground block mb-1.5">What brings you here?</label>
                  <select
                    className="w-full font-body text-sm bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  >
                    <option>I want to book a coaching call</option>
                    <option>I'm interested in your products</option>
                    <option>I want to join the VIP newsletter</option>
                    <option>Just saying hello!</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-bold text-foreground block mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full font-body text-sm bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me a bit about yourself and your health goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-6 py-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
