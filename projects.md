---
layout: default
title: "Projects"
description: "Pinned links and categorized items across business, mission, tools, and ideas."
permalink: /projects/
---

{% assign links = site.data.links %}

<section class="container" style="max-width:1100px;">
  <div class="section__head" style="margin-bottom:24px;">
    <h1 class="section__title" style="font-size:2.2rem;">Projects</h1>
    <p class="section__blurb" style="font-size:1.15rem;">A curated portfolio of active work, public demos, and values-driven initiatives.</p>
  </div>
  <div class="section" id="pinned" style="background:linear-gradient(120deg,#7aa2ff11 0%,#7cffc711 100%),var(--panel);box-shadow:0 4px 24px #7aa2ff22;">
    <div class="section__head">
      <h2 class="section__title">Pinned</h2>
      <p class="section__blurb">Primary destinations and active public work.</p>
    </div>
    <div class="grid">
      {% for item in links.pinned %}
        {% include link-card.html item=item %}
      {% endfor %}
    </div>
  </div>
  <div class="stack" style="margin-top:18px;">
    {% for s in links.sections %}
      {% include section.html section=s %}
    {% endfor %}
  </div>
</section>
