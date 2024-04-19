import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import astronautHelmet from '../assets/astronaut-helmet.png'
import deadEye from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelop from '../assets/envelope.png'
import '../styles/nav.css'

const enum PathName {
    home = '/',
    skills = '/skills',
    projects = '/projects',
    contact = '/contact',
}

export const Nav = () => {
    const location = useLocation();

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case PathName.home:
                return "nav-about";
            case PathName.skills:
                return "nav-skills";
            case PathName.projects:
                return "nav-projects";
            case PathName.contact:
                return "nav-contact";
            default:
                return ""

        }
    }

    const getPageTitle = () => {
        switch (location.pathname) {
            case PathName.home:
                return "ABOUT";
            case PathName.skills:
                return "SKILLS";
            case PathName.projects:
                return "PROJECTS";
            case PathName.contact:
                return "CONTACT";
            default:
                return ""

        }
    }
    const pageTitle = getPageTitle();
    const navPositionClass = getNavPositionClass();

    const isCurrentPage = (navClass: string) => navClass === navPositionClass;

    const renderNavLink = (to: string, imgSrc: string, altText: string, navClass: string) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
        return (
            <Link to={to} className={linkClass}>
                <img alt={altText} src={imgSrc} />
                {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
            </Link>
        )
    }

    const menuConfig = [
        {
            path: PathName.home,
            icon: astronautHelmet,
            altText: 'astronaut helmet icon',
            className: 'nav-about'
        },
        {
            path: PathName.skills,
            icon: deadEye,
            altText: 'dead eye icon',
            className: 'nav-skills'
        },
        {
            path: PathName.projects,
            icon: stack,
            altText: 'stack icon',
            className: 'nav-projects'
        },
        {
            path: PathName.contact,
            icon: envelop,
            altText: 'envelop icon',
            className: 'nav-contact'
        },
    ]

    return (
        <nav className={`nav ${navPositionClass}`}>
            {menuConfig.map(menu=> renderNavLink(
                menu.path,
                menu.icon,
                menu.altText,
                menu.className
            ))}
        </nav>
    )
}