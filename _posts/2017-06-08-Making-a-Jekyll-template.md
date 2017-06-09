---

  layout: single
  title:  "Making a Jekyll Template - Part 1"
  date:   2017-06-08
  categories: jekyll
  category: development
  subtitle: "First in a series on creating a Jekyll template"
  icon: "fa-code"
  image: "pic02.png"
---

### Why Static Sites?

Well, why not? It's not the easiest thing, but it's a great way to 'get your hands dirty' with the nitty gritty of HTML. I've chosen [Jekyll](https://jekyllrb.com/) as a static site generator. There certainly are others out there - [Hugo](http://gohugo.io/) and [Hexo](https://hexo.io/) are popular as well. Jekyll runs on [Ruby](https://www.ruby-lang.org/en/), but luckilly you don't need to know any to work with Jekyll.

You can [install Jekyll](http://jekyllrb.com/docs/installation/) and get started right away. There are even ample (free themes)[http://jekyllthemes.org/] to choose from. But I wanted to dive in and learn Jekyll from the inside out - so customizing a static web template seemed like the best way.

#### Choosing a Template

The web has no lack of templates you can choose from. I selected [Future Imperfect](https://html5up.net/future-imperfect) from [HTML5Up](https://html5up.net/) - his sites are completely free for personal and professional use. So let's dive in!

After you select the template you want, download and unzip it somewhere. You can then run `jekyll serve` to get a quick idea of what the site looks like. (browse to `localhost:4000` by default)

Now for the fun stuff - open your favorite IDE (I prefer [Atom](https://atom.io/)) and browse over to the template directory. In order for Jekyll to work, you will need to add a few directories. At the root add the following empty directories: `_includes, _layouts`s
