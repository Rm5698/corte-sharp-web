import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// O site é HTML/CSS/JS puro em /public (index.html, style.css, script.js, assets/).
// Esta rota apenas encaminha a raiz para esse arquivo.
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Barbearia Hora do Corte — Barbearia em Praia Grande, SP" },
      {
        name: "description",
        content:
          "Barbearia Hora do Corte em Praia Grande (Tupiry): corte, barba, sobrancelha e descoloração. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Barbearia Hora do Corte — Praia Grande, SP" },
      {
        property: "og:description",
        content: "Cortes modernos, barba e acabamento premium. Agende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0d0f12" }}>
      <iframe
        src="/index.html"
        title="Barbearia Hora do Corte"
        style={{ border: 0, width: "100%", height: "100vh" }}
      />
    </div>
  );
}
