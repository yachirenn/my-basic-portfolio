"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from 'motion/react'
import { navigationItems } from '../../constants/navigation';
import { personalInfo } from '../../constants/personalInfo';
import MobileNavigation from './MobileNavigation';

interface HeaderSection {
    title: string;
    subtitle?: string;
}

const HeaderSection: React.FC<HeaderSection> = ({ title, subtitle }) => {
    const location = usePathname();
    
    return (
        <header className='bg-grey-900 border-b border-terminal-border sticky top-0 z-50'>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo or Brand */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 flex items-center justify-center bg-terminal-accent text-white rounded-md">
                            <img src="" alt="" className="w-8 h-8" style={{ filter: 'invert(64%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(109%)' }} />
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-3 py-2 font-mono text-sm text-terminal-green hover:text-white hover:underline transition-colors duration-200"
                            >
                                <span className='text-terminal-blue'>$</span> {item.command}
                                {location.pathname === item.href && (
                                    <motion.div
                                        layoutId="activeNavItem"
                                        className="absolute left-0 bottom-0 w-full h-0.5 bg-terminal-green rounded"
                                    />
                                )}
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Navigation */}
                    <MobileNavigation />
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;