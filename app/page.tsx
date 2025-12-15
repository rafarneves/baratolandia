import {
  ShoppingCart,
  DollarSign,
  Tag,
  Shield,
  Users,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const stores = [
  { name: "Magazine Luiza", imgUrl: "/magazine-luiza-logo.png", link: "https://www.magazinevoce.com.br/magazinein_3131981/" },
  { name: "Amazon", imgUrl: "/amazon-logo.png", link: "https://amzn.to/44r0mXy" },
  { name: "Mercado Livre", imgUrl: "/Logotipo_MercadoLivre.png", link: "https://mercadolivre.com/sec/1Dm1jpZ" },
  { name: "Shopee", imgUrl: "/shopee-logo.png", link: "https://s.shopee.com.br/10vsVxrBiW" },
  { name: "AliExpress", imgUrl: "/aliexpress-logo.png", link: "https://s.click.aliexpress.com/e/_c4nXNiqN" },
  { name: "Shein", imgUrl: "/shein.png" },
  {
    name: "Temu",
    imgUrl: "/temu-logo_brandlogos.net_shd2g-512x512.png",
  },
  { name: "Adidas", imgUrl: "/Adidas-Logo.wine.png", link: "https://tidd.ly/48QMlUq" },
  { name: "Nike", imgUrl: "/Nike-Logo.png", link: "https://tidd.ly/4qc4W4l" },
  { name: "Americanas", imgUrl: "/americanas-logo-1.png" },
  { name: "Carrefour", imgUrl: "/carrefour.png" },
  { name: "Netshoes", imgUrl: "/Novo_Logo_Netshoes.png" },
  { name: "Centauro", imgUrl: "/centauro-logo-01.png" },
  { name: "Casas Bahia", imgUrl: "/CB.png" },
  { name: "Electrolux", imgUrl: "/eletrolux.png" },
  { name: "LG", imgUrl: "/lg.png", link: "https://tidd.ly/4aNite6" },
  { name: "Samsung", imgUrl: "/samsung.png" },
  { name: "Drogaria São Paulo", imgUrl: "/drogasaopaulo.png" },
];

export default function BaratolandiaPage() {
  const whatsappLink = "https://chat.whatsapp.com/Lv3qJAZw3pK3se9RJcSwxG";
  // Troque pelo link do seu canal/grupo no Telegram
  const telegramLink = "https://t.me/baratolandia";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary px-4 py-16 sm:px-6 sm:py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Image
              src="/baratolandialogo.png"
              alt="Baratolândia Logo"
              width={280}
              height={280}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 text-balance leading-tight px-2">
            Quer economizar dinheiro todos os dias?
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-primary-foreground/90 mb-8 sm:mb-10 max-w-3xl mx-auto text-pretty leading-relaxed px-2">
            No Baratolândia você encontra promoções reais, produtos baratos e
            ofertas que valem a pena.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 h-auto font-bold shadow-xl w-full max-w-md mx-auto animate-pulse-scale hover:animate-none"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Entrar no grupo Baratolândia{" "}
                <FaWhatsapp className="sm:size-5 md:size-7" />
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              className="mt-4 bg-[#229ED9] text-white hover:bg-[#1E8FC7] text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 h-auto font-bold shadow-xl w-full max-w-md mx-auto animate-pulse-scale hover:animate-none"
            >
              <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                Entrar no Telegram{" "}
                <FaTelegramPlane className="sm:size-5 md:size-7" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Baratolândia */}
      <section className="px-6 py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-balance">
            O que é o Baratolândia?
          </h2>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O Baratolândia é um grupo onde reunimos promoções verdadeiras de
              produtos do dia a dia.
              <br />
              <span className="font-semibold text-foreground">
                Nada de golpe, nada de enrolação.
              </span>
              <br />
              Só ofertas boas, preços baixos e oportunidades pra economizar.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            Como funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Você entra no grupo
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ao entrar, você passa a receber promoções selecionadas.
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tag className="w-8 h-8 text-primary" />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                A gente filtra as ofertas
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Só postamos o que realmente vale a pena.
              </p>
            </Card>

            <Card className="p-8 text-center border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Você escolhe se quer comprar
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sem obrigação, sem spam e sem mensalidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="px-6 py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
            Para quem é o grupo?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, text: "Pessoas que querem economizar" },
              { icon: Tag, text: "Quem gosta de boas promoções" },
              { icon: ShoppingCart, text: "Quem compra pela internet" },
              { icon: Users, text: "Pessoas mais novas e também mais velhas" },
              {
                icon: TrendingDown,
                text: "Quem quer pagar mais barato nas coisas do dia a dia",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="px-6 py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">
            É seguro?
          </h2>
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
              Sim.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O grupo é{" "}
              <span className="font-semibold text-foreground">gratuito</span>,
              não pedimos dados pessoais e você pode sair quando quiser.
              <br />O objetivo é ajudar pessoas a economizar.
            </p>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="px-6 py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance">
            Economize em mais de 200 lojas
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12">
            Receba ofertas das principais lojas do Brasil e do mundo!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {stores.map((store) => {
              const image = (
                <Image
                  src={store.imgUrl || "/placeholder.svg"}
                  alt={`Logo ${store.name}`}
                  width={160}
                  height={80}
                  className="w-full h-auto object-contain max-h-12 md:max-h-16"
                />
              );

              return (
                <div
                  key={store.name}
                  className="bg-card border border-border rounded-xl p-4 md:p-6 flex items-center justify-center hover:border-primary transition-colors hover:shadow-md"
                >
                  {store.link ? (
                    <a
                      href={store.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${store.name}`}
                      title={`Abrir ${store.name}`}
                      className="w-full h-full flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {image}
                    </a>
                  ) : (
                    image
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-32 bg-primary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 text-balance px-2">
            Não paga nada para entrar
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-primary-foreground/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-pretty px-2">
            Se você quer gastar menos e aproveitar boas ofertas, o Baratolândia
            é pra você.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 h-auto font-bold shadow-xl w-full max-w-md mx-auto animate-pulse-scale hover:animate-none"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Entrar no grupo Baratolândia{" "}
                <FaWhatsapp className="sm:size-5 md:size-7" />
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              className="mt-4 bg-[#229ED9] text-white hover:bg-[#1E8FC7] text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 h-auto font-bold shadow-xl w-full max-w-md mx-auto animate-pulse-scale hover:animate-none"
            >
              <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                Entrar no Telegram{" "}
                <FaTelegramPlane className="sm:size-5 md:size-7" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border px-4 sm:px-6 py-8 text-center">
        <p className="text-sm sm:text-base text-muted-foreground">
          © 2025 Baratolândia - Grupo de promoções e ofertas reais
        </p>
      </footer>
    </div>
  );
}
