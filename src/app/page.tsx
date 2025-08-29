"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MemePulse Logo"
        leftButtonText="Menu"
        rightButtonText="Contact"
        className="sticky top-0 z-10"
      />

      <TokenBillboardHero
        title="Welcome to MemePulse"
        subtitle="Explore the vibrant world of meme coins"
        contractAddress="0x1234567890"
        copyButtonText="Copy Address"
        copiedText="Address Copied!"
      />

      <SocialsAbout
        title="About MemePulse"
        descriptions={[
          "MemePulse is a community-driven meme coin.",
          "Join us in the fun and embrace the meme culture!"
        ]}
      />

      <HowToBuy2D
        variant="simple"
      />

      <BigNumberTokenomics
        title="Tokenomics"
        description="Discover the numbers behind MemePulse."
        kpiItems={[
          { value: "100M", description: "Total Supply", longDescription: "Total supply of MemePulse coins", icon: { name: 'DollarSign', size: 24 } },
          { value: "50M", description: "Market Cap", longDescription: "Current Market Capitalization", icon: { name: 'TrendingUp', size: 24 } },
          { value: "200k", description: "Holders", longDescription: "Current number of holders of MemePulse", icon: { name: 'Users', size: 24 } }
        ]}
      />

      <BentoFAQ
        items={[
          { title: "What is MemePulse?", content: "MemePulse is a playful meme coin designed to engage and entertain!" },
          { title: "How do I buy MemePulse?", content: "You can buy MemePulse easily on any decentralized exchange." },
          { title: "What are the tokenomics?", content: "MemePulse features a deflationary model with rewards for holders." },
          { title: "How can I learn more?", content: "Join our community on social media for updates!" }
        ]}
      />

      <FooterLogoEmphasisBackgroundGradient
        logoSrc="/images/logo.svg"
        logoAlt="MemePulse Logo"
        logoText="MemePulse"
        items={[
          { label: "Privacy Policy", onClick: () => alert('Privacy Policy Clicked') },
          { label: "Terms of Service", onClick: () => alert('Terms of Service Clicked') },
          { label: "Contact Us", onClick: () => alert('Contact Us Clicked') }
        ]}
        className="footer"
        gradientStyle={{ background: 'linear-gradient(135deg, rgba(255,90,138,0.9), rgba(0,140,255,0.9))' }}
      />
    </>
  );
}