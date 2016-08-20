# BANQUO
> Good sir, why do you start; and seem to fear / Things that do sound so fair?

![](https://cloud.githubusercontent.com/assets/12987958/17832552/988aa128-66d3-11e6-9639-27434c0e05ed.png)

> The Banquo home page

***

_Banquo_ is a Ghost theme that aims to be a _portfolio-first_ site, with a side of blogging/note taking. _Banquo_ operates a bit differently than some standard Ghost themes, in that post-loops exist in more than one place, and are targeted at specific post types. This functionality comes with some trade-offs due to the way Ghost handles working with different loops, so before I go on any further, let me describe a use case. This theme maybe be useful for you if you:

- want to display your work immediately when people visit your site,
- You want your _work / portfolio / projects_ (henceforth, "projects") page to be image-first / have thumbnails.
- You want the option of blogging.  

Seeing that this is a bit more specialized of a theme, it does take a bit of setup to get started.

## Enable Public API

You'll need to enable public API in your (at the time of writing this) Ghost Labs in the dashboard. This allows post loops to query the database for posts by specific filters (in this case, by the tags). See the screenshot below:

![](https://cloud.githubusercontent.com/assets/12987958/17832874/3111d2f6-66dc-11e6-9dac-8d03bd275534.png)

## The Project Page (Home Page)

- Any post that you want to be featured as a "project" post on the home page needs to be tagged as "project".

![](https://cloud.githubusercontent.com/assets/12987958/17832476/c98d100a-66d1-11e6-99ab-b9dc014ba807.png)

- If you do not include a featured image, you will have an nice broken image link displayed instead. I might eventually put something in that anticipates that mistake (a placeholder image), but for now, forgetting to upload a post image will result in this:

![](https://cloud.githubusercontent.com/assets/12987958/17832551/988046a6-66d3-11e6-877f-202f1187c981.png)

<sub><sup>Note: The title of the post won't automatically become "SHIT". That was my post title for demonstrative purposes.</sup></sub>

## The Notes / Blog page.

![](https://cloud.githubusercontent.com/assets/12987958/17832553/988ac2b6-66d3-11e6-8acf-df9804a0dd87.png)

> "Notes" page

- Creating a blog is a bit involved, but stick with me here.
- In your ghost admin dash you'll need to create a **static page** called "notes". Because ghost allows you to create custom pages with their own custom styling, the page (for now, pending future updates) needs to called `notes` in order to line up with the `page-notes.hbs` file.
- Similar to any project post you create, you'll need to add a `note` tag when creating your post.

![](https://cloud.githubusercontent.com/assets/12987958/17832555/988e8eaa-66d3-11e6-9b1c-836843bcb2b0.png)


### Other Screenshots

***
![](https://cloud.githubusercontent.com/assets/12987958/17832554/988d72c2-66d3-11e6-9cd2-04b1c3930ac9.png)

> A standard post


## Build Instructions

Note: you may need to preface build instructions with `sudo` depending on where you are building. 

`git clone https://github.com/teesloane/banquo.git`

`npm install`

`bower install`

`grunt staging` // compiles the css / js assets


## Contributions

All development happens on the `develop` branch. 

## Credits

Thanks to [GhostSheet](https://github.com/Cloudoki/ghostSheet) for stripping a Ghost theme down to nothing so building from scratch was no problem at all.

