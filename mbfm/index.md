---
layout: default
title: Moreton Bay Fur Meet
show_connect: true
permalink: /mbfm/
---

{% assign m = site.data.mbfm %}
{% assign g = m.group_info %}

{% include back-home.html %}

<header class="page-header mbfm-header">
  <p class="mbfm-abbr">{{ g.abbr }}</p>
  <h1>{{ g.name }}</h1>
  <p class="subtitle">{{ g.tagline }}</p>
</header>

{% if m.next_meet %}
<section class="meet-card">
  <h2>Next meet</h2>
  <p class="meet-title">{{ m.next_meet.title }}</p>
  <dl class="meet-details">
    <div><dt>When</dt><dd>{{ m.next_meet.date }} · {{ m.next_meet.time }}</dd></div>
    <div><dt>Where</dt><dd>{{ m.next_meet.location }}</dd></div>
  </dl>
  <p class="meet-extra">{{ m.next_meet.details }}</p>
</section>
{% endif %}

<section class="link-actions">
  <h2>Telegram</h2>
  <a href="{{ g.announcements_channel }}" class="action-btn mbfm-btn" target="_blank" rel="noopener noreferrer">Announcements channel</a>
</section>

<section class="link-actions">
  <a href="{{ links.rules | relative_url }}" class="pillar-card mbfm-theme rules-link-card">
    <div class="pillar-icon">📋</div>
    <div class="pillar-content">
      <h3>Rules &amp; guidelines</h3>
      <p>Chat and IRL meet expectations</p>
    </div>
  </a>
</section>
