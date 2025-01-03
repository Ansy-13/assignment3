import React from 'react'
import Image from 'next/image' 
import Blog from "@/app/data/blog_data.json" 
import Link from 'next/link'


interface Iblog {

  title:string,
  content:string,
  image:string,
  slug:string,
 
}
function page() {
  return (
   <main className='max-w-[1500px] mx-auto'>
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left gap-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:w-[300px] lg:w-[500px] lg2:w-[850px] lg2:text-5xl mt-10">Inspiring Ideas and Insightful Stories Your Go-To Blog for All Things Creative</h1>
        <p className="text-lg text-gray-600 md:w-[300px] lg:w-[500px] lg2:w-[800px] lg2:text-[20px]">Welcome to our blog, where creativity and knowledge come together. We share insightful articles, tips, and personal stories designed to inspire and inform. Whether you are looking for practical advice, creative inspiration, or the latest trends, our content is crafted to engage and empower. Join us on a journey of discovery and growth, and stay connected with a community that values learning and innovation. Explore new ideas and find inspiration in every post!.</p>
      </div>
      <div className="w-full md:w-[360px] mb-8 md:mb-44 mt-4 lg:w-[400px] lg2:w-[500px] lg:mb-0  ">
        <Image
          src="/main.webp" // Replace with your image path
          alt="Hero Image"
          width={800}
          height={800}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
    </section>
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Pricing Plans</h2>
        <h3 className='text-[18px] font-sans text-[#8092ad] mb-4'>Choose a plan that suits You</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-16">
          
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-full md:h-[350px] lg2:h-[400px]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
            <p className="text-xl text-gray-600 mb-6 line-through">$19/month</p>
            <p className="text-xl text-gray-600 mb-6 ">$15/month</p>
            <ul className=" space-y-4 mb-6 text-center text-[16px]">
              <li className="text-gray-600 line-through">1 blog</li>
              <li className="text-gray-600 ">3 Blogs</li>
              <li className="text-gray-600">5GB Storage</li>
              <li className="text-gray-600">Basic Support</li>
            </ul>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Choose Plan</a>
          </div>
          
          {/* Standard Plan */}
          <div className="bg-blue-500 p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-full md:h-[350px]">
            <h3 className="text-2xl font-semibold text-white mb-4">Standard Plan</h3>
            <p className="text-xl text-white mb-6">$39/month</p>
            <ul className="text-center space-y-4 mb-6 text-white">
              <li>10 Blogs</li>
              <li>20GB Storage</li>
              <li>Priority Support</li>
            </ul>
            <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-100">Choose Plan</a>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-full md:h-[350px] ">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-xl text-gray-600 mb-6">$59/month</p>
            <ul className="text-center space-y-4 mb-6">
              <li className="text-gray-600">Unlimited Blogs</li>
              <li className="text-gray-600">50GB Storage</li>
              <li className="text-gray-600">24/7 Premium Support</li>
            </ul>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Choose Plan</a>
          </div>
          
        </div>
      </div>
    </section>
    <section className="py-16 bg-gray-300  z-10">
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Latest Blog Posts</h2>
 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
  {Blog.map((post: Iblog, index: number) => (
    <Link
      key={index}
      href={`/blogpost/${post.slug}`}
      className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-[420px] transition-transform transform hover:scale-105 hover:shadow-2xl relative z-10 block"
    >
      <div>
        <Image
          src={post.image}
          alt="this is my image"
          width={300}
          height={300}
          className="mx-auto mb-4 rounded-md"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.content}</p>
      
      </div>
    </Link>
  ))}


  </div>
  </div>
</section>




   </main>
  )
}

export default page