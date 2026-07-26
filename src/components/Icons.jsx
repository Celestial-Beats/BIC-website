import React from 'react';

// Small line-icon set — replaces emoji used as stat/feature accents across the site.
// All icons share a 24x24 viewBox, stroke-only, and inherit color via currentColor
// so they work inside .stat-icon / feature-card contexts without extra styling.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconBolt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12.5 2.5 4 14h6.2l-1.2 7.5L20 10h-6.2z" />
    </svg>
  );
}

export function IconTrophy(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
      <path d="M7 5H4v1.5A3.5 3.5 0 0 0 7.5 10M17 5h3v1.5A3.5 3.5 0 0 1 16.5 10" />
      <path d="M12 13v3.5M9 20.5h6M9.5 20.5c0-2 .8-3 2.5-3s2.5 1 2.5 3" />
    </svg>
  );
}

export function IconTarget(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconRocket(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c3 2 4.5 5.3 4.5 9 0 2-1 4-1 4l-3.5 1.5L8.5 15.5s-1-2-1-4c0-3.7 1.5-7 4.5-9Z" />
      <circle cx="12" cy="10.5" r="1.6" />
      <path d="M9 16.5 7 21l3.2-2M15 16.5 17 21l-3.2-2" />
    </svg>
  );
}

export function IconTicket(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 6 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-6Z" />
      <path d="M14 7.5v9" strokeDasharray="2.2 2.2" />
    </svg>
  );
}

export function IconBulb(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 17h6M9.7 20.2h4.6" />
      <path d="M12 3a5.5 5.5 0 0 0-3.2 10c.7.6 1.2 1.3 1.2 2.2h4c0-.9.5-1.6 1.2-2.2A5.5 5.5 0 0 0 12 3Z" />
    </svg>
  );
}

export function IconUsers(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2.8 19c.6-3 2.6-4.7 5.7-4.7S13.9 16 14.5 19" />
      <circle cx="16.5" cy="8.8" r="2.4" />
      <path d="M16 14.3c2.2.3 3.7 1.8 4.2 4.2" />
    </svg>
  );
}

export function IconGrid(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function IconMic(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5v4M8.5 21.5h7" />
    </svg>
  );
}

export function IconHammer(props) {
  return (
    <svg {...base} {...props}>
      <path d="m14.5 6.5 3-3 3 3-3 3M13 8l-8.5 8.5a1.6 1.6 0 0 0 0 2.3l.7.7a1.6 1.6 0 0 0 2.3 0L16 11" />
      <path d="m11.5 6.5 6 6" />
    </svg>
  );
}
