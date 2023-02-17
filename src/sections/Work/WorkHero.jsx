import { ArrowButton } from '@/components/Button'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'

const WorkHero = ({title, brand, categories = [""], color = "", link = "#", banner}) => {
    const router = useRouter()
  return (
    <div className="brandpage-hero">
        <div className="brandpage-hero-back">
            <ArrowButton action={() => router.push("/work")} direction='down' theme={color} />
        </div>
        <div className="container">
            <div className="brandpage-hero-container">
                <h1 className={`brandpage-hero-title`}>{title}</h1>
                <h3 className={`brandpage-hero-brandname ${color}`}>{brand}</h3>
                <div className="brandpage-hero-footer">
                    <ul className="brandpage-hero-categories">
                        {categories.map((cat, i) => (
                            <motion.li key={`brandpage-li-${i}`}>
                                {cat}
                            </motion.li>
                        ))}
                    </ul>
                    <a href={link}>View Case</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHero