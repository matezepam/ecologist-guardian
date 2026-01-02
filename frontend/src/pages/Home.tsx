import React from "react";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div className="font-geom bg-gray-50 w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero principal: dos columnas, centrado y responsive */}
      <section className="flex flex-col md:flex-row gap-12 items-center justify-center px-6 md:px-12 py-12">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center md:items-start gap-6 flex-1 animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              src="/images/tree-img.jpg"
              alt="Motivación"
              className="w-36 h-36 md:w-44 md:h-44 rounded-xl shadow-md object-cover"
            />
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-lg font-semibold text-gray-800">
                Cuida el medio ambiente
              </p>
              <p className="text-gray-700 font-medium text-center md:text-left">
                Únete al equipo y sé parte del cambio
              </p>
            </div>
          </div>

          {/* Circulitos verticales de perfiles */}
          <div className="flex flex-col items-center md:items-start gap-3 mt-4">
            <img
              src="/images/profile1.jpg"
              alt="Miembro 1"
              className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="/images/profile2.jpg"
              alt="Miembro 2"
              className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform"
            />
            <img
              src="/images/profile3.jpg"
              alt="Miembro 3"
              className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-color4 mb-4 text-center md:text-left">
            Guardian te ayuda a cuidar el planeta
          </h2>
          <img
            src="/images/guardian-hero.png"
            alt="Guardian Hero"
            className="w-full max-w-sm md:max-w-md rounded-3xl shadow-lg my-4 hover:scale-105 transition-transform"
          />
          <p className="text-lg text-gray-700 max-w-xl text-center md:text-left">
            Monitorea tu consumo de agua, luz y plástico, recibe consejos
            prácticos y forma parte de nuestra comunidad para generar un
            impacto positivo en el medio ambiente.
          </p>
        </div>
      </section>

      {/* Sección Beneficios */}
      <section className="bg-gray-100 text-gray-900 text-center py-16 mt-16 rounded-3xl animate-fadeIn">
        <h2 className="text-3xl mb-10 text-color4">Beneficios</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-color3 text-white rounded-lg p-6 w-60 hover:scale-105 transition-transform">
            <h3 className="text-xl mb-2">Ahorro de agua</h3>
            <p>Monitorea tu consumo y reduce el desperdicio de agua.</p>
          </div>
          <div className="bg-color2 text-white rounded-lg p-6 w-60 hover:scale-105 transition-transform">
            <h3 className="text-xl mb-2">Ahorro de energía</h3>
            <p>Controla tu consumo de luz y optimiza tus gastos.</p>
          </div>
          <div className="bg-color5 text-white rounded-lg p-6 w-60 hover:scale-105 transition-transform">
            <h3 className="text-xl mb-2">Menos plástico</h3>
            <p>Registra tu consumo de plástico y contribuye al medio ambiente.</p>
          </div>
        </div>
      </section>

      {/* Sección Consejos 1,2,3 */}
      <section className="py-16 text-gray-900 animate-fadeIn">
        <h2 className="text-3xl mb-10 text-color4 text-center">
          Consejos para cuidar el planeta
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg w-72 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              1. Reduce el consumo de agua
            </h3>
            <p>Apaga grifos, reutiliza agua y monitorea tu consumo diario.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg w-72 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">2. Ahorra energía</h3>
            <p>Usa bombillas LED, desconecta aparatos y aprovecha la luz natural.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg w-72 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">3. Menos plástico</h3>
            <p>Utiliza bolsas reutilizables y evita productos de un solo uso.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
