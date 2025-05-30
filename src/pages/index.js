import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ServicesSection from '../components/ServicesSection';
import WhyHueneuSection from '../components/WhyHueneuSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const siteTitle = "Hueneu Studio - Designs that whisper loud stories.";
  const siteDescription = "Hueneu Studio: Where stories find their aesthetic. We craft visual narratives, branding, packaging, and more.";
  const siteUrl = "https://www.hueneu.com"; // Replace with your actual domain
  const ogImageUrl = `${siteUrl}/og-image.jpg`; // Replace with your actual OG image path

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImageUrl} />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={ogImageUrl} />

        {/* Viewport for responsive design (Next.js usually handles this, but good to be explicit if needed) */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        {/* Add other meta tags like theme-color, apple-touch-icon, etc. if needed */}
      </Head>
      <main>
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <WhyHueneuSection />
        <ContactSection />
      </main>
    </>
  );
}
