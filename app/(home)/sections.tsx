import { FeaturesSectionWithHoverEffects } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { Footer } from "@/components/home/footer";
import { UsedBySection } from "@/components/home/usedby";
import { VirginVsChad } from "@/components/home/virgin-vs-chad";
import { CodeFight } from "@/components/home/code-fight";
import { Migration } from "@/components/home/migration";
import * as motion from "motion/react-client";
import OpenSource from "@/components/home/github";
import { config } from "@/app.config";

const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function HomeSections() {
  return (
    <>
      {/* Concrete proof first */}
      <AnimatedSection>
        <CodeFight />
      </AnimatedSection>

      {/* What you get */}
      <AnimatedSection delay={0.1}>
        <FeaturesSectionWithHoverEffects />
      </AnimatedSection>

      {/* Migration patterns — bridge from that other lib's mental model */}
      <AnimatedSection delay={0.15}>
        <Migration />
      </AnimatedSection>

      {/* Meme comparison */}
      <AnimatedSection delay={0.15}>
        <VirginVsChad />
      </AnimatedSection>

      {/* Social proof — devs */}
      <AnimatedSection delay={0.2}>
        <Testimonials />
      </AnimatedSection>

      {/* Social proof — bots in the wild */}
      <AnimatedSection delay={0.3}>
        <UsedBySection />
      </AnimatedSection>

      {/* OSS stats */}
      <AnimatedSection delay={0.4}>
        <OpenSource repository={config.repository} />
      </AnimatedSection>

      {/* CTA close */}
      <AnimatedSection delay={0.5}>
        <Footer />
      </AnimatedSection>
    </>
  );
}
