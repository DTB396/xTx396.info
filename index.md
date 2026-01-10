---
layout: home
title: "Barber, Devon Tyler"
description: "Public work hub for Devon Tyler (DTB396) — Atlantic County, NJ."
---
Welcome to the professional portfolio of Devon Tyler.

Below are active projects:

<ul class="project-list">
{% assign projects = site.data.projects | sort: "priority" %}
{% for project in projects %}
  <li class="project-card">
    <div class="project-card-title">
      <a href="{{ project.url | relative_url }}">{{ project.name }}</a>
    </div>
    <div class="project-card-summary">{{ project.summary }}</div>
  </li>
{% endfor %}
</ul>