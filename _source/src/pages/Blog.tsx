import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import blogImg1 from "@/assets/blog-placeholder-1.jpg";
import blogImg2 from "@/assets/blog-placeholder-2.jpg";
import blogImg3 from "@/assets/blog-placeholder-3.jpg";

const blogPosts = [
  {
    title: "Why 'Test, Don't Guess' Changed Everything for My Health",
    excerpt: "For years I tried every supplement, every diet trend, every quick fix. Nothing stuck. Here's what finally made the difference — and why personalized testing is the key to real results.",
    image: blogImg1,
    date: "Coming Soon",
    category: "Nutrition",
  },
  {
    title: "5 Morning Habits That Helped Me Find My Energy Again",
    excerpt: "As a busy mom, mornings used to be chaos. These five small habits transformed my days from exhausting survival mode to intentional, energized living.",
    image: blogImg2,
    date: "Coming Soon",
    category: "Lifestyle",
  },
  {
    title: "Understanding Omega-3s: What They Do and Why You Need Them",
    excerpt: "Not all supplements are created equal. Let's break down the science behind Omega-3 fatty acids and why balanced supplementation matters for reducing inflammation.",
    image: blogImg3,
    date: "Coming Soon",
    category: "Supplements",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm text-accent font-bold uppercase tracking-widest mb-3">The Blog</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wellness Wisdom
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Real talk about health, healing, motherhood, and the Mediterranean-inspired lifestyle that keeps me going.
            </p>
          </div>

          <div className="space-y-12">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`aspect-video md:aspect-auto md:h-full overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-xs font-bold uppercase tracking-wider text-primary bg-mediterranean-light px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="font-body text-sm font-bold text-primary uppercase tracking-wider">
                    Coming Soon →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-secondary rounded-lg p-8 md:p-12 text-center border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Don't Miss a Post
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
              Join the VIP list for wellness tips, deals, and the little habits that changed my life — delivered to your inbox.
            </p>
            <Link
              to="/contact"
              className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Become a VIP Member
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
