import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "/components/Navbar.jsx";
import Footer from "/components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello World!</h1>
      <Footer />
    </div>
  );
}
