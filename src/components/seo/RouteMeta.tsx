import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type RouteMetaConfig = {
  title: string;
  description: string;
  locale: string;
  url: string;
};

const SITE_NAME = "Diversa Consultoria Socioambiental";
const OG_IMAGE_URL = "https://diversa-earth.lovable.app/og-image.png";
const FALLBACK_META: RouteMetaConfig = {
  title: "Diversa | Consultoria Socioambiental - Socioenvironmental Consultancy",
  description:
    "Diversa Consultoria Socioambiental. Traduzimos dados socioambientais complexos em impacto real. Soluções em dados, políticas públicas e engajamento comunitário para sustentabilidade.",
  locale: "pt_BR",
  url: "https://diversa.earth/",
};

const ROUTE_META: Record<string, RouteMetaConfig> = {
  "/": FALLBACK_META,
  "/pt": {
    title: "Diversa | Consultoria Socioambiental",
    description:
      "Diversa Consultoria Socioambiental. Traduzimos dados socioambientais complexos em impacto real com soluções em dados, políticas públicas e engajamento comunitário.",
    locale: "pt_BR",
    url: "https://diversa.earth/pt",
  },
  "/about": {
    title: "About Diversa | Socioenvironmental Consultancy",
    description:
      "Meet Diversa's multidisciplinary team and our experience turning complex sustainability data into actionable, long-term impact.",
    locale: "en_US",
    url: "https://diversa.earth/about",
  },
  "/pt/about": {
    title: "Quem Somos | Diversa Consultoria Socioambiental",
    description:
      "Conheça a equipe multidisciplinar da Diversa e nossa experiência em transformar dados complexos de sustentabilidade em impacto duradouro.",
    locale: "pt_BR",
    url: "https://diversa.earth/pt/about",
  },
  "/services": {
    title: "Services | Diversa Socioenvironmental Consultancy",
    description:
      "Conheça o portfólio de projetos da Diversa em soluções de dados, análise de políticas públicas e engajamento comunitário.",
    locale: "en_US",
    url: "https://diversa.earth/services",
  },
};

const upsertMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertCanonical = (href: string) => {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

export const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageMeta = ROUTE_META[pathname] ?? FALLBACK_META;

    document.title = pageMeta.title;

    upsertMetaTag('meta[name="description"]', {
      name: "description",
      content: pageMeta.description,
    });

    upsertMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: pageMeta.title,
    });

    upsertMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: pageMeta.description,
    });

    upsertMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: pageMeta.url,
    });

    upsertMetaTag('meta[property="og:locale"]', {
      property: "og:locale",
      content: pageMeta.locale,
    });

    upsertMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: OG_IMAGE_URL,
    });

    upsertMetaTag('meta[property="og:image:secure_url"]', {
      property: "og:image:secure_url",
      content: OG_IMAGE_URL,
    });

    upsertMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    upsertMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageMeta.title,
    });

    upsertMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: pageMeta.description,
    });

    upsertMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: OG_IMAGE_URL,
    });

    upsertCanonical(pageMeta.url);
  }, [pathname]);

  return null;
};
