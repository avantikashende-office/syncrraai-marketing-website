interface SyncrraLogoProps {
    className?: string;
}

export default function SyncrraLogo({ className = "" }: SyncrraLogoProps) {
    return (
        <svg
            className={className}
            width="196"
            height="196"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M52.1401 1.73234L61.3348 10.9451C44.8629 15.9846 43.3645 29.8431 44.6743 36.1424L30.057 50.7883L14.8896 35.5912L23.2985 27.1658L33.5935 37.481C29.947 17.9531 44.4385 5.51193 52.1401 1.73234Z" fill="url(#paint0_linear_1_13551)" />
            <path d="M1.72895 48.7813L10.9237 39.5686C15.9533 56.0728 29.7846 57.5741 36.0716 56.2618L50.6889 70.9077L35.5215 86.1048L27.1127 77.6795L37.4076 67.3643C17.918 71.0179 5.50114 56.498 1.72895 48.7813Z" fill="url(#paint1_linear_1_13551)" />
            <path d="M47.7388 98.2677L38.5441 89.0549C55.016 84.0154 56.5144 70.1569 55.2046 63.8576L69.8219 49.2117L84.9893 64.4088L76.5804 72.8342L66.2854 62.519C69.9319 82.0469 55.4404 94.4881 47.7388 98.2677Z" fill="url(#paint2_linear_1_13551)" />
            <path d="M98.2711 51.5761L89.0763 60.7888C84.0467 44.2846 70.2154 42.7833 63.9284 44.0956L49.3111 29.4497L64.4785 14.2526L72.8874 22.6779L62.5924 32.9931C82.0821 29.3395 94.4989 43.8594 98.2711 51.5761Z" fill="url(#paint3_linear_1_13551)" />
            <defs>
                <linearGradient id="paint0_linear_1_13551" x1="22.9522" y1="43.6696" x2="59.2072" y2="41.907" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D373" />
                    <stop offset="1" stopColor="#005F24" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_13551" x1="43.5841" y1="78.0264" x2="41.8112" y2="41.7011" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D373" />
                    <stop offset="1" stopColor="#005F24" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_13551" x1="76.9267" y1="56.3304" x2="40.6717" y2="58.093" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D373" />
                    <stop offset="1" stopColor="#005F24" />
                </linearGradient>
                <linearGradient id="paint3_linear_1_13551" x1="56.4159" y1="22.331" x2="58.1888" y2="58.6563" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39D373" />
                    <stop offset="1" stopColor="#005F24" />
                </linearGradient>
            </defs>
        </svg>

    );
}
