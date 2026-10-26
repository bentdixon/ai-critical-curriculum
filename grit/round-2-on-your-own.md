---
layout: default
title: "5. Round 2: on your own"
parent: "Grit: struggling with hard problems"
nav_order: 5
module: grit
permalink: /grit/round-2-on-your-own/
katex: true
prev_page: /grit/round-2-struggle-first/
next_page: /grit/debrief/
---

<div class="lesson">
<h1>Round 2: on your own</h1>
<h2>Problem D</h2>
<p class="muted">No AI. Use paper and pen.</p>
<p class="ruled">A family has two children. Given at least one is a girl, what is the probability both are girls? Girls and boys are equally likely.</p>
<div class="answer" data-problem="D">
  <label for="ansD">Your answer</label>
  <div class="row"><input type="text" class="short" id="ansD" data-key="ansD" data-summary="My answer to Problem D"><button type="button" class="check">Check</button></div>
  <p class="feedback"></p>
</div>
<label for="stepsD">Mark any steps you can't rebuild.</label>
<textarea id="stepsD" data-key="stepsD" data-summary="Steps I can't rebuild (Round 2)"></textarea>
<div class="row no-print"><button type="button" class="show" data-sol="solD">Show worked answer</button></div>
<div id="solD" class="hidden ruled">
  <p>The four equally likely families are GG, GB, BG and BB. At least one girl rules out BB. Of the remaining three, only GG has two girls:</p>
  <div class="eq"><span class="m" data-tex="P(\text{both girls} \mid \text{at least one girl}) = \frac{1}{3}"></span><span class="n">(5)</span></div>
  <p>This uses the same idea as Problem C.</p>
</div>
</div>

{% include pager.html %}
