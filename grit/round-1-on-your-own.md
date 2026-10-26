---
layout: default
title: "3. Round 1: on your own"
parent: "Grit: struggling with hard problems"
nav_order: 3
module: grit
permalink: /grit/round-1-on-your-own/
katex: true
prev_page: /grit/round-1-ai-first/
next_page: /grit/round-2-struggle-first/
---

<div class="lesson">
<h1>Round 1: on your own</h1>
<h2>Problem B</h2>
<p class="muted">No AI. Use paper and pen.</p>
<p class="ruled">Same table. In how many ways if two particular people refuse to sit together?</p>
<div class="answer" data-problem="B">
  <label for="ansB">Your answer</label>
  <div class="row"><input type="text" class="short" id="ansB" data-key="ansB" data-summary="My answer to Problem B" inputmode="decimal"><button type="button" class="check">Check</button></div>
  <p class="feedback"></p>
</div>
<label for="stepsB">Mark the steps you can't rebuild without the AI.</label>
<textarea id="stepsB" data-key="stepsB" data-summary="Steps I can't rebuild (Round 1)"></textarea>
<div class="row no-print"><button type="button" class="show" data-sol="solB">Show worked answer</button></div>
<div id="solB" class="hidden ruled">
  <p>Fix one person's seat to remove rotations. The other 4 can then sit in any order. This answers Problem A:</p>
  <div class="eq"><span class="m" data-tex="(5-1)! = 24"></span><span class="n">(1)</span></div>
  <p>Next, count seatings where the two sit together. Treat them as one block. That leaves 4 units around the table. The pair can also swap places inside the block:</p>
  <div class="eq"><span class="m" data-tex="2 \times (4-1)! = 12"></span><span class="n">(2)</span></div>
  <p>Subtract (2) from (1):</p>
  <div class="eq"><span class="m" data-tex="24 - 12 = 12"></span><span class="n">(3)</span></div>
</div>
</div>

{% include pager.html %}
