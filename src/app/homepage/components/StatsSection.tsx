"use client";

import { useTranslation } from 'react-i18next';
import { ArrowDown, ArrowUp } from "lucide-react";
import Counter from '@/components/ui/Counter';
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

export default function StatsSection() {
    const { t } = useTranslation();

    return (
        <section className="section-container   flex justify-center items-center">
            <motion.div 
                className="stats-card"
                variants={fadeInMain}
                initial="initial"
                whileInView="animate"
            >
                {/* LEFT TEXT */}
                <div className="stats-text-wrapper">
                    <h3 className="text-subhero">
                        <Counter to={24000} /> + Happy Customers
                    </h3>
                    <p className="stats-subtitle">
                        {t('stats.customersSubtitle')}
                    </p>
                </div>

                <div className="stats-grid text-white">
                    {/* STAT 1 */}
                    <div className="stat-item">
                        <div className="flex items-center justify-center">
                            <div className='icon-wrapper'>

                                <div className="icon-container">
                                    <ArrowUp className="text-white text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start">
                            <span className="text-stat-number"> <Counter to={7} />x</span>
                        </div>
                        <div></div>
                        <div className="flex items-start justify-start">
                            <p className="text-stat-label">
                                {t('stats.fasterTask')}
                            </p>
                        </div>
                    </div>

                    {/* STAT 2 */}
                    <div className="stat-item">
                        <div className="flex items-center justify-center">
                            <div className='icon-wrapper'>
                                <div className="icon-container">
                                    <ArrowDown className="text-white text-xl" />
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-start">
                            <span className="text-stat-number"><Counter to={72} />%</span>
                        </div>
                        <div></div>
                        <div className="flex items-start justify-start">
                            <p className="text-stat-label ">
                                {t('stats.reductionDowntime')}
                            </p>
                        </div>
                    </div>

                    {/* STAT 3 */}
                    <div className="stat-item">
                        <div className="flex items-center justify-center">
                            <div className='icon-wrapper'>
                                <div className="icon-container">
                                    <ArrowUp className="text-white text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start">
                            <span className="text-stat-number"> <Counter to={99} />%</span>
                        </div>
                        <div></div>
                        <div className="flex items-start justify-start">
                            <p className="text-stat-label">
                                {t('stats.customerSatisfaction')}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
