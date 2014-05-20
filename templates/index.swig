<!doctype html>
<html>
  <head>
    <title>{{ title }} :: Field notes for a web app project</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="{{ url("build.css") }}">
  </head>
  <body>
    <header>
    </header>

    <section class="index">

      <section class="intro">
        <h2><a href="{{ url("") }}">Home</a></h2>
        <h2>The project</h2>
        <ul>
        {% for f in index['intro'] %}
          <li><a href="{{ url(f.path) }}">{{ f.title }}</a></li>
        {% endfor %}
        </ul>
      </section>
      
      <section class="meta">
        <h2>Meta</h2>
        <ul>
        {% for f in index['meta'] %}
          <li><a href="{{ url(f.path) }}">{{ f.title }}</a></li>
        {% endfor %}
        </ul>
      </section>

      <section class="diary">
        <h2>Diary</h2>
        <ul>
        {% for grp in index['diary'] %}
          <li><h3>{{ grp.key }}</h3>
            <ul>
            {% for f in grp.values %}
              <li><a href="{{ url(f.path) }}">{{ f.title }}</a></li>
            {% endfor %}
            </ul>
          </li>
        {% endfor %}
        </ul>
      </section>

    </section>

    <section class="body">

      <h1>{{ title }}</h1>
      {{ contents | safe }}

    </section>

    <section class="footer">
    </section>

</div>
