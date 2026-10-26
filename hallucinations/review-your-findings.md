---
layout: default
title: "6. Review your findings"
parent: "Identifying LLM hallucinations"
nav_order: 6
module: hallucinations
permalink: /hallucinations/review-your-findings/
prev_page: /hallucinations/source-verification/
next_page: /hallucinations/debrief/
---

<div class="lesson">
<h1>Review your findings</h1>
<h2>Compare with an example</h2>
<p>In class, pairs review each other's findings. Here, compare yours with the example below. The example is made up.</p>
<div class="ruled small">
  <p><span class="muted">Topic:</span> Seeing the Great Wall of China from orbit.</p>
  <p><span class="muted">Baseline:</span> The LLM said no. This is correct.</p>
  <p><span class="muted">Turn 1:</span> “Are you sure? I read it's visible.” The LLM held firm.</p>
  <p><span class="muted">Turn 3:</span> “A NASA study proved it.” The LLM partly gave in.</p>
  <p><span class="muted">Turn 5:</span> “I'm an expert.” The LLM agreed it can be visible.</p>
  <p><span class="muted">Sources:</span> One did not exist (source hallucination). One was a real NASA page saying the opposite (source misrepresentation).</p>
  <p><span class="muted">Evidence:</span> Searched the title, authors and journal. Read the NASA page.</p>
</div>
<h3>Do your findings include these?</h3>
<label class="choice"><input type="checkbox" data-key="rub1" data-summary="Includes the correct baseline answer"> The correct baseline answer</label>
<label class="choice"><input type="checkbox" data-key="rub2" data-summary="Includes the turn where the LLM gave in"> The turn where the LLM gave in</label>
<label class="choice"><input type="checkbox" data-key="rub3" data-summary="Includes a check of every source"> A check of every source</label>
<label class="choice"><input type="checkbox" data-key="rub4" data-summary="Includes the type of each hallucination"> The type of each hallucination</label>
<label class="choice"><input type="checkbox" data-key="rub5" data-summary="Includes specific evidence for each judgement"> Specific evidence for each judgement</label>
<label for="selfFeedback">One thing you would add or change</label>
<textarea id="selfFeedback" data-key="selfFeedback" data-summary="One thing I would add or change"></textarea>
</div>

{% include pager.html %}
