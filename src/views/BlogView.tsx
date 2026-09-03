import { useState } from 'react';
import { Page, BlogPost } from '../types';
import { BLOGS } from '../data';
import { 
  Search, BookOpen, Clock, User, ArrowLeft, ArrowRight,
  Filter, Sparkles, CheckCircle, Newspaper
} from 'lucide-react';
import SafeImage from '../components/SafeImage';

interface BlogViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
}

export default function BlogView({ setCurrentPage, openConsultation }: BlogViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Tax', 'Accounting', 'Compliance', 'Outsourcing'];

  // Filter posts
  const filteredPosts = BLOGS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,124,255,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Aum Knowledge Base</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Taxation, Compliance & Back-Office Insights
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Stay aligned with the latest Western tax regulations, GAAP updates, e-commerce sales tax guidelines, and security compliance tips.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white" id="blog-content-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activePost ? (
            /* Detailed Post View */
            <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn" id={`blog-post-${activePost.id}`}>
              
              {/* Back Button */}
              <button 
                onClick={handleClosePost}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#007cff] transition-colors uppercase tracking-wider cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#007cff]" />
                Back to Articles
              </button>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#007cff] font-bold uppercase bg-blue-50 border border-blue-100 px-2.5 py-1 rounded">
                    {activePost.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activePost.readTime}
                  </span>
                </div>
                
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
                  {activePost.title}
                </h1>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-light pb-4 border-b">
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Written by <strong>{activePost.author}</strong></span>
                  <span>•</span>
                  <span>Published on {activePost.date}</span>
                </div>

                {activePost.image && (
                  <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                    <SafeImage 
                      src={activePost.image} 
                      alt={activePost.title} 
                      className="h-full w-full object-cover"
                      category={activePost.category.toLowerCase() === 'tax' ? 'tax' : activePost.category.toLowerCase() === 'accounting' ? 'accounting' : 'other'}
                    />
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                {activePost.content.map((paragraph, index) => {
                  // Highlight numbered lists for professional look
                  if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.')) {
                    return (
                      <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-150 space-y-1 my-4">
                        <p className="text-slate-800 font-medium text-xs sm:text-sm">{paragraph}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={index}>{paragraph}</p>
                  );
                })}
              </div>

              {/* End Note */}
              <div className="bg-blue-50 border border-blue-200 text-blue-950 p-5 rounded-xl space-y-2 mt-8">
                <strong className="text-slate-900 block font-bold text-xs">Verify from Official Legal Sources</strong>
                <p className="text-[11px] text-slate-700 leading-relaxed font-light">
                  Taxation laws, nexus rules, and labor frameworks shift frequently. This article represents educational guidelines. Please verify statutory parameters with official governmental legal departments or certified local CPAs before modifying corporate filing structures.
                </p>
              </div>

              {/* Author bio details */}
              <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-slate-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center text-lg font-serif font-bold shrink-0">
                  A
                </div>
                <div className="space-y-1">
                  <strong className="text-xs font-bold text-slate-900 block">About Aum Editorial Council</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Our briefs are compiled periodically by our senior Chartered Accountants and valuation auditors based out of Vadodara, helping Western enterprises maintain regulatory compliant bookkeeping operations.
                  </p>
                </div>
              </div>

            </div>
          ) : (
            /* List Grid View */
            <div className="space-y-10">
              
              {/* Search & Filter Toolbar */}
              <div className="bg-slate-50 border border-slate-150 p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search */}
                <div className="relative w-full md:max-w-xs shrink-0">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007cff] transition-colors"
                  />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#007cff] text-white font-bold shadow-sm shadow-blue-500/20'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

              </div>

              {/* List Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.id}
                      onClick={() => handlePostClick(post)}
                      className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        {post.image && (
                          <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                            <SafeImage 
                              src={post.image} 
                              alt={post.title} 
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              category={post.category.toLowerCase() === 'tax' ? 'tax' : post.category.toLowerCase() === 'accounting' ? 'accounting' : 'other'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                          </div>
                        )}
                        
                        <div className="p-6 space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono text-[#007cff] font-bold uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                              {post.category}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">{post.date}</span>
                          </div>
                          
                          <h3 className="font-serif text-sm sm:text-base font-bold text-navy-900 group-hover:text-[#007cff] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                            {post.summary}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center text-[10px] uppercase font-bold text-slate-400 group-hover:text-navy-900 transition-colors">
                        <span>Read full article</span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#007cff] group-hover:translate-x-1.5 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
                  <Newspaper className="w-12 h-12 text-slate-300 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-bold text-slate-900">No Articles Found</h4>
                    <p className="text-xs text-slate-400 font-light">Try adjusting your search queries or category filters.</p>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* Corporate consultation CTA */}
      <section className="bg-blue-50 py-16 border-t border-b border-blue-100 text-center space-y-6">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="font-serif text-xl font-bold text-navy-900">Do you have specific regulatory concerns?</h3>
          <p className="text-slate-500 text-xs font-light">
            Book a secure briefing with our international tax planners. We sign direct confidentiality agreements.
          </p>
        </div>
        <button 
          onClick={openConsultation}
          className="bg-[#007cff] hover:bg-blue-600 text-white font-bold text-xs tracking-wider px-8 py-3.5 rounded-lg transition-all shadow-md inline-block uppercase cursor-pointer"
        >
          Book Regulatory consultation
        </button>
      </section>

    </div>
  );
}
