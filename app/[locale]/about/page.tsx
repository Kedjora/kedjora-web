import { setRequestLocale } from "next-intl/server";
import AboutPage from "@/components/pages/AboutPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function About({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPage />;
}

