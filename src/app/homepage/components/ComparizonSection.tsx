import Badge from '@/components/ui/Badge'
import Logo from '../../../../public/Logos/Logo'
import { Check, Layers, X } from 'lucide-react';
import ComparisonCard from '@/components/ui/ComparisonCard';

const ComparizonSection = () => {
  const data1 = [
    { icon: <Check size={30} />, text: "Role based Dashboards", showDivider: true },
    { icon: <Check size={30} />, text: "Agentic chatbot to generate reports", showDivider: true },
    { icon: <Check size={30} />, text: "AI demand & downtime forecasting", showDivider: true },
    { icon: <Check size={30} />, text: "Scrap & rejection analytics", showDivider: true },
    { icon: <Check size={30} />, text: "Fast onboarding", showDivider: false },
  ];
  const data2 = [
    { icon: <X size={30} />, text: "Limited Collaboration", showDivider: true },
    { icon: <X size={30} />, text: "Rigid & Non-scalable options", showDivider: true },
    { icon: <X size={30} />, text: "Basic Dashboard Funtionalites", showDivider: true },
    { icon: <X size={30} />, text: "Lack of Advanced Analytics", showDivider: true },
    { icon: <X size={30} />, text: "Outdated & Complex Interfaces", showDivider: false },
  ];


  return (
    <section className=" ">
      <div className="space-y-6 section-container">
                <div className="flex justify-center">
          <Badge label="COMPARISON" />
        </div>

        <h2 className="section-title-large text-center gradient-gray-text ">Why Syncrra Stands Out? </h2>

        <p className="text-description text-center max-w-3xl mx-auto  mb-20">
          See how Syncrra compares against others in performance, growth
        </p>
      </div>


      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div>
            <div className="flex justify-center items-center gap-3 mb-6">

              <span className="text-sm font-semibold text-white"><Logo className='w-auto h-7' /></span>
            </div>

            <ComparisonCard
              features={data1}
              showGreenBorder
            />
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="flex justify-center items-center gap-3 mb-6">
              <Layers size={25} className="text-white" />
              <span className="text-xl font-semibold text-white">Others</span>
            </div>

            <ComparisonCard
              features={data2}
            />
          </div>

        </div>
      </div>


    </section>
  )
}

export default ComparizonSection