import Layout from "@/components/Layout";
import zinzinoImg from "@/assets/zinzino.png";
import nucleogenexImg from "@/assets/nucleogenex.png";
import essentialOilsImg from "@/assets/essential-oils.jpg";
import glp3Img from "@/assets/glp3.jpg";
import oliveBranch from "@/assets/olive-branch.png";

const favorites = [
  {
    name: "ZINZINO Balanced Omega 3 Oil",
    description: "A premium, test-based Omega 3 supplement that helps balance your Omega 6:3 ratio. This was one of the first products that made a noticeable difference in my inflammation levels and overall energy.",
    category: "Supplements",
    image: zinzinoImg,
    link: "https://www.zinzino.com/2018172318",
  },
  {
    name: "NücleoGenex DNA Testing & Custom Supplements",
    description: "DNA testing that creates completely personalized nutritional supplements based on YOUR unique genetic profile. No more guessing what your body needs.",
    category: "Testing",
    image: nucleogenexImg,
    link: "https://nucleogenex.com/angelab",
  },
  {
    name: "GLP THREE Natural Drops",
    description: "Only 4 natural ingredients with no side-effects. A gentle, effective addition to your wellness routine that works with your body, not against it.",
    category: "Supplements",
    image: glp3Img,
    link: "https://solutionswithang.threeinternational.com",
  },
  {
    name: "Young Living Essential Oils",
    description: "Natural solutions through the power of essential oils. From stress relief to immune support, these oils are a cornerstone of my daily wellness routine and a beautiful way to care for your family naturally.",
    category: "Essential Oils",
    image: essentialOilsImg,
    link: "https://www.youngliving.com/us/en/referral/2810547",
  },
];

const Favorites = () => {
  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm text-accent font-bold uppercase tracking-widest mb-3">Tried & Tested</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Favorites
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              These are the products I personally use and recommend to maintain a healthy, balanced life. I stand behind every single one.
            </p>
          </div>

          <div className="space-y-8">
            {favorites.map((product, i) => (
              <div
                key={i}
                className="grid md:grid-cols-3 gap-6 items-center bg-card rounded-lg border border-border p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                {/* Product image */}
                <div className="aspect-square rounded-lg bg-mediterranean-light border border-border flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <img src={oliveBranch} alt="" className="w-12 mx-auto mb-2 opacity-40" />
                      <p className="font-body text-xs text-muted-foreground italic">Product Photo</p>
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-primary bg-mediterranean-light px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mt-3 mb-3">
                    {product.name}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-bold text-primary uppercase tracking-wider hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 text-center">
            <p className="font-body text-xs text-muted-foreground italic max-w-lg mx-auto">
              Some links on this page may be affiliate links. I only recommend products I personally use and love. Your support helps me continue sharing wellness knowledge with the world.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Favorites;
