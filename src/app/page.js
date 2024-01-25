"use client";
import Blog from "@/components/Blog/Blog";
import Foodsection from "@/components/Foodsection/Foodsection";
import Foodslider from "@/components/Foodslider/Foodslider";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Foodslider />
      <Foodsection />
      <Blog />
    </>
  );
}
