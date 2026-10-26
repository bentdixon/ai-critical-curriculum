---
layout: default
title: "4. Round 2: struggle first"
parent: "Grit: struggling with hard problems"
nav_order: 4
module: grit
permalink: /grit/round-2-struggle-first/
katex: true
prev_page: /grit/round-1-on-your-own/
next_page: /grit/round-2-on-your-own/
---

<div class="lesson">
<h1>Round 2: struggle first</h1>
<h2>Problem C</h2>
<p class="muted">No AI this time. Work alone for 5 minutes before using a hint.</p>
<p class="ruled">Two fair dice are rolled. Given at least one 6, what is the probability both are 6?</p>
<div class="row"><span class="timer" id="timer">5:00</span><button type="button" id="timerBtn">Start 5-minute timer</button></div>
<div class="row"><button type="button" id="hintBtn" disabled>Show a hint</button><span class="muted small" id="hintNote">Hints unlock when the timer ends.</span></div>
<ol id="hints" class="hidden"></ol>
<div class="answer" data-problem="C">
  <label for="ansC">Your answer (a fraction is fine)</label>
  <div class="row"><input type="text" class="short" id="ansC" data-key="ansC" data-summary="My answer to Problem C"><button type="button" class="check">Check</button></div>
  <p class="feedback"></p>
</div>
<div class="row no-print"><button type="button" class="show" data-sol="solC">Show worked answer</button></div>
<div id="solC" class="hidden ruled">
  <p>There are 36 equally likely outcomes. Of these, <span data-tex="5 \times 5 = 25"></span> have no 6. So <span data-tex="36 - 25 = 11"></span> have at least one 6. Only (6, 6) shows two 6s:</p>
  <div class="eq"><span class="m" data-tex="P(\text{both } 6 \mid \text{at least one } 6) = \frac{1}{11}"></span><span class="n">(4)</span></div>
</div>
</div>

{% include pager.html %}
