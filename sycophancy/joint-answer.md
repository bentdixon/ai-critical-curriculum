---
layout: default
title: "4. Joint answer"
parent: "LLM sycophancy and working with others"
nav_order: 4
module: sycophancy
permalink: /sycophancy/joint-answer/
prev_page: /sycophancy/private-ai-consult/
next_page: /sycophancy/debrief/
---

<div class="lesson">
<h1>Joint answer</h1>
<h2>Hear the other side</h2>
<p>Read a case from a student on the other side. If a friend is free, do this step with them.</p>
<div class="case" id="otherCase"></div>
<h2>Agree on one position</h2>
<label for="theirBest">The strongest point from their side</label>
<textarea id="theirBest" data-key="theirBest" data-summary="Strongest point from the other side"></textarea>
<label for="myBest">The strongest point from your side</label>
<textarea id="myBest" data-key="myBest" data-summary="Strongest point from my side"></textarea>
<label for="shared">One position you could both accept</label>
<textarea id="shared" data-key="shared" data-summary="Shared position"></textarea>
<h2>Rate your views a third time</h2>
<label for="c3">How certain are you of your side? <span class="rating-val" data-for="c3">5</span> / 10</label>
<input type="range" id="c3" min="0" max="10" step="1" value="5" data-key="c3" data-summary="Certainty after the other side (0–10)">
<div class="scale"><span>Not at all</span><span>Completely</span></div>
<label for="r3">How reasonable does the other side seem? <span class="rating-val" data-for="r3">5</span> / 10</label>
<input type="range" id="r3" min="0" max="10" step="1" value="5" data-key="r3" data-summary="Other side reasonable after the other side (0–10)">
<div class="scale"><span>Not at all</span><span>Completely</span></div>
</div>

{% include pager.html %}
