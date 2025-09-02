import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How much can I earn as a Raavi partner?",
      answer: "Your earnings depend on the number of installations you complete. Partners typically earn ₹2,000-₹5,000 per installation, with top performers earning ₹50,000+ monthly. The more you install, the more you earn!"
    },
    {
      question: "Do I need to invest in inventory?",
      answer: "No! Unlike traditional dealer models, you don't need to buy or stock products. We handle inventory and delivery - you focus on what you do best: selling and installing."
    },
    {
      question: "What support do I get from Raavi?",
      answer: "You get comprehensive support including technical training, marketing materials, customer leads through our app, installation guidance, and 24/7 customer service backup."
    },
    {
      question: "How quickly do I get paid?",
      answer: "Credits are added to your account immediately after successful installation. You can redeem them as cash or use them to purchase Raavi products at discounted rates."
    },
    {
      question: "What areas does Raavi cover?",
      answer: "We're rapidly expanding across India, covering tier-1, tier-2, and tier-3 cities. If we're not in your area yet, join us as we grow - early partners often see the highest returns!"
    },
    {
      question: "What documents do I need to become a partner?",
      answer: "You'll need basic KYC documents (Aadhaar, PAN), proof of electrical expertise (certificate/experience letter), and a few photos of your previous work. The verification process is quick and straightforward."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about becoming a Raavi partner
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:text-primary">
                  <span className="font-semibold text-dark">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
