import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Blog = () => {
   return (
      <>
         <div className="page-head">
            <Header />
            <h2 className="page-title">Blog Posts</h2>
         </div>

         <div className="my-container">
            <div className="bg-gray-200 rounded-lg p-4 m-4">
               <h1 className="blog-post-title">
                  1. Crafting an Effective Resume: Tips for Success
               </h1>
               <p className="blog-post-content">
                  Ans: This blog post provides valuable tips for creating a
                  strong resume that grabs employers' attention. It covers
                  essential components like a concise summary, relevant
                  experience, education, skills, and achievements. By tailoring
                  your resume to the job you're applying for and highlighting
                  your qualifications, you can increase your chances of standing
                  out from other applicants.
               </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 m-4">
               <h1 className="blog-post-title">
                  2. Acing Job Interviews: Common Questions Demystified
               </h1>
               <p className="blog-post-content">
                  Ans: This blog post demystifies common interview questions and
                  provides tips on how to answer them effectively. Questions
                  like "Tell me about yourself," "Strengths and weaknesses," and
                  "Challenging situations faced" are discussed, offering
                  guidance on crafting impressive responses. By preparing well
                  and practicing these answers, you can boost your confidence
                  and perform better during interviews.
               </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 m-4">
               <h1 className="blog-post-title">
                  3. Effective Job Search Strategies: Finding the Perfect Match
               </h1>
               <p className="blog-post-content">
                  Ans: This blog post explores strategies for conducting an
                  effective job search. It covers aspects like identifying your
                  career goals, researching potential employers, utilizing
                  online job boards and networking, and leveraging social media
                  platforms. By adopting these strategies, you can enhance your
                  job search process and increase your chances of finding the
                  perfect job opportunity.
               </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 m-4">
               <h1 className="blog-post-title">
                  4. Building a Successful Professional Network: Unlocking
                  Opportunities
               </h1>
               <p className="blog-post-content">
                  Ans: This blog post emphasizes the importance of building a
                  strong professional network and how it can unlock various job
                  opportunities. It provides insights into networking platforms,
                  attending industry events, informational interviews, and
                  leveraging connections. By proactively growing and nurturing
                  your network, you can expand your career opportunities and
                  stay informed about potential job openings.
               </p>
            </div>
         </div>

         <Footer />
      </>
   );
};

export default Blog;
