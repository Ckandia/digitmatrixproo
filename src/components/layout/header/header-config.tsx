import { ReactNode } from 'react';
import { standalone_routes } from '@/components/shared';
import { LegacyHomeNewIcon as TradershubLogo } from '@deriv/quill-icons/Legacy';
import {
    DerivProductBrandLightDerivBotLogoWordmarkIcon as DerivBotLogo,
    DerivProductBrandLightDerivTraderLogoWordmarkIcon as DerivTraderLogo,
    PartnersProductBrandLightSmarttraderLogoWordmarkIcon as SmarttraderLogo,
} from '@deriv/quill-icons/Logo';
import { localize } from '@deriv-com/translations';

export type PlatformsConfig = {
    active: boolean;
    buttonIcon: ReactNode;
    description: string;
    href: string;
    icon: ReactNode;
    showInEU: boolean;
};

export type MenuItemsConfig = {
    as: 'a' | 'button';
    href: string;
    icon?: ReactNode; // Made icon optional so it doesn't crash if we don't have a specific icon imported
    label: string;
};

export type TAccount = {
    balance: string;
    currency: string;
    icon: React.ReactNode;
    isActive: boolean;
    isVirtual: boolean;
    loginid: string;
    token: string;
    type: string;
};

export const platformsConfig: PlatformsConfig[] = [
    {
        active: false,
        buttonIcon: ,
        description: localize('A whole new trading experience on a powerful yet easy to use platform.'),
        href: standalone_routes.trade,
        icon: ,
        showInEU: true,
    },
    {
        active: true,
        buttonIcon: ,
        description: localize('Automated trading at your fingertips. No coding needed.'),
        href: standalone_routes.bot,
        icon: ,
        showInEU: false,
    },
    {
        active: false,
        buttonIcon: ,
        description: localize('Trade the world’s markets with our popular user-friendly platform.'),
        href: standalone_routes.smarttrader,
        icon: ,
        showInEU: false,
    },
];

export const TRADERS_HUB_LINK_CONFIG = {
    as: 'a',
    href: standalone_routes.traders_hub,
    icon: ,
    label: 'Home',
};

// ========================================
// DIGIT MATRIX PRO CUSTOM MENU TABS
// ========================================

export const MenuItems: MenuItemsConfig[] = [
    {
        as: 'a',
        href: '/dashboard',
        label: localize('Dashboard'),
    },
    {
        as: 'a',
        href: '/bot-builder',
        label: localize('Bot Builder'),
    },
    {
        as: 'a',
        href: '/chart',
        label: localize('Chart'),
    },
    {
        as: 'a',
        href: '/tutorial',
        label: localize('Tutorial'),
    },
    {
        as: 'a',
        href: '/custom-strategy',
        label: localize('My Custom Strategy'),
    },
    {
        as: 'a',
        href: '/digit-analysis',
        label: localize('Digit Analysis Tool'),
    },
];
