"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram, Facebook } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Chi siamo", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Gallery", id: "gallery" },
            { name: "Contatti", id: "contact" }
          ]}
          brandName="Parnaso"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Parnaso"
          description="Un'esperienza unica nel cuore dei Parioli - Da martedì a domenica dalle 7:00 all'1:00"
          buttons={[
            { text: "Guarda il menu", href: "menu" },
            { text: "Prenota", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522309131-qhuga4ga.jpg",
              imageAlt: "Ristorante Parnaso interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522309782-569s31mp.jpg",
              imageAlt: "Parnaso restaurant exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522310434-44cxctib.jpg",
              imageAlt: "Chef preparing Italian cuisine"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Chi siamo"
          description="Situato in Piazza delle Muse 22 nel prestigioso quartiere dei Parioli a Roma, il Ristorante Caffè Parnaso offre un'esperienza culinaria unica che combina tradizione italiana e innovazione moderna. Il nostro ambiente elegante e accogliente vi accoglie per momenti indimenticabili dalla colazione alla cena."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="I Nostri Servizi"
          description="Scopri tutto quello che Parnaso ha da offrire"
          tag="Servizi"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Colazione & Caffè",
              description: "Inizia la giornata con i nostri cornetti freschi e caffè di alta qualità, serviti dalle 7:00 del mattino",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522309131-qhuga4ga.jpg",
              imageAlt: "Colazione italiana"
            },
            {
              id: "02",
              title: "Cucina Tradizionale",
              description: "Piatti della tradizione romana e italiana preparati con ingredienti freschi e ricette autentiche",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522311232-qrcholyt.jpg",
              imageAlt: "Piatti tradizionali"
            },
            {
              id: "03",
              title: "Atmosfera Elegante",
              description: "Un ambiente raffinato nel cuore dei Parioli, perfetto per cene romantiche e incontri di lavoro",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522309782-569s31mp.jpg",
              imageAlt: "Ambiente elegante"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Le Nostre Specialità"
          description="Scopri i piatti che rendono speciale la nostra cucina"
          tag="Menu"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "pasta",
              name: "Pasta all'Amatriciana",
              price: "€16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522311232-qrcholyt.jpg",
              imageAlt: "Pasta all'Amatriciana"
            },
            {
              id: "pizza",
              name: "Pizza Margherita",
              price: "€12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522311910-b8gbu9by.jpg",
              imageAlt: "Pizza Margherita"
            },
            {
              id: "tiramisu",
              name: "Tiramisù della Casa",
              price: "€8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522312621-h58vza4u.jpg",
              imageAlt: "Tiramisù"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Cosa Dicono i Nostri Clienti"
          description="Le recensioni di chi ha vissuto l'esperienza Parnaso"
          tag="Recensioni"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marco",
              handle: "@marco_food",
              testimonial: "Un ristorante eccellente nel cuore dei Parioli. La pasta all'amatriciana è semplicemente perfetta e il servizio impeccabile.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522313340-hmlhzygt.jpg",
              imageAlt: "Marco cliente soddisfatto"
            },
            {
              id: "2",
              name: "Giulia",
              handle: "@giulia_roma",
              testimonial: "Atmosfera elegante e cibo autentico. Perfetto per una cena romantica o un pranzo di lavoro. Lo consiglio vivamente!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522314394-eyma2twu.jpg",
              imageAlt: "Giulia cliente felice"
            },
            {
              id: "3",
              name: "Alessandro",
              handle: "@ale_gourmet",
              testimonial: "La qualità degli ingredienti è eccezionale. Ogni piatto racconta la tradizione italiana con un tocco moderno.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522314972-60shzte2.jpg",
              imageAlt: "Alessandro cliente soddisfatto"
            },
            {
              id: "4",
              name: "Francesca",
              handle: "@francy_foodie",
              testimonial: "Il tiramisù della casa è il migliore che abbia mai assaggiato. Un posto magico che ti fa sentire a casa.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522315717-k45i2ywe.jpg",
              imageAlt: "Francesca cliente felice"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Ci Trovate Anche Su"
          description="Seguici sulle principali piattaforme di recensioni e prenotazioni"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522316342-80vwaepj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522317252-qklp9sr3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522318241-ijhc3hye.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522318932-46b320ab.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522319421-9w13ogsg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522319881-pffcvu08.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522320819-5t0o54mx.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contatti"
          title="Prenota il Tuo Tavolo"
          description="Siamo aperti da martedì a domenica dalle 7:00 all'1:00. Prenota il tuo tavolo o contattaci per informazioni."
          inputPlaceholder="La tua email"
          buttonText="Prenota"
          termsText="Ti contatteremo per confermare la prenotazione. Piazza delle Muse 22, Roma - booking@parnasoroma.it"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763522321309-gjcubb0z.jpg"
          imageAlt="Ristorante Parnaso - contatti e prenotazioni"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Parnaso"
          copyrightText="© 2024 Ristorante Caffè Parnaso - Roma"
          columns={[
            {
              title: "Ristorante",
              items: [
                { label: "Chi siamo", href: "about" },
                { label: "Menu", href: "menu" },
                { label: "Gallery", href: "gallery" }
              ]
            },
            {
              title: "Servizi",
              items: [
                { label: "Prenotazioni", href: "contact" },
                { label: "Eventi Privati", href: "contact" },
                { label: "Catering", href: "contact" }
              ]
            },
            {
              title: "Contatti",
              items: [
                { label: "Piazza delle Muse 22", href: "contact" },
                { label: "booking@parnasoroma.it", href: "mailto:booking@parnasoroma.it" },
                { label: "Orari: Mar-Dom 7:00-1:00", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Seguici su Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Seguici su Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}