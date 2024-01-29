import Form from "@/components/blog/blog";
import Cards from "@/components/cards/cards";
import Footer from "@/components/footer/footer";
import ResponsiveAppBar from "@/components/navbar/navbar";
import Image from "next/image";
import dog from "../../public/dog.jpg";
import think from "../../public/dogthink.png";

export default function Home() {
  return (
    <main className="principal">
      <ResponsiveAppBar />
      <div
        style={{
          display: "flex",
          marginBottom: "10rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form />
        <Image height={350} width={350} alt="animal" src={dog} />
        <div style={{ marginBottom: "20rem", marginTop: "5rem" }}>
          <Image height={250} width={250} alt="animal" src={think} />
        </div>
      </div>
      <div className="involvedFooter">
        <Footer />
      </div>
    </main>
  );
}
