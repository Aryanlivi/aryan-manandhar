"use client";

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { intro } from '../../../data/site';
import './Intro.css';
import AboutSection from '../About/About';

export default function IntroSection() {
  const fullName = intro.name;

  return (
    <section id="intro" className="intro">
      <div className="intro-inner">
        <div className="intro-photo">
          <img src={intro.photo.src} alt={intro.photo.alt} />
        </div>
        <div className="intro-text">
          <h1 className="intro-name" aria-label={fullName}>
            <span className="intro-name-text">{fullName}</span>
          </h1>
          <p className="intro-tagline">{intro.tagline}</p>
          <AboutSection/>
          <div className="intro-actions">
            <Button
              href={intro.cta.href}
              variant="outline-custom"
              size="lg"
              className="intro-cta"
            >
              <EmailRoundedIcon className="intro-cta-icon" />
              {intro.cta.label}
            </Button>
            <Button
              href={intro.cv.href}
              variant="outline-custom"
              size="lg"
              className="intro-cta"
            >
              <DownloadRoundedIcon className="intro-cta-icon" />
              {intro.cv.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}