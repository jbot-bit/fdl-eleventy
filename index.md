---
layout: "layout.njk"
title: "Chronology of Events"
---
<h1>{{ title }}</h1>
<p>This page presents a factual, chronological record of events based on the available evidence.</p>

<table class="table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Event Description</th>
      <th>Related People</th>
      <th>Related Evidence</th>
    </tr>
  </thead>
  <tbody>
  {%- for event in chronology | reverse -%}
    <tr>
      <td>{{ event.date }}</td>
      <td>{{ event.description }}</td>
      <td>
        {# This section splits the people slugs and creates a link for each one #}
        {%- for slug in event.people.split(',') -%}
          {%- set person = collections.people | findBySlug(slug.trim()) -%}
          {%- if person -%}
            <a href="{{ person.url }}">{{ person.data.name }}</a>{% if not loop.last %}, {% endif %}
          {%- else -%}
            <span class="tag is-danger">{{ slug.trim() }}</span>
          {%- endif -%}
        {%- endfor -%}
      </td>
      <td>
        {# This section does the same for evidence slugs #}
        {%- for slug in event.evidence.split(',') -%}
          {%- set evidence_item = collections.evidence | findBySlug(slug.trim()) -%}
          {%- if evidence_item -%}
            <a href="{{ evidence_item.url }}">{{ evidence_item.data.title }}</a>{% if not loop.last %}, {% endif %}
          {%- else -%}
            <span class="tag is-danger">{{ slug.trim() }}</span>
          {%- endif -%}
        {%- endfor -%}
      </td>
    </tr>
  {%- endfor -%}
  </tbody>
</table>