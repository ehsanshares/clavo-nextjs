import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { MdxBody } from "@/components/ui/mdx-body";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.data.title, description: post.data.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const { data, body } = post;
  const more = getBlogPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section inner-hero">
        <div className="layout-blockcontainer container container">
          <div className="top-hero-content-wrapper">
            <h1 className="hero-title blog-single reveal">{data.title}</h1>
            <a className="hero-button-wrapper inline-block reveal" href="#Scroll">
              <img alt="" className="scroll-button-icon" loading="lazy" src="/assets/images/Home-Icon-.svg" />
              <div className="hero-button-text">Scroll</div>
            </a>
          </div>
          <div className="blog-single-image-box">
            <div className="image-wrap">
              <img alt={data.title} className="view-image" loading="lazy" src={data.heroImage} />
              <div className="view-image-overlay"></div>
            </div>
          </div>
          <div className="blog-single-content-wrapper" id="Scroll">
            <div className="blog-single-content-wrap">
              <div className="blog-client-info-wrapper reveal">
                <img alt={data.clientName} className="blog-client-image" loading="lazy" src={data.clientImage} />
                <div className="blog-client-details">
                  <div className="blog-client-name">{data.clientName}</div>
                  <div className="blog-info">
                    <div className="blog-infos">{data.date}</div>
                    <img alt="" className="blog-dot-icon" loading="lazy" src="/assets/images/Blog-Single-Dot-Icon.svg" />
                    <div className="blog-infos">{data.readTime}</div>
                  </div>
                </div>
              </div>
              <div className="blog-single-rich-text richtext reveal">
                <MdxBody source={body} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="layout-blockcontainer container container">
          <div className="section-top-wrapper reveal">
            <h2 className="section-sub-title">More Blogs</h2>
          </div>
          <div className="blog-content-wrapper">
            <div className="dyn-list reveal">
              <div className="blog-collection-list dyn-items" role="list">
                {more.map((p) => (
                  <div className="dyn-item" role="listitem" key={p.slug}>
                    <a className="blog-link-block inline-block" href={`/blog/${p.slug}`}>
                      <div className="blog-content-wrap">
                        <div className="blog-image-wrapper">
                          <img alt={p.title} className="blog-image" loading="lazy" src={p.listImage} />
                        </div>
                        <div className="blog-details-wrapper">
                          <div className="blog-reading-time">
                            <div className="blog-readig-title">Reading time /</div>
                            <div className="reading-time">{p.readTime}</div>
                          </div>
                          <div className="blog-details-wrap">
                            <div className="blog-title-wrapper">
                              <h2 className="blog-title">{p.title}</h2>
                              <p className="blog-description">{p.description}</p>
                            </div>
                            <div className="blog-icon-wrap">
                              <div className="blog-icon-wrapper">
                                <div className="blog-white-icon">
                                  <div className="blog-icon-box">
                                    <img alt="" className="blog-hover-in" loading="lazy" src="/assets/images/Slider-Right-Arrow-Black-Icon.svg" />
                                    <img alt="" className="blog-black-icon" loading="lazy" src="/assets/images/a-arrow-down.svg" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
