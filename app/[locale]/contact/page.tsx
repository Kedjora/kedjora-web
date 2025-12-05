import { setRequestLocale } from "next-intl/server";
import ContactPage from "@/components/pages/ContactPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPage />;
}

