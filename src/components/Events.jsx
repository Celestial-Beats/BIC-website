import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EVENTS, DEFY_EDITIONS } from '../data/clubData';
import { IconRocket, IconBolt, IconTicket, IconHammer, IconMic } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="events-section container" ref={sectionRef}>
      {/* Page Hero */}
      <div className="page-hero">
        <span className="section-tag reveal-up">Events</span>
        <h1 className="page-hero-title reveal-up">What We <em>Run</em></h1>
        <p className="page-hero-sub reveal-up">
          From the flagship hackathon to the TechnoVIT lineup — if there's something to build, learn or pitch, BiC is running it.
        </p>
      </div>

      {/* Stats Banner — figures derived from the editions and lineup listed on this site */}
      <div className="stats-banner reveal-up">
        <div className="stat-block featured">
          <span className="stat-icon"><IconRocket /></span>
          <div className="stat-number">{DEFY_EDITIONS.length}</div>
          <div className="stat-label">DeFy Editions</div>
          <div className="stat-desc">Three years of BiC's flagship Web3 × entrepreneurship hackathon.</div>
        </div>
        <div className="stat-block">
          <span className="stat-icon"><IconBolt /></span>
          <div className="stat-number">24<sup>h</sup></div>
          <div className="stat-label">Build Sprint</div>
          <div className="stat-desc">The onsite round at DeFy runs a full 24 hours, start to finish.</div>
        </div>
        <div className="stat-block">
          <span className="stat-icon"><IconTicket /></span>
          <div className="stat-number">{EVENTS.technovit.length}</div>
          <div className="stat-label">TechnoVIT '26 Events</div>
          <div className="stat-desc">Flagship entries in this year's TechnoVIT lineup.</div>
        </div>
      </div>

      {/* TechnoVIT Section */}
      <h2 className="page-hero-title reveal-up" style={{ fontSize: 'clamp(30px,4vw,48px)', marginBottom: 28 }}>
        TechnoVIT <em>'26</em>
      </h2>
      <div className="events-main-grid reveal-up">
        {EVENTS.technovit.map((ev, i) => (
          <div key={i} className="event-card">
            <div>
              {ev.chips.map((c, j) => <span key={j} className="event-chip">{c}</span>)}
            </div>
            <div className="event-title">{ev.title}</div>
            <div className="event-lead">Student Coordinator: {ev.lead}</div>
            <p className="event-blurb">{ev.blurb}</p>
          </div>
        ))}
      </div>

      {/* What to Expect — Feature Cards */}
      <div className="feature-grid feature-grid-3 reveal-up" style={{ marginBottom: 80 }}>
        {[
          { tag: 'Hackathon', icon: IconHammer, title: 'DeFy', body: "Our flagship. An online ideation round, then a 24-hour onsite build and a top-nine pitch finale." },
          { tag: 'Event', icon: IconTicket, title: 'Clash Royale', body: 'Build your deck. Master your strategy, outplay your opponents, and claim victory in the arena.' },
          { tag: 'Pitch', icon: IconMic, title: 'Ridiculous Pitches', body: 'Put your ideas to the test. Build the pitch, refine your vision, and take on the challenge of innovation.' },
        ].map((d, i) => (
          <div key={i} className={`feature-card ${i === 0 ? 'dark-amber' : ''} reveal-up`}>
            <d.icon style={{ width: 28, height: 28, marginBottom: 14 }} />
            <div className="fc-eyebrow">{d.tag}</div>
            <div className="fc-title">{d.title}</div>
            <div className="fc-body">{d.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
