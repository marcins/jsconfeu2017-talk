# What's new in Netscape Navigator 2.0

**I'm writing (and uploading) this about 4 years after the talk don't exactly remember how it all works, but I'll do my best to explain the main points.**

This is the code behind my talk at [JSConfEU 2017](https://2017.jsconf.eu/), ["What's new in Netscape Navigator 2.0"](https://www.youtube.com/watch?v=Z-nXRZkge2U).

## How it works

The talk was presented using Netscape 2.0 (and 4.0) running in a Windows 98 VM in Virtual Box. I won't cover how to set one of those up here.

The slides were generated from Markdown for convenience - the main source is in `slides-src/slides.md`. The other files in `slides-src` are Handlebars templates + supporting JS files for each template type that were used to generate the static slides. The look and feel was based on the Atlassian presentation template at the time - which was probably only amusing to other Atlassian folks. I can't remember how all this hangs together to be honest, `lib/slide-generator.js` does all the work of taking the markdown and the templates and combining that all into Netscape compatible HTML.

There was a whole thing in there for syntax highlighting code samples - but then having to stick in old school `<font>` etc tags in order to render correctly in Netscape. I definitely don't remember how all that worked. Looking at the code I generated HTML and then used Cheerio + a CSS parser to get the right colours for each style that could be replaced with `<font>` tags.. that's all in `lib/highlight.js`.

One key point: in original JS there were no keyboard events, so to advance slides I needed to click on the "next" link. In addition, I couldn't have speaker notes or anything else - so there was just a one work description of what the next slide was above the link. Thanks to `<frameset>` I didn't have to move the pointer between clicks to advance the slides. This combined with a lot of practice led to the talk going (hopefully!) smoothly.

The slides themselves were delivered from the host machine via a local webserver. It looks like there was a way to generate static HTML version in `genstatic.js` - but I can't remember if I just had that as a fallback, or I used it for the talk itself.

The TodoMVC implementation was hand-coded in `/public/todo`.

There's some other handcrafted HTML/JS in `/public` that was brought in with the `iframe` template type.

I think that's all the main bits.. I've probably missed lots of little things that took me ages to work out at the time.

## Other stuff

There's some mirrored documentation I mirrored in case the originals went away in `archives/`. Apologies to whichever University it was that I accidentally DDoS'd mirroring one of those. 