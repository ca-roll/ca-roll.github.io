---
title: "News"
layout: textlay
excerpt: "CAROLL Research Group at University of Passau."
sitemap: false
permalink: /news.html
---

# News

{% for article in site.data.news %}
<p>
{{ article.date }} <br>
<em>{{ article.headline }}</em>

{% if article.photo %}
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ article.photo }}" class="img-responsive" width="25%" style="vertical_align:top" />
{% endif %}

</p>
{% endfor %}
