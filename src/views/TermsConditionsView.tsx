import { FileText, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsConditionsView() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,124,255,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs text-[#007cff] font-mono hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>
          <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Legal Agreements</span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Terms of Service & Engagement Conditions
          </h1>
        </div>
      </section>

      {/* Main content body */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700">

          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <FileText className="w-6 h-6 text-[#007cff]" />
            <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Effective Date: July 7, 2026</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">1. Summary</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              These Terms of Service govern the engagement, operational bounds, and professional liabilities between Aum Consultancy Services Private Limited ("Aum Consultancy") and corporate entities or CPA practices executing Whitelabel Service Agreements, Statement of Works (SOWs), or dedicated remote FTE staffing arrangements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">2. Relevant Law</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              This corporate agreement is drafted, interpreted, and governed under:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li>The Indian Contract Act, 1872 (for corporate registry and base commercial entities).</li>
              <li>Arbitration and Conciliation Act, 1996 (Indian jurisdiction for local dispute resolution).</li>
              <li>Choice of Law: Bilateral service contracts may optionally specify state courts in Delaware (USA), England & Wales (UK), or Victoria (Australia) depending on SOW specifications.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-[#1e293b]">3. Explanation</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              Aum Consultancy supplies dedicated back-office Chartered Accountants and remote processors who act as direct operational assistants. Our staff operates under our clients’ direct operational workflows, methodologies, and platforms. Aum Consultancy does not express audit opinions, execute final tax filings on behalf of consumers without client authorization, or make sovereign fiduciary decisions. All deliverables are subject to the client's internal supervisory review and final sign-off.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">4. Rights</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              Under our standard engagement rules, our clients possess the following rights:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li><strong>Exclusive Dedication:</strong> Assigned FTE members must work exclusively on client-allocated queues during their shift.</li>
              <li><strong>Process Integration:</strong> Right to train FTE staff on customized in-house workflows, templates, and SOPs.</li>
              <li><strong>Shift Adjustments:</strong> Option to configure timezone overlapping to facilitate daily communications.</li>
              <li><strong>Replacement Guarantee:</strong> Immediate replacement of staff in case of unexpected leave or performance gaps.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">5. Procedure</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              To activate dedicated FTE remote staffing or request scale adjustments:
            </p>
            <ol className="list-decimal list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li>Submit a detailed resource requirement profile via our consultation portal.</li>
              <li>Execute a bilateral Master Services Agreement (MSA) containing standard NDAs and liability caps.</li>
              <li>Onboard staff via our shadow-onboarding framework, completing process mappings in 3-5 business days.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">6. Documents Required</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              To initiate commercial contracts and comply with corporate KYC protocols, clients must submit:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li>Corporate Registration certificate or LLC filing.</li>
              <li>Employer Identification Number (EIN) or VAT registry document.</li>
              <li>Executed Statement of Work (SOW).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">7. Important Notes</h2>
            <div className="bg-blue-50 border border-blue-150 rounded-2xl p-4.5 text-xs text-blue-900 space-y-2">
              <p className="font-bold">⚠️ SLA and Liability Limits:</p>
              <p className="font-light leading-relaxed">
                While we guarantee highly accurate bookkeeping and tax preparations backed by a Chartered Accountant double-review tier, final regulatory filings and compliance submissions remain the sovereign legal responsibility of the client. All financial accounts must be authorized and filed by a licensed practitioner in the domestic jurisdiction.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">8. Related Topics</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">Master Services Agreement (MSA)</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">Dedicated FTE Staffing SLAs</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">Workstation Physical Isolation</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">Indian Contract Act 1872</span>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
export { TermsConditionsView };
