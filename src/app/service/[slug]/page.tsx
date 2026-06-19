import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, getServices } from "@/lib/content";
import { MdxBody } from "@/components/ui/mdx-body";

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.data.title, description: `${service.data.title} services by Clavo.` };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { data, body } = service;

  return (
    <>
      <section className="section inner-hero">
        <div className="layout-blockcontainer container container">
          <div className="top-hero-content-wrapper reveal">
            <h1 className="hero-title single-page">{data.title}</h1>
            <a className="hero-button-wrapper inline-block" href="#Scroll">
              <img alt="" className="scroll-button-icon" loading="lazy" src="/assets/images/Home-Icon-.svg" />
              <div className="hero-button-text">Scroll</div>
            </a>
          </div>
          <div className="service-single-content-wrapper" id="Scroll">
            <div className="image-wrap full-width">
              <img alt={data.title} className="view-image" loading="lazy" src={data.heroImage} />
              <div className="view-image-overlay"></div>
            </div>
            <div className="service-rich-text-wrapper">
              <div className="service-single-rich-text richtext reveal">
                <MdxBody source={body} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
