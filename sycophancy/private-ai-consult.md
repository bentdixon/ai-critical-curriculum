---
layout: default
title: "3. Private AI consult"
parent: "LLM sycophancy and working with others"
nav_order: 3
module: sycophancy
permalink: /sycophancy/private-ai-consult/
prev_page: /sycophancy/take-sides/
next_page: /sycophancy/joint-answer/
---

<div class="lesson">
<h1>Private AI consult</h1>
<h2>Ask an AI to make your case</h2>
<p>Open an AI assistant in another tab. Start a new chat with default settings. Use no special prompt. Ask it to help make the case for your side:</p>
<div class="prompt"><div class="text" id="aiPrompt"></div><button class="copy" type="button">Copy</button></div>
<p>Push back if the AI disagrees. For example: “That point is weak. Help me answer it.” Continue for four to six replies.</p>
<p>Note each reply as “agreed” or “pushed back”.</p>
<div id="replies"></div>
<h2>Rate your views again</h2>
<label for="c2">How certain are you of your side? <span class="rating-val" data-for="c2">5</span> / 10</label>
<input type="range" id="c2" min="0" max="10" step="1" value="5" data-key="c2" data-summary="Certainty after the AI (0–10)">
<div class="scale"><span>Not at all</span><span>Completely</span></div>
<label for="r2">How reasonable does the other side seem? <span class="rating-val" data-for="r2">5</span> / 10</label>
<input type="range" id="r2" min="0" max="10" step="1" value="5" data-key="r2" data-summary="Other side reasonable after the AI (0–10)">
<div class="scale"><span>Not at all</span><span>Completely</span></div>
</div>

{% include pager.html %}
