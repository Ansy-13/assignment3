import  Blog  from "@/app/data/blog_data.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import CommentPage from "@/app/components/comment";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return Blog.map((post) => ({
    slug: post.slug,  // Static paths generation based on slugs
  }));
}

// Blog post page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // params is a promise
}) {
  const { slug } = await params; // Await the params to get the slug

  // Find the blog post matching the slug
  const post = Blog.find((item) => item.slug === slug);

  // Handle invalid slug (render 404 page if no post found)
  if (!post) {
    notFound();
    return null;
  }

  // Render the blog post content
  return (
    <main className="max-w-4xl mx-auto p-4 mt-52">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={500}
        className="rounded-lg mb-4 lg2:ml-[600px]"
      />
      
      {post.content2 && <p className="text-lg text-gray-600 lg2:relative lg2:right-64 lg2:bottom-[500px] lg2:w-[700px]">{post.content2}</p>}
      
      {/* Comment Section */}
     <CommentPage/>
    </main>
  );
}