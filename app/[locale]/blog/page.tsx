import { setRequestLocale } from "next-intl/server";
import BlogPage from "@/components/pages/BlogPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Blog({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BlogPage />;
}

