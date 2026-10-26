---
layout: default
title: Home
nav_order: 1
permalink: /
---

# Using AI Responsibly
{: .fs-8 }

Most modules take about 35 minutes. Some steps need an AI tool, such as ChatGPT or Claude. Your answers stay in this browser.
{: .fs-5 .fw-300 }

<div class="module-grid">
{% for pair in site.data.modules %}{% assign key = pair[0] %}{% assign m = pair[1] %}
  <a class="module-card{% if key == 'mental-health' %} is-soon{% endif %}" href="{{ m.url | relative_url }}">
    <span class="module-icon">{% include icons/{{ key }}.svg %}</span>
    <span class="module-title">{{ m.title }}</span>
    <span class="module-blurb">{{ m.blurb }}</span>
    <span class="module-time">{{ m.time }}</span>
  </a>
{% endfor %}
</div>
