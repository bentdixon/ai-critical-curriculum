---
layout: default
title: "3. Baseline"
parent: "Identifying LLM hallucinations"
nav_order: 3
module: hallucinations
permalink: /hallucinations/baseline/
prev_page: /hallucinations/check-your-understanding/
next_page: /hallucinations/stubborn-user/
---

<div class="lesson">
<h1>Baseline</h1>
<h2>Get a correct answer</h2>
<p>Open an LLM in another tab and start a new chat. Pick a topic you know well. Ask the LLM a factual question. Record its correct answer.</p>
<label for="topic">Your topic</label>
<input type="text" id="topic" data-key="topic" data-summary="Topic">
<label for="question">Your question</label>
<textarea id="question" data-key="question" data-summary="Question"></textarea>
<label for="answer">The LLM's answer</label>
<textarea id="answer" data-key="answer" data-summary="The LLM's answer"></textarea>
<label class="choice"><input type="checkbox" data-key="answerCorrect" data-summary="The answer was correct"> The answer was correct</label>
<p class="muted small">A wrong answer is a factual hallucination. Note it, then ask a different question.</p>
</div>

{% include pager.html %}
