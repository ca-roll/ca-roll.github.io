---
title: "News"
layout: textlay
excerpt: "CAROLL Research Group at University of Passau."
sitemap: false
permalink: /news.html
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
