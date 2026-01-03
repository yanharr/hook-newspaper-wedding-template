import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoverSection from "@/components/wedding/CoverSection";
import NewsTicker from "@/components/wedding/NewsTicker";
import ProfileSection from "@/components/wedding/ProfileSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import EventDetailsSection from "@/components/wedding/EventDetailsSection";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import GiftSection from "@/components/wedding/GiftSection";
import WishesSection from "@/components/wedding/WishesSection";
import Footer from "@/components/wedding/Footer";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import BagasPhoto from "../../public/photos/bagas.png";
import NadiaPhoto from "../../public/photos/nadia.png";
import NbBlack from "../../public/photos/NBtypography Black.png";

interface Wish {
  name: string;
  message: string;
  date?: string;
}

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleRSVPSubmit = (data: {
    name: string;
    attendance: string;
    guests: number;
    wishes: string;
  }) => {
    if (data.wishes) {
      const newWish: Wish = {
        name: data.name,
        message: data.wishes,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      };
      setWishes((prev) => [newWish, ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>Nadia & Bagas | Wedding Invitation</title>
      <meta
        name="description"
        content="You are cordially invited to celebrate the wedding of Nadia Utami and Bagas Nugraha on Februari 14, 2026."
      />

      {/* Cover Section - Locked until opened */}
      <AnimatePresence>
        {!isOpen && <CoverSection onOpen={handleOpen} />}
      </AnimatePresence>

      {/* Main Content - Revealed after opening */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* News Ticker */}
            <NewsTicker />

            {/* Main Content with top padding for ticker */}
            <main className="pt-12">
              {/* Section Divider - Masthead */}
              <motion.header
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="py-8 md:py-12 text-center"
              >
                <div className="container max-w-4xl mx-auto px-6">
                  <div className="divider-double mb-6" />
                  <h1 className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-ink-muted mb-2">
                    The Wedding Chronicle
                  </h1>
                  <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">
                    Edisi Spesial
                  </p>
                  <div className="divider-thick" />
                </div>
              </motion.header>

              {/* Hero Section */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="py-12 md:py-20 text-center"
              >
                <div className="container max-w-4xl mx-auto px-6">
                  <p className="caption-text mb-4">Kabar Bahagia</p>
                  <h2 className="headline-primary mb-6">Nadia & Bagas</h2>
                  <p className="subheadline text-2xl md:text-3xl mb-4">
                    akan melangsungkan pernikahan
                  </p>
                  <div className="divider-ornate">
                    <img src={NbBlack} alt="Nadia & Bagas" className="mx-auto mt-4 w-30 md:w-64 lg:w-50" />
                  </div>
                  <p className="font-display text-xl md:text-2xl text-ink-light mt-4">
                    14 Februari 2026
                  </p>
                  <p className="font-display text-lg text-ink-light">
                    Sebuah Hari yang Dinanti
                  </p>
                </div>
              </motion.section>

              <div className="container max-w-5xl mx-auto px-6">
                <div className="divider-thin" />
              </div>

              {/* Bride Profile */}
              <ProfileSection
                name="Nadia Utami"
                title="Mempelai Wanita"
                parentInfo="Putri dari Bapak Agus Hermawan & Ibu Ayu Sumiyati"
                description="Nadia dikenal sebagai pribadi yang hangat dan sederhana. Kecintaannya pada seni dan pengalaman baru membentuk banyak cerita dalam hidupnya, termasuk pertemuannya dengan Bagas. Dengan penuh rasa syukur, ia siap memulai perjalanan baru bersama."
                imageUrl={NadiaPhoto}
              />

              <div className="container max-w-5xl mx-auto px-6">
                <div className="divider-thin" />
              </div>

              {/* Groom Profile */}
              <ProfileSection
                name="Bagas Hermawan"
                title="Mempelai Pria"
                parentInfo="Putra dari Bapak Dadang Karsidi & Ibu Dian Purnama"
                description="Bagas dikenal sebagai pribadi yang hangat dan penuh perhatian. Ia menjunjung tinggi keluarga dan selalu hadir untuk Nadia dalam setiap langkah. Dengan penuh rasa syukur, ia siap melangkah ke masa depan bersama dan menjadikan kebersamaan mereka sebagai komitmen seumur hidup."
                imageUrl={BagasPhoto}
                reverse
              />

              <div className="container max-w-5xl mx-auto px-6">
                <div className="divider-thin" />
              </div>

              {/* Love Story */}
              <LoveStorySection />

              {/* Event Details */}
              <EventDetailsSection />

              <div className="container max-w-5xl mx-auto px-6">
                <div className="divider-thin" />
              </div>

              {/* Gallery */}
              <GallerySection />

              {/* RSVP */}
              <RSVPSection onSubmit={handleRSVPSubmit} />

              {/* Gift Section */}
              <GiftSection />

              {/* Wishes Display */}
              <WishesSection wishes={wishes} />

              {/* Footer */}
              <Footer />
            </main>
          </motion.div>
        )}
      <MusicPlayer />
      </AnimatePresence>
    </div>
  );
};

export default Index;
