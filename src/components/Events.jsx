import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EVENTS, DEFY_EDITIONS } from '../data/clubData';
import { IconRocket, IconBolt, IconTicket, IconHammer, IconMic } from './Icons';
import gallery01 from '../assets/gallery/event-01.jpg';
import gallery02 from '../assets/gallery/event-02.jpg';
import gallery03 from '../assets/gallery/event-03.jpg';
import gallery04 from '../assets/gallery/event-04.jpg';
import gallery05 from '../assets/gallery/event-05.jpg';
import gallery06 from '../assets/gallery/event-06.jpg';
import gallery07 from '../assets/gallery/event-07.jpg';
import gallery08 from '../assets/gallery/event-08.jpg';
import gallery09 from '../assets/gallery/event-09.jpg';
import gallery10 from '../assets/gallery/event-10.jpg';
import gallery11 from '../assets/gallery/event-11.jpg';
import gallery12 from '../assets/gallery/event-12.jpg';
import gallery13 from '../assets/gallery/event-13.jpg';
import gallery14 from '../assets/gallery/event-14.jpg';

gsap.registerPlugin(ScrollTrigger);

// Event Highlights — a draggable, infinitely-looping filmstrip.
// The track is rendered three times back to back; an animation frame loop
// nudges scrollLeft along continuously and silently wraps it back into the
// middle copy whenever it drifts into the first or last copy, so the strip
// never visibly "ends" whether it's auto-scrolling or being dragged.
const GALLERY_IMAGES = [
  gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07,
  gallery08, gallery09, gallery10, gallery11, gallery12, gallery13, gallery14,
];

function EventGallery({ images }) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const rafId = useRef(null);
  const setWidth = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const measure = () => { setWidth.current = track.scrollWidth / 3; };
    measure();
    wrap.scrollLeft = setWidth.current;

    const AUTO_SPEED = 0.55; // px per frame

    const loop = () => {
      if (!dragging.current) {
        wrap.scrollLeft += AUTO_SPEED;
      }
      const w = setWidth.current;
      if (w > 0) {
        if (wrap.scrollLeft >= w * 2) wrap.scrollLeft -= w;
        else if (wrap.scrollLeft <= 0) wrap.scrollLeft += w;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    const onResize = () => measure();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const beginDrag = (clientX) => {
    dragging.current = true;
    startX.current = clientX;
    startScroll.current = wrapRef.current.scrollLeft;
    wrapRef.current.classList.add('dragging');
  };
  const moveDrag = (clientX) => {
    if (!dragging.current) return;
    wrapRef.current.scrollLeft = startScroll.current - (clientX - startX.current);
  };
  const endDrag = () => {
    dragging.current = false;
    wrapRef.current?.classList.remove('dragging');
  };

  return (
    <div
      className="gallery-track-wrap"
      ref={wrapRef}
      onMouseDown={(e) => beginDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => beginDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      <div className="gallery-track" ref={trackRef}>
        {[...images, ...images, ...images].map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt="" draggable={false} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

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
            <div className="event-lead">Lead: {ev.lead}</div>
            <p className="event-blurb">{ev.blurb}</p>
          </div>
        ))}
      </div>

      {/* What to Expect — Feature Cards */}
      <div className="feature-grid feature-grid-3 reveal-up" style={{ marginBottom: 80 }}>
        {[
          { tag: 'Hackathon', icon: IconHammer, title: 'DeFy', body: "Our flagship. An online ideation round, then a 24-hour onsite build and a top-nine pitch finale." },
          { tag: 'Fest', icon: IconTicket, title: 'TechnoVIT', body: "BiC runs its own events inside VIT Chennai's annual tech fest — led by the core team." },
          { tag: 'Pitch', icon: IconMic, title: 'Pitch Competitions', body: 'Put your idea in front of real judges. Build the deck, practice the delivery, handle the hard questions.' },
        ].map((d, i) => (
          <div key={i} className={`feature-card ${i === 0 ? 'dark-amber' : ''} reveal-up`}>
            <d.icon style={{ width: 28, height: 28, marginBottom: 14 }} />
            <div className="fc-eyebrow">{d.tag}</div>
            <div className="fc-title">{d.title}</div>
            <div className="fc-body">{d.body}</div>
          </div>
        ))}
      </div>

      {/* Event Highlights — draggable, infinite-loop gallery */}
      <div className="reveal-up" style={{ marginBottom: 28 }}>
        <span className="section-tag">Gallery</span>
        <h2 className="page-hero-title" style={{ fontSize: 'clamp(30px,4vw,48px)' }}>
          Event <em>Highlights</em>
        </h2>
        <p className="page-hero-sub" style={{ marginTop: 12 }}>
          A glimpse into the moments, ideas, and experiences that made our events memorable.
        </p>
      </div>
      <div className="reveal-up">
        <EventGallery images={GALLERY_IMAGES} />
      </div>
    </section>
  );
}
