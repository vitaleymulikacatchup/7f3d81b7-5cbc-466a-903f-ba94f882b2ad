"use client"
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
        className="bg-transparent sticky top-0"
        buttonClassName="bg-primary text-white"
      />
      <TokenBillboardHero
        title="Welcome to MemePulse!"
        subtitle="Dive into the world of meme coins"
        contractAddress="0x123...
        copyButtonText="Copy Address"
        copiedText="Address Copied!"
      />
      <SocialsAbout
        title="Connect with us"
        descriptions={['Join our community!', 'Follow us on social media!', 'Stay updated with our latest news.']}
      />
      <HowToBuy2D
        variant="simple"
      />
      <BigNumberTokenomics
        title="Tokenomics"
        description="Understanding our tokens.
        kpiItems={[
          { value: "10M", description: "Total Supply", longDescription: "Total number of tokens available.", icon: UserCircle },
          { value: "1M", description: "Tokens in Circulation", longDescription: "Currently active tokens.", icon: DollarSign },
          { value: "5M", description: "Merged Tasks", longDescription: "Tokens allocated to tasks.", icon: CheckCircle },
        ]}
      />
      <BentoFAQ
        items={[
          { title: "What is a meme coin?", content: "A cryptocurrency that is based on internet memes." },
          { title: "How can I buy MemePulse?", content: "You can buy MemePulse from popular exchanges." },
          { title: "Is it safe to invest?", content: "Like any investment, please do your own research." }
        ]}
      />
      <FooterLogoEmphasisBackgroundGradient
        logoSrc="/images/logo.svg"
        logoAlt="MemePulse Logo"
        logoText="MemePulse Team"
        items={[
          { label: "Privacy Policy", onClick: () => {/* handle click */} },
          { label: "Terms of Use", onClick: () => {/* handle click */} },
          { label: "Contact Us", onClick: () => {/* handle click */} },
        ]}
      />
    </>
  );
}
