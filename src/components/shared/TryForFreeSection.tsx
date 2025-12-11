import Button from '../ui/Button'
import Image from "next/image";
import SyncrraLogo from '../../../public/Logos/SyncrraLogoIcon';

const TryForFreeSection = () => {
    return (
        <section className="section-container section-padding flex flex-col justify-center items-center text-center space-y-8">

            <div className="flex flex-col items-center gap-2">
                <div className="tryfree-image-wrapper">
                    <Image
                        src="/TryForFreeImage.svg"
                        alt="Dashboard Preview"
                        width={1000}
                        height={600}
                        className="tryfree-image"
                    />
                </div>

                <div className="tryfree-logo">
                    <SyncrraLogo className="w-25 h-25" />
                </div>
            </div>


            {/* CONTENT */}
            <h2 className="text-3xl md:text-4xl font-semibold">
                Try Syncrra Free for 30 Days
            </h2>

            <p className="text-lg text-white/70">
                Start taking control of your business today
            </p>

            <div>
                <Button variant="primary">Get Started</Button>
            </div>

        </section>
    )
}

export default TryForFreeSection
