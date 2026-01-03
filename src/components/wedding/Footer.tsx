import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NbWhite from "../../../public/photos/NBtypography.png"

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer ref={ref} className="py-12 bg-ink text-paper">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Initials */}
          <div className="mb-6">
            <img src={NbWhite} alt="Nadia & Bagas" className="mx-auto mt-4 w-48 md:w-64 lg:w-72" />
          </div>

          {/* Date */}
          <p className="font-display text-lg mb-2">14 Februari 2026</p>

          {/* Divider */}
          <div className="w-24 h-px bg-paper/30 mx-auto my-6" />

          {/* Tagline */}
          <p className="text-sm text-paper/60 tracking-widest uppercase mb-4">
            Dicetak dengan cinta
          </p>

          {/* Credits */}
          <p className="text-xs text-paper/40">
            The Wedding Chronicle • Edisi Khusus
          </p>
          <p className="text-xs text-paper/40 mt-2">
            Kawanika Wedding Invitation
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;