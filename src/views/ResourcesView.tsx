import { BookOpen, Newspaper, Mail, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function ResourcesView() {
  const navigate = useNavigate();

  const resourceCards = [
    {
      id: 'blogs',
      title: 'Blogs & Insights',
      description: 'In-depth analysis of international accounting, compliance guidelines, GAAP updates, and offshore scaling strategies.',
      icon: <BookOpen className="w-6 h-6 text-[#007cff]" />,
      path: '/resources/blogs',
      badge: 'Articles & Guides'
    },
    {
      id: 'articles',
      title: 'Industry Articles',
      description: 'Expert publications covering multi-state sales tax nexus, e-commerce cash flows, and remote accounting standards.',
      icon: <Newspaper className="w-6 h-6 text-[#007cff]" />,
      path: '/resources/articles',
      badge: 'Whitepapers'
    },
    {
      id: 'newsletters',
      title: 'Taxation Briefings',
      description: 'Subscribe to our bi-weekly regulatory newsletters providing practical summaries of international tax adjustments.',
      icon: <Mail className="w-6 h-6 text-[#007cff]" />,
      path: '/resources/newsletters',
      badge: 'Bi-Weekly Digest'
    },
    {
      id: 'faqs',
      title: 'FAQs & Help Center',
      description: 'Clear, direct answers regarding security compliance, timezone overlapping, software setups, and SLA guarantees.',
      icon: <HelpCircle className="w-6 h-6 text-[#007cff]" />,
      path: '/resources/faqs',
      badge: 'Knowledge Base'
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,124,255,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Resource Hub</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Aum Knowledge Base & Resource Center
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Access expert articles, direct compliance guides, bi-weekly regulatory briefings, and operations resources to help scale your firm.
          </p>
        </div>
      </section>

      {/* Resource Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              id={`resource-card-${card.id}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-[#007cff]/10 group-hover:border-[#007cff]/20 transition-all">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 border border-slate-200 px-2.5 py-1 rounded bg-slate-50/50 uppercase">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 group-hover:text-[#007cff] transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 font-medium">Click to explore resources</span>
                <button
                  onClick={() => navigate(card.path)}
                  className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group/btn"
                >
                  <span>Open Section</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Legal Callout Banner */}
        <div className="mt-16 bg-navy-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-navy-850 text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(0,124,255,0.25),transparent_50%)]"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Need direct support?</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
              Looking for tailored regulatory guides or whitelabel team configuration?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Schedule a personalized back-office evaluation with our managing Chartered Accountants. We can map out a specific offshore integration playbook custom-fit for your CPA firm or business operations.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-[#007cff] hover:bg-blue-600 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-[#007cff]/10"
              >
                Contact Our Vadodara Office
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
