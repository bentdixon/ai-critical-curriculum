---
layout: default
title: "3. Application"
parent: "Using LLMs effectively"
nav_order: 3
module: positive-usage
permalink: /positive-usage/application/
prev_page: /positive-usage/map-examples/
next_page: /positive-usage/reflect/
---

<div class="lesson">
<h1>Application</h1>
<h2>Pick a topic</h2>
<label for="topic">Pick a topic of interest.</label>
<input type="text" id="topic" data-key="topic" data-summary="My topic">
<label for="facts">Find three facts about it outside of AI sources. Note where you found them.</label>
<textarea id="facts" data-key="facts" data-summary="Facts found without AI, and sources"></textarea>
<h2>Run through each level with AI</h2>
<p>Open an AI tool in another tab. Start a new chat. Work up the levels, one at a time.</p>
<h3>Knowledge</h3>
<div class="prompt"><p class="text">I am learning about <span class="topic">[your topic]</span>. Ask me five quiz questions, one at a time. Wait for my answer each time. Do not give hints.</p><button class="copy" type="button">Copy</button></div>
<label for="n1">What did you do? What did you learn?</label>
<textarea id="n1" data-key="n1" data-summary="Knowledge: what I did and learned"></textarea>
<p class="muted small">Who did most of the thinking?</p>
<div class="row">
  <label class="choice"><input type="radio" name="w1" value="Me" data-key="w1" data-summary="Knowledge: who did the thinking"> Me</label>
  <label class="choice"><input type="radio" name="w1" value="Both" data-key="w1" data-summary="Knowledge: who did the thinking"> Both</label>
  <label class="choice"><input type="radio" name="w1" value="AI" data-key="w1" data-summary="Knowledge: who did the thinking"> AI</label>
</div>
<h3>Comprehension</h3>
<div class="prompt"><p class="text">I will explain <span class="topic">[your topic]</span> in my own words. Reply only with clarification questions. Do not correct me.</p><button class="copy" type="button">Copy</button></div>
<label for="n2">What did you do? What did you learn?</label>
<textarea id="n2" data-key="n2" data-summary="Comprehension: what I did and learned"></textarea>
<p class="muted small">Who did most of the thinking?</p>
<div class="row">
  <label class="choice"><input type="radio" name="w2" value="Me" data-key="w2" data-summary="Comprehension: who did the thinking"> Me</label>
  <label class="choice"><input type="radio" name="w2" value="Both" data-key="w2" data-summary="Comprehension: who did the thinking"> Both</label>
  <label class="choice"><input type="radio" name="w2" value="AI" data-key="w2" data-summary="Comprehension: who did the thinking"> AI</label>
</div>
<h3>Application</h3>
<div class="prompt"><p class="text">Give me a new, real situation involving <span class="topic">[your topic]</span>. Do not solve it. I will apply what I know.</p><button class="copy" type="button">Copy</button></div>
<label for="n3">What did you do? What did you learn?</label>
<textarea id="n3" data-key="n3" data-summary="Application: what I did and learned"></textarea>
<p class="muted small">Who did most of the thinking?</p>
<div class="row">
  <label class="choice"><input type="radio" name="w3" value="Me" data-key="w3" data-summary="Application: who did the thinking"> Me</label>
  <label class="choice"><input type="radio" name="w3" value="Both" data-key="w3" data-summary="Application: who did the thinking"> Both</label>
  <label class="choice"><input type="radio" name="w3" value="AI" data-key="w3" data-summary="Application: who did the thinking"> AI</label>
</div>
<h3>Analysis</h3>
<div class="prompt"><p class="text">List the main parts of <span class="topic">[your topic]</span>. Do not explain how they connect. I will explain that.</p><button class="copy" type="button">Copy</button></div>
<label for="n4">What did you do? What did you learn?</label>
<textarea id="n4" data-key="n4" data-summary="Analysis: what I did and learned"></textarea>
<p class="muted small">Who did most of the thinking?</p>
<div class="row">
  <label class="choice"><input type="radio" name="w4" value="Me" data-key="w4" data-summary="Analysis: who did the thinking"> Me</label>
  <label class="choice"><input type="radio" name="w4" value="Both" data-key="w4" data-summary="Analysis: who did the thinking"> Both</label>
  <label class="choice"><input type="radio" name="w4" value="AI" data-key="w4" data-summary="Analysis: who did the thinking"> AI</label>
</div>
<h3>Synthesis</h3>
<div class="prompt"><p class="text">Here is my theory about <span class="topic">[your topic]</span>: [write your theory]. Ask me questions that test it. Do not rewrite it.</p><button class="copy" type="button">Copy</button></div>
<label for="n5">What did you do? What did you learn?</label>
<textarea id="n5" data-key="n5" data-summary="Synthesis: what I did and learned"></textarea>
<p class="muted small">Who did most of the thinking?</p>
<div class="row">
  <label class="choice"><input type="radio" name="w5" value="Me" data-key="w5" data-summary="Synthesis: who did the thinking"> Me</label>
  <label class="choice"><input type="radio" name="w5" value="Both" data-key="w5" data-summary="Synthesis: who did the thinking"> Both</label>
  <label class="choice"><input type="radio" name="w5" value="AI" data-key="w5" data-summary="Synthesis: who did the thinking"> AI</label>
</div>
<h3>Evaluation</h3>
<div class="prompt"><p class="text">Give me three claims about <span class="topic">[your topic]</span>. Some may be false. Do not say which. I will judge each one.</p><button class="copy" type="button">Copy</button></div>
<label for="n6">What did you do? What did you learn?</label>
<textarea id="n6" data-key="n6" data-summary="Evaluation: what I did and learned"></textarea>
<p class="muted small">Who did most of the thinking?</p>
<div class="row">
  <label class="choice"><input type="radio" name="w6" value="Me" data-key="w6" data-summary="Evaluation: who did the thinking"> Me</label>
  <label class="choice"><input type="radio" name="w6" value="Both" data-key="w6" data-summary="Evaluation: who did the thinking"> Both</label>
  <label class="choice"><input type="radio" name="w6" value="AI" data-key="w6" data-summary="Evaluation: who did the thinking"> AI</label>
</div>
<p>Check the AI’s answers against the facts you found.</p>
</div>

{% include pager.html %}
