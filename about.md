---
layout: default
title: "About"
description: "About Devon Tyler — background, principles, and how to connect."
permalink: /about/
---

<section class="container" style="max-width:800px;">
  <div class="section__head" style="margin-bottom:24px;">
    <h1 class="section__title" style="font-size:2.2rem;">About</h1>
    <p class="section__blurb" style="font-size:1.15rem;">A transparent, principle-driven approach to building value and trust.</p>
  </div>
  <div class="panel" style="background:linear-gradient(120deg,#7aa2ff11 0%,#7cffc711 100%),var(--panel);box-shadow:0 4px 24px #7aa2ff22;">
    <p style="font-size:1.12rem;">
      <strong>{{ site.data.profile.name }}</strong> is based in <strong>{{ site.data.profile.location }}</strong>.<br>
      This public hub showcases active work, durable systems, and a commitment to ethical growth.
    </p>
    <div style="margin:24px 0 18px 0;">
      <span style="display:inline-block;background:var(--accent);color:#fff;padding:6px 16px;border-radius:999px;font-weight:600;font-size:1.08rem;box-shadow:0 2px 8px #7aa2ff33;">Builder | Operator | Investor-Ready</span>
    </div>
    <h2 class="section__title" style="margin-top:18px;">Operating Principles</h2>
    <ul style="font-size:1.08rem;line-height:1.7;">
      <li><strong>Clarity:</strong> Plain-language, no hype.</li>
      <li><strong>Separation:</strong> Clear categories for business, mission, tools, and ideas.</li>
      <li><strong>Privacy:</strong> No publication of private repositories or sensitive assets.</li>
      <li><strong>Integrity:</strong> Factual claims only; corrections welcomed.</li>
    </ul>
    <h2 class="section__title" style="margin-top:18px;">What I Build</h2>
    <ul style="font-size:1.08rem;line-height:1.7;">
      <li><strong>Practical systems:</strong> Tools that reduce friction and make work easier to ship.</li>
      <li><strong>Field-ready execution:</strong> Real-world workflows, documentation, and operational reliability.</li>
      <li><strong>Simple, durable web:</strong> Fast static sites and small utilities with minimal dependencies.</li>
    </ul>
    <h2 class="section__title" style="margin-top:18px;">What I Don’t Do</h2>
    <ul style="font-size:1.08rem;line-height:1.7;">
      <li><strong>No hype:</strong> No inflated claims, fake metrics, or implied endorsements.</li>
      <li><strong>No private leakage:</strong> No publication of private repo contents or sensitive materials.</li>
      <li><strong>No inflammatory framing:</strong> Neutral language, verifiable facts only.</li>
    </ul>
    <div style="margin-top:28px;">
      <h2 class="section__title">Contact</h2>
      <p class="muted">Add your preferred contact methods in <code>/_data/profile.yml</code> under <code>social</code>.</p>
      {% include social-icons.html %}
    </div>
  </div>
</section>


    <h2 class="section__title" style="margin-top:18px;">Contact</h2>
    <p class="muted">
      Add your preferred contact methods in <code>/_data/profile.yml</code> under <code>social</code>.
    </p>

    {% include social-icons.html %}
  </div>
</section>
