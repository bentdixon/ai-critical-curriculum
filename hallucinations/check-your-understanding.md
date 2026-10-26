---
layout: default
title: "2. Check your understanding"
parent: "Identifying LLM hallucinations"
nav_order: 2
module: hallucinations
permalink: /hallucinations/check-your-understanding/
prev_page: /hallucinations/introduction/
next_page: /hallucinations/baseline/
---

<div class="lesson">
<h1>Check your understanding</h1>
<h2>Sort these examples</h2>
<p>Each example was made up for this exercise. Choose the type of hallucination.</p>

<div class="ruled quiz" data-answer="factual">
  <p>A. “The Eiffel Tower was completed in 1899.”</p>
  <label class="choice"><input type="radio" name="q1" value="factual"> Factual hallucination</label>
  <label class="choice"><input type="radio" name="q1" value="source"> Source hallucination</label>
  <label class="choice"><input type="radio" name="q1" value="misrep"> Source misrepresentation</label>
  <p class="feedback" data-ok="Correct. It was completed in 1889." data-no="Not quite. No source is cited. The date is simply wrong."></p>
</div>

<div class="ruled quiz" data-answer="source">
  <p>B. “Hartley and Moss (2021) show that sleep doubles exam recall.” In this example, the paper does not exist.</p>
  <label class="choice"><input type="radio" name="q2" value="factual"> Factual hallucination</label>
  <label class="choice"><input type="radio" name="q2" value="source"> Source hallucination</label>
  <label class="choice"><input type="radio" name="q2" value="misrep"> Source misrepresentation</label>
  <p class="feedback" data-ok="Correct. The citation was invented." data-no="Not quite. The paper itself does not exist."></p>
</div>

<div class="ruled quiz" data-answer="misrep">
  <p>C. “Bastani et al. (2025) found GPT-4 practice raised later exam scores.”</p>
  <label class="choice"><input type="radio" name="q3" value="factual"> Factual hallucination</label>
  <label class="choice"><input type="radio" name="q3" value="source"> Source hallucination</label>
  <label class="choice"><input type="radio" name="q3" value="misrep"> Source misrepresentation</label>
  <p class="feedback" data-ok="Correct. The study is real but found the opposite. Students scored 17% lower without GPT-4." data-no="Not quite. The study is real but found the opposite."></p>
</div>
</div>

{% include pager.html %}
