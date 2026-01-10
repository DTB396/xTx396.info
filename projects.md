---
layout: default
title: "Projects"
---


<h2>All Projects</h2>
<ul class="project-list">
{% assign projects = site.data.projects | sort: "priority" %}
{% for project in projects %}
	{% include project-card.html project=project %}
{% endfor %}
</ul>
