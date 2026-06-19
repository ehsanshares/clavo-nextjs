import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWork, getWorks } from "@/lib/content";
import { MdxBody } from "@/components/ui/mdx-body";

export function generateStaticParams() {
  return getWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return { title: work.data.title, description: `${work.data.type} — ${work.data.title}` };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const { data, body } = work;

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
          <div className="work-single-content-wrapper reveal">
            <div className="client-info-text-wrapper">
              <div className="works-info-text">Client:</div>
              <div className="client-info-text">{data.client}</div>
            </div>
            <div className="client-info-text-wrapper">
              <div className="works-info-text">Year:</div>
              <div className="client-info-text">{data.year}</div>
            </div>
            <div className="client-info-text-wrapper">
              <div className="works-info-text">Type:</div>
              <div className="client-info-text">{data.type}</div>
            </div>
          </div>
          <div className="work-single-content-wrap" id="Scroll">
            <div className="image-wrap full-width">
              <img alt={data.title} className="view-image" loading="lazy" src={data.heroImage} />
              <div className="view-image-overlay"></div>
            </div>
            <div className="work-single-rich-text richtext reveal">
              <MdxBody source={body} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
