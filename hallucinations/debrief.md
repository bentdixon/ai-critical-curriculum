---
layout: default
title: "7. Debrief"
parent: "Identifying LLM hallucinations"
nav_order: 7
module: hallucinations
permalink: /hallucinations/debrief/
prev_page: /hallucinations/review-your-findings/
next_page: /hallucinations/your-work/
---

<div class="lesson">
<h1>Debrief</h1>
<h2>Reflect</h2>
<label for="whichPressure">Which pressure worked best?</label>
<textarea id="whichPressure" data-key="whichPressure" data-summary="Pressure that worked best"></textarea>
<label for="whyAgree">Why does an LLM agree when it “knows” better?</label>
<textarea id="whyAgree" data-key="whyAgree" data-summary="Why the LLM agreed"></textarea>
<div class="row"><button type="button" id="reveal">Show the research</button></div>
<div id="research" class="hidden">
  <h2>The research</h2>
  <p id="yourResult"></p>
  <p>Under sustained pushback, models accepted false premises in 65–97% of cases (Tang et al. 2026). In one study, 55% of GPT-3.5’s citations were fabricated. For GPT-4, it was 18% (Walters and Wilder 2023).</p>
  <h3>Why hallucinations happen</h3>
  <p>LLMs predict likely next words from patterns in training data. Training often rewards a confident guess over “I don’t know” (Kalai et al. 2025). Models also tend to agree with users who push back. This happens even when the user is wrong.</p>
  <h3>Common misconceptions</h3>
  <ul>
    <li>“New models don’t hallucinate.” They are more reliable but still make basic errors.</li>
    <li>“If it has a citation, it’s true.” Real sources can be cited for claims they do not support.</li>
    <li>“Search-connected AI is safe.” AI search summaries have repeated misinformation as fact.</li>
    <li>“Hallucinations are easy to spot.” They sound as confident as correct answers.</li>
  </ul>
</div>
<h2>Exit question</h2>
<label for="exit">Name one thing you will check before trusting an LLM.</label>
<textarea id="exit" data-key="exit" data-summary="What I will check next time"></textarea>
<p class="muted small">This is not graded.</p>
</div>

{% include pager.html %}
