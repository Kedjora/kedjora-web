import { setRequestLocale } from "next-intl/server";
import PortfolioPage from "@/components/pages/PortfolioPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Portfolio({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PortfolioPage />;
}

