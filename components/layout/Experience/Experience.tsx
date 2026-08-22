'use client'

import JobList from '../JobList/JobList';
import { sections } from '../../../data/site';

export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-title">{sections.experience.title}</span>
      </div>
      <JobList />
    </section>
  );
};

