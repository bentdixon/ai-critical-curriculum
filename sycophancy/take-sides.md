---
layout: default
title: "2. Take sides"
parent: "LLM sycophancy and working with others"
nav_order: 2
module: sycophancy
permalink: /sycophancy/take-sides/
prev_page: /sycophancy/introduction/
next_page: /sycophancy/private-ai-consult/
---

<div class="lesson">
<h1>Take sides</h1>
<h2>Choose a question</h2>
<label class="choice"><input type="radio" name="q" value="0" data-key="q"> Should lectures be recorded?</label>
<label class="choice"><input type="radio" name="q" value="1" data-key="q"> Should exams be open-book?</label>
<label class="choice"><input type="radio" name="q" value="2" data-key="q"> Is studying in groups better than studying alone?</label>
<h2>Choose your side</h2>
<p class="muted small">Pick the side you lean towards. If unsure, pick one anyway.</p>
<div id="sidePick"></div>
<h2>Rate your views</h2>
<label for="c1">How certain are you of your side? <span class="rating-val" data-for="c1">5</span> / 10</label>
<input type="range" id="c1" min="0" max="10" step="1" value="5" data-key="c1" data-summary="Certainty at the start (0–10)">
<div class="scale"><span>Not at all</span><span>Completely</span></div>
<label for="r1">How reasonable does the other side seem? <span class="rating-val" data-for="r1">5</span> / 10</label>
<input type="range" id="r1" min="0" max="10" step="1" value="5" data-key="r1" data-summary="Other side reasonable at the start (0–10)">
<div class="scale"><span>Not at all</span><span>Completely</span></div>
</div>

{% include pager.html %}
