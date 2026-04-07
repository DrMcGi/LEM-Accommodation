import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { PropertyShowcaseCard } from "@/components/property-showcase-card";
import { properties } from "@/data/properties";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lem-accommodation.vercel.app";

export const metadata: Metadata = {
  title: "Accommodation in Polokwane and Lebowakgomo",
  description:
    "Browse accommodation in Polokwane and Lebowakgomo with LEM Accommodation, including monthly rooms, bachelor-style units, and a secure family home in Bendor.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "LEM Accommodation",
        url: siteUrl,
        description:
          "Monthly accommodation listings in Polokwane and Lebowakgomo with direct inquiries and clear pricing.",
      },
      {
        "@type": "Organization",
        name: "LEM Accommodation",
        url: siteUrl,
        logo: `${siteUrl}/images/LEM_Logo.png`,
        areaServed: ["Polokwane", "Lebowakgomo", "Limpopo"],
      },
      {
        "@type": "ItemList",
        name: "LEM Accommodation listings",
        itemListElement: properties.map((property, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}/properties/${property.id}`,
          name: property.name,
          description: property.summary,
        })),
      },
    ],
  };

  return (
    <main className="relative isolate overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[linear-gradient(125deg,#0b4f4a_0%,#0f766e_45%,#f59e0b_100%)] p-8 text-white shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-amber-100/35 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-100">LEM Accommodation</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                Find Your Next Home in Lebowakgomo or Polokwane
              </h1>
              <p className="mt-4 max-w-2xl text-teal-50">
                Explore monthly accommodation in Lebowakgomo and Polokwane, from affordable bachelor-style units and rooms to a premium family home in a secure estate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href="#properties"
                  className="rounded-xl bg-white px-4 py-2 text-teal-900 transition hover:bg-amber-50"
                >
                  View Properties
                </a>
                <a
                  href="#inquire"
                  className="rounded-xl border border-white/50 px-4 py-2 transition hover:bg-white/15"
                >
                  Submit Inquiry
                </a>
              </div>
            </div>

            <div className="lem-logo-stage mx-auto w-full max-w-sm">
              <div className="lem-logo-aura" />
              <div className="lem-logo-frame">
                <Image
                  src="/images/LEM_Logo.png"
                  alt="LEM Accommodation logo"
                  width={420}
                  height={420}
                  priority
                  className="lem-logo-image"
                />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-amber-100/95">
                Trusted Accommodation Partner
              </p>
            </div>
          </div>
        </div>

        <section id="properties" className="mt-10 grid gap-6 md:grid-cols-2">
          {properties.map((property) => (
            <PropertyShowcaseCard key={property.id} property={property} />
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm sm:p-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Accommodation in Polokwane and Lebowakgomo, built around real monthly living.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              If you are searching for accommodation in Polokwane, accommodation in Lebowakgomo, apartments in Polokwane, or apartments in Lebowakgomo, LEM Accommodation gives you a direct way to explore current rental options and inquire without delays.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-5">
              <h3 className="text-xl font-semibold text-stone-900">Lebowakgomo monthly rooms and bachelor-style units</h3>
              <p className="mt-3 text-stone-700">
                The Lebowakgomo Unit F property is designed for tenants who want affordable monthly accommodation with practical essentials such as prepaid electricity, Wi-Fi, secure access, and easy day-to-day convenience.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5">
              <h3 className="text-xl font-semibold text-stone-900">Polokwane rental living close to Bendor amenities</h3>
              <p className="mt-3 text-stone-700">
                In Polokwane, our Woodlands Estate home offers secure family accommodation near Bendor shopping, schools, healthcare, and fitness facilities for tenants who need space, access, and a stronger residential setting.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <InquiryForm properties={properties} />
        </section>

        {process.env.NODE_ENV !== "production" ? (
          <section className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-5 text-sm text-stone-700 shadow-sm">
            <p>
              Internal leads dashboard: <a href="/admin/inquiries" className="font-semibold text-teal-700 hover:underline">/admin/inquiries</a>
            </p>
            <p className="mt-1">
              This starter stores inquiries in a local file at <span className="font-medium">storage/inquiries.json</span>.
            </p>
          </section>
        ) : null}
      </section>
    </main>
  );
}
