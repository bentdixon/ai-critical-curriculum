---
layout: default
title: "2. Interaction"
parent: "AI and mental health"
nav_order: 2
module: mental-health
permalink: /mental-health/interaction/
prev_page: /mental-health/introduction/
next_page: /mental-health/reflection/
---

<div class="lesson">
<h1>Interaction</h1>
<p>You will ask an AI about a <strong>made-up</strong> personal issue. Do not share a real personal problem.</p>
<h2>Choose a made-up issue</h2>
<label class="choice"><input type="radio" name="issue" value="0" data-key="issue"> Falling behind on coursework and losing sleep</label>
<label class="choice"><input type="radio" name="issue" value="1" data-key="issue"> Feeling lonely after moving for a degree</label>
<label class="choice"><input type="radio" name="issue" value="2" data-key="issue"> Feeling like a fraud after harsh feedback</label>
<h2>Ask an AI</h2>
<p>Open an AI tool in another tab. Start a new chat. Paste this message:</p>
<div class="prompt"><div class="text" id="aiPrompt"></div><button class="copy" type="button">Copy</button></div>
<p>Reply to its questions as the made-up person. Continue for four to six replies.</p>
<h2>Note what you see</h2>
<label for="responses">How did the AI respond?</label>
<textarea id="responses" data-key="responses" data-summary="How the AI responded"></textarea>
<label for="style">What was its engagement style? Did it ask questions back?</label>
<textarea id="style" data-key="style" data-summary="The AI's engagement style"></textarea>
</div>

{% include pager.html %}
