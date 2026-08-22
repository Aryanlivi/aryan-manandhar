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
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      i += 1;
      setTyped(fullName.slice(0, i));

      if (i < fullName.length) {
        const delay = 50 + Math.random() * 25;
        timer = setTimeout(type, delay);
      }
    };

    timer = setTimeout(type, 200);

    return () => clearTimeout(timer);
  }, [fullName]);

  return (
    <section id="intro" className="intro">
      <div className="intro-inner">
        <div className="intro-photo">
          <img src={intro.photo.src} alt={intro.photo.alt} />
        </div>
        <div className="intro-text">
          <h1 className="intro-name" aria-label={fullName}>
            <span className="intro-name-text">{typed}</span>
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