"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Cpu, Github, Handshake, Linkedin, Mail, MessageCircle, Package, TrendingUp, Timer, Twitter, Users, Zap } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-chip","url":"https://images.pexels.com/photos/33829026/pexels-photo-33829026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Intel Core Ultra CPU with packaging box, highlighting its high-performance capabilities."},
  {"id":"ai-processing","url":"https://images.pexels.com/photos/9242891/pexels-photo-9242891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Person assembling computer motherboard with colorful wires, showcasing technology and engineering."},
  {"id":"chip-manufacturing","url":"https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed view of a microchip on a printed circuit board, showcasing electronic components."},
  {"id":"neural-network","url":"https://images.pexels.com/photos/18068747/pexels-photo-18068747.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant and artistic representation of neural networks in an abstract 3D render, showcasing technology concepts."},
  {"id":"edge-computing","url":"https://images.pexels.com/photos/11237837/pexels-photo-11237837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Blurred close-up of a laptop's edge resting on a wooden table."},
  {"id":"quantum-chip","url":"https://images.pexels.com/photos/34353877/pexels-photo-34353877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of an Intel Core i7 processor and syringe of thermal paste on a textured surface."},
  {"id":"automotive-ai","url":"https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Female engineer using laptop to analyze vehicle data inside a car for testing purposes."},
  {"id":"datacenter-chip","url":"https://images.pexels.com/photos/19226354/pexels-photo-19226354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A technician inserts a circuit board into a server rack, illustrating technology and connectivity."},
  {"id":"mobile-processor","url":"https://images.pexels.com/photos/6755058/pexels-photo-6755058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed view of circuit components on a printed circuit board (PCB)."},
  {"id":"founder-ceo","url":"https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint."},
  {"id":"cto","url":"https://images.pexels.com/photos/8942240/pexels-photo-8942240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a security officer attentively listening to a two-way radio."},
  {"id":"vp-engineering","url":"https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident engineer in suit and hard hat, ready for construction project."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7144184/pexels-photo-7144184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A confident car salesman in a showroom, holding a clipboard and pen."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women sitting at a table having a professional discussion in a bright office setting."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/6476256/pexels-photo-6476256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Diverse team collaborating with laptops in a modern office setting, discussing digital evolution."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity."},
  {"id":"nvidia-logo","url":"https://images.pexels.com/photos/30608594/pexels-photo-30608594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a hand holding a smartphone showing the NVIDIA logo on screen with a blurred background."},
  {"id":"intel-logo","url":"https://images.pexels.com/photos/26690615/pexels-photo-26690615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A Mercedes-Benz sign with a clear sky backdrop, showcasing branding against clouds."},
  {"id":"amd-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"qualcomm-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"broadcom-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."}
];

export default function Home() {
  // Asset resolution helper
  const resolveAsset = (assetRef: string) => {
    if (!assetRef?.startsWith('asset://')) return assetRef;
    const id = assetRef.replace('asset://', '');
    const asset = assetMap.find(a => a.id === id);
    return {
      url: asset?.url ?? '/public/images/placeholder.webp',
      alt: asset?.alt ?? 'Decorative image'
    };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ChipAI"
          button={{
            text: "Request Demo",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Next-Gen AI Chips for Tomorrow's Intelligence"
          description="Revolutionary software-defined processors that adapt to any AI workload, delivering unprecedented performance and efficiency for the age of artificial intelligence."
          tag="Industry Leading"
          tagIcon={Zap}
          buttons={[
            { text: "Request Demo", href: "contact" },
            { text: "Learn More", href: "features" }
          ]}
          imageSrc={resolveAsset("asset://hero-chip").url}
          imageAlt={resolveAsset("asset://hero-chip").alt}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Redefining AI Processing"
          description={[
            "We're pioneering the future of artificial intelligence with software-defined processors that adapt in real-time to any workload.",
            "Our breakthrough architecture delivers 10x the performance per watt compared to traditional chips, enabling AI applications that were previously impossible."
          ]}
          buttons={[
            { text: "Our Technology", href: "features" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Breakthrough Technology"
          description="Revolutionary features that set our AI chips apart from traditional processors."
          tag="Innovation"
          tagIcon={Cpu}
          features={[
            {
              id: "01",
              title: "Adaptive Architecture",
              description: "Self-configuring processors that optimize for any AI workload in real-time",
              imageSrc: resolveAsset("asset://ai-processing").url,
              imageAlt: resolveAsset("asset://ai-processing").alt
            },
            {
              id: "02",
              title: "Ultra-Low Power",
              description: "Advanced power management delivering 10x better performance per watt",
              imageSrc: resolveAsset("asset://chip-manufacturing").url,
              imageAlt: resolveAsset("asset://chip-manufacturing").alt
            },
            {
              id: "03",
              title: "Neural Acceleration",
              description: "Dedicated neural processing units for lightning-fast AI inference",
              imageSrc: resolveAsset("asset://neural-network").url,
              imageAlt: resolveAsset("asset://neural-network").alt
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="AI Processor Solutions"
          description="Cutting-edge processors designed for every AI application from edge to cloud."
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              name: "EdgeAI Pro",
              price: "$2,999",
              imageSrc: resolveAsset("asset://edge-computing").url,
              imageAlt: resolveAsset("asset://edge-computing").alt
            },
            {
              id: "2",
              name: "QuantumCore Enterprise",
              price: "$12,999",
              imageSrc: resolveAsset("asset://quantum-chip").url,
              imageAlt: resolveAsset("asset://quantum-chip").alt
            },
            {
              id: "3",
              name: "AutoAI Drive",
              price: "$5,999",
              imageSrc: resolveAsset("asset://automotive-ai").url,
              imageAlt: resolveAsset("asset://automotive-ai").alt
            },
            {
              id: "4",
              name: "DataCenter Titan",
              price: "$24,999",
              imageSrc: resolveAsset("asset://datacenter-chip").url,
              imageAlt: resolveAsset("asset://datacenter-chip").alt
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Performance Metrics"
          description="Industry-leading performance that speaks for itself."
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "10x",
              title: "Performance",
              description: "Better performance per watt than traditional processors",
              icon: Zap
            },
            {
              id: "2",
              value: "50%",
              title: "Reduction",
              description: "Lower latency for real-time AI applications",
              icon: Timer
            },
            {
              id: "3",
              value: "100+",
              title: "Customers",
              description: "Leading companies trust our technology",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Leadership Team"
          description="World-class experts driving the future of AI processing."
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Dr. Sarah Chen",
              role: "Founder & CEO",
              imageSrc: resolveAsset("asset://founder-ceo").url,
              imageAlt: resolveAsset("asset://founder-ceo").alt,
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Chief Technology Officer",
              imageSrc: resolveAsset("asset://cto").url,
              imageAlt: resolveAsset("asset://cto").alt,
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "3",
              name: "Dr. James Kim",
              role: "VP of Engineering",
              imageSrc: resolveAsset("asset://vp-engineering").url,
              imageAlt: resolveAsset("asset://vp-engineering").alt,
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Trusted by Industry Leaders"
          description="See what our customers say about our AI processing solutions."
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "David Wilson",
              role: "CTO, AutoTech Solutions",
              testimonial: "ChipAI's processors have revolutionized our autonomous vehicle systems. The real-time performance is incredible.",
              imageSrc: resolveAsset("asset://testimonial-1").url,
              imageAlt: resolveAsset("asset://testimonial-1").alt
            },
            {
              id: "2",
              name: "Lisa Martinez",
              role: "VP Engineering, CloudAI",
              testimonial: "The power efficiency gains we've achieved with ChipAI processors have reduced our data center costs by 40%.",
              imageSrc: resolveAsset("asset://testimonial-2").url,
              imageAlt: resolveAsset("asset://testimonial-2").alt
            },
            {
              id: "3",
              name: "Alex Thompson",
              role: "Founder, EdgeVision",
              testimonial: "Finally, processors that can adapt to our changing AI workloads. ChipAI has enabled applications we never thought possible.",
              imageSrc: resolveAsset("asset://testimonial-3").url,
              imageAlt: resolveAsset("asset://testimonial-3").alt
            },
            {
              id: "4",
              name: "Rachel Foster",
              role: "Director of Operations, DataCore",
              testimonial: "The performance per watt improvement is remarkable. ChipAI processors are the future of AI computing.",
              imageSrc: resolveAsset("asset://testimonial-4").url,
              imageAlt: resolveAsset("asset://testimonial-4").alt
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Industry Partners"
          description="Trusted by leading technology companies worldwide."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            resolveAsset("asset://nvidia-logo").url,
            resolveAsset("asset://intel-logo").url,
            resolveAsset("asset://amd-logo").url,
            resolveAsset("asset://qualcomm-logo").url,
            resolveAsset("asset://broadcom-logo").url
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your AI Applications?"
          description="Contact our team to learn how ChipAI processors can accelerate your artificial intelligence projects."
          inputPlaceholder="Enter your email"
          buttonText="Request Demo"
          termsText="By clicking Request Demo you agree to our Terms and Conditions."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                { label: "EdgeAI Pro", href: "products" },
                { label: "QuantumCore", href: "products" },
                { label: "AutoAI Drive", href: "products" },
                { label: "DataCenter Titan", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Team", href: "team" },
                { label: "Careers", href: "https://careers.chipai.com" },
                { label: "News", href: "https://blog.chipai.com" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "https://docs.chipai.com" },
                { label: "Support", href: "https://support.chipai.com" },
                { label: "Community", href: "https://community.chipai.com" },
                { label: "Downloads", href: "https://downloads.chipai.com" }
              ]
            }
          ]}
          copyrightText="© 2025 ChipAI. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}