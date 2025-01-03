import  Blog  from "@/app/data/blog_data.json";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return Blog.map((post) => ({
    slug: post.slug,  // Static paths generation based on slugs
  }));
}
