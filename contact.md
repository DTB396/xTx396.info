---
layout: default
title: "Contact"
description: "Contact Devon Tyler via email or social links."
permalink: /contact/
---
<section class="page">
  <div class="container">
    <header class="page__head">
      <h1 class="section__title">Contact</h1>
      <p class="page__blurb">Direct, low-friction ways to connect. No forms, no tracking—just the essentials.</p>
    </header>

    <div class="panel panel--glow">
      <div class="contact-cards">
        <a class="contact-card" href="mailto:{{ site.data.profile.email }}">
          <span class="contact-card__label">Email</span>
          <span class="contact-card__value">{{ site.data.profile.email }}</span>
        </a>
        <a class="contact-card" href="mailto:{{ site.data.profile.contact.email | default: site.data.profile.email }}">
          <span class="contact-card__label">Email (Primary)</span>
          <span class="contact-card__value">{{ site.data.profile.contact.email | default: site.data.profile.email }}</span>
        </a>
        <a class="contact-card" href="https://github.com/{{ site.data.profile.github }}" rel="noopener noreferrer">
          <span class="contact-card__label">GitHub</span>
          <span class="contact-card__value">{{ site.data.profile.github }}</span>
        </a>
        {% if site.data.profile.social.linkedin %}
          <a class="contact-card" href="{{ site.data.profile.social.linkedin }}" rel="noopener noreferrer">
            <span class="contact-card__label">LinkedIn</span>
            <span class="contact-card__value">Profile</span>
          </a>
        {% endif %}
      </div>

      <div class="hero__social" aria-label="Social links">{% include social-icons.html %}</div>
    </div>
  </div>
</section>
