import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicyView() {
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
          <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Legal & Compliance</span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Privacy Policy & Data Protection Disclosure
          </h1>
        </div>
      </section>

      {/* Main content body */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700">
          
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <ShieldCheck className="w-6 h-6 text-[#007cff]" />
            <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Effective Date: July 7, 2026</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">1. Summary</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              At Aum Consultancy Services Private Limited (Ahmedabad, India), we deliver premium, whitelabel offshore financial solutions, bookkeeping, tax preparation, and full-time dedicated accountant staffing. This Privacy Policy outlines how we collect, store, secure, process, and protect proprietary client data and financial records. We enforce absolute physical and environment isolations with zero local storage protocols.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">2. Relevant Law</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              Our data collection, transmission, and processing infrastructures legally conform to major global privacy laws corresponding to our partner geographies:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li><strong>United States:</strong> California Consumer Privacy Act (CCPA) / CPRA.</li>
              <li><strong>United Kingdom & Europe:</strong> General Data Protection Regulation (GDPR) and Data Protection Act (DPA).</li>
              <li><strong>Canada:</strong> Personal Information Protection and Electronic Documents Act (PIPEDA).</li>
              <li><strong>Australia:</strong> Privacy Act 1988 & Australian Privacy Principles (APPs).</li>
              <li><strong>India:</strong> Digital Personal Data Protection Act (DPDP Act) 2023.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">3. Explanation</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              Aum Consultancy operates purely as a <strong>data processor</strong> on behalf of our corporate partners, accounting practices, and CPAs (who act as the data controllers). We access ledgers, receipts, tax forms, and databases through secure, read-only remote desktop interfaces (VDI) or custom VPN tunnels. No data is stored on local Indian workstation hard drives; instead, processing is completed in memory or written directly back to our clients’ secure cloud spaces (e.g. QuickBooks Online, NetSuite, Xero, or private client servers).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">4. Rights</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              Under regional privacy legislations, our corporate partners and their end-consumers have robust rights regarding data transparency:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li><strong>Right of Access:</strong> Review the precise list of remote FTE employees authorized to view files.</li>
              <li><strong>Right to Rectification:</strong> Demand immediate adjustments of inaccurate financial record processing.</li>
              <li><strong>Right to Erasure (Forgetfulness):</strong> Complete removal of client contact records from our communication portals upon contract closure.</li>
              <li><strong>Right to Portability:</strong> Secure extraction of standard accounting workpapers.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">5. Procedure</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              In order to exercise privacy controls or initiate data audits, partner organizations must follow this procedure:
            </p>
            <ol className="list-decimal list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li>Submit an official signed request from your corporate domain to our Data Security Officer at <strong>security@aumstrategist.com</strong>.</li>
              <li>Include the specific timeline and range of files or remote logs required for audit.</li>
              <li>Our security leads will verify credentials, extract the secure remote logs, and compile a compliance package within 5 business days.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">6. Documents Required</h2>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              To verify credentials and initiate an audit under global data protection acts, the following documents are required:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm font-light pl-4 space-y-1.5">
              <li>Copy of our active professional Whitelabel Service Agreement or Data Processing Addendum (DPA).</li>
              <li>Authorized corporate domain credentials.</li>
              <li>Written consent from your internal compliance lead or general counsel.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">7. Important Notes</h2>
            <div className="bg-blue-50 border border-blue-150 rounded-2xl p-4.5 text-xs text-blue-900 space-y-2">
              <p className="font-bold">⚠️ Security Controls In Effect:</p>
              <ul className="list-disc list-inside space-y-1 font-light">
                <li>All team members work inside physically restricted, biometric-locked server cabins.</li>
                <li>Workstations are stripped of USB ports, external drive bays, and print capabilities.</li>
                <li>Workstations run on thin-clients operating with strict screen recorders and outbound email restrictions.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-navy-900">8. Related Topics</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">SOC-2 Type II Compliance</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">GDPR Data Processing Addendum</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">CCPA Consumer Portability</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full font-medium">Thin-Client Virtual Desktops</span>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
export { PrivacyPolicyView };
