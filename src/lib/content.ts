import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src", "content");

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  clientName: string;
  clientImage: string;
  heroImage: string;
  listImage: string;
  description: string;
  order: number;
}

export interface WorkFrontmatter {
  title: string;
  slug: string;
  client: string;
  year: string;
  type: string;
  heroImage: string;
  order: number;
}

export interface ServiceFrontmatter {
  title: string;
  slug: string;
  heroImage: string;
  order: number;
}

interface MDXItem<T> {
  data: T;
  body: string;
}

function readCollection<T>(dir: string): MDXItem<T>[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(fullDir, file), "utf8");
      const { data, content } = matter(raw);
      return { data: data as T, body: content };
    });
}

export function getBlogPosts(): BlogFrontmatter[] {
  return readCollection<BlogFrontmatter>("blog")
    .map((i) => i.data)
    .sort((a, b) => a.order - b.order);
}

export function getBlogPost(slug: string): MDXItem<BlogFrontmatter> | null {
  return readCollection<BlogFrontmatter>("blog").find((i) => i.data.slug === slug) ?? null;
}

export function getWorks(): WorkFrontmatter[] {
  return readCollection<WorkFrontmatter>("works")
    .map((i) => i.data)
    .sort((a, b) => a.order - b.order);
}

export function getWork(slug: string): MDXItem<WorkFrontmatter> | null {
  return readCollection<WorkFrontmatter>("works").find((i) => i.data.slug === slug) ?? null;
}

export function getServices(): ServiceFrontmatter[] {
  return readCollection<ServiceFrontmatter>("services")
    .map((i) => i.data)
    .sort((a, b) => a.order - b.order);
}

export function getService(slug: string): MDXItem<ServiceFrontmatter> | null {
  return readCollection<ServiceFrontmatter>("services").find((i) => i.data.slug === slug) ?? null;
}
