import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

// 🖼️ Image List (12 images)
const IMAGES = [
  { id: 1, caption: "College day fit — Baxxer tee and campus vibes", photos: ["/gallery/1.jpg"] },
  { id: 2, caption: "Coffee stop between lectures", photos: ["/gallery/2.jpg"] },
  { id: 3, caption: "Travel day — packed bags and new places", photos: ["/gallery/3.jpg"] },
  { id: 4, caption: "Beach walk at sunset", photos: ["/gallery/4.jpg"] },
  { id: 5, caption: "Cafe corner, laptop open, code and caffeine", photos: ["/gallery/5.jpg"] },
  { id: 6, caption: "City stroll — street lights and sneakers", photos: ["/gallery/6.jpg"] },
  { id: 7, caption: "Mountain lookout — fresh air reset", photos: ["/gallery/7.jpg"] },
  { id: 8, caption: "Night drive playlist on repeat", photos: ["/gallery/8.jpg"] },
  { id: 9, caption: "Library grind — notes, books, and focus", photos: ["/gallery/9.jpg"] },
  { id: 10, caption: "Friends meetup — laughs and snapshots", photos: ["/gallery/10.jpg"] },
  { id: 11, caption: "Campus corridor — heading to class", photos: ["/gallery/11.jpg"] },
  { id: 12, caption: "Weekend escape — trains, tracks, and travel plans", photos: ["/gallery/12.jpg"] },
];

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Gallery() {
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) => setZoom({ img: post.photos[index], post, index });
  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        📷 My Gallery
      </motion.h2>

      {/* 🖼️ Image Grid */}
      <motion.div
        className="post-feed"
        variants={childVariants}
        initial="hidden"
        animate="visible"
      >
        {IMAGES.map((post) => (
          <motion.div
            key={post.id}
            className="post-card"
            variants={childVariants}
            whileHover={{ y: -4 }}
          >
            <div className="photo-grid single">
              {post.photos.map((src, i) => (
                <motion.div
                  key={i}
                  className="photo-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  onClick={() => openZoom(post, i)}
                >
                  <img src={src} alt={`gallery-${post.id}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoomed"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Navigation Buttons */}
            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Close Button */}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
