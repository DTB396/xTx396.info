---
layout: default
title: "Projects"
permalink: /projects/
---
<section class="page">
  <div class="container">
    <header class="page__head">
      <h1 class="section__title">Projects</h1>
      <p class="page__blurb">A curated index of active, documented work.</p>
    </header>

    <ul class="project-list">
      {% assign projects = site.data.projects | sort: "priority" %}
      {% for project in projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </ul>
  </div>
</section>
