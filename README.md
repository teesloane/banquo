# BANQUO

> Good sir, why do you start; and seem to fear / Things that do sound so fair?

_Banquo_ is a Ghost theme aims to be a _portfolio-first_ site, with a side of blogging/note taking. _Banquo_ operates a bit differently than some standard Ghost themes, in that post-loops exist in more than one place, and are targeted at specific post types. This functionality comes with some trade-offs due to the way Ghost handles working with different loops, so before I go on any further, let me describe a use case. This theme maybe be useful for you if you:

- want to display your work immediately when people visit your site,
- You want your _work / portfolio / projects_ (henceforth, "projects") page to be image-first / have thumbnails.
- You want the option of blogging.  

Seeing that this is a bit more specialized of a theme, it does take a bit of setup to get started.

## The Project Page (Home Page)

- Any post that you want to be featured as a "project" post on the home page needs to be tagged as "project".
![]()
- If you do not include a featured image, you will have an nice broken image link displayed instead. I might eventually put something in that anticipates that mistake (a placeholder image), but for now, forgetting to upload a post image will result in this:
![]()

## The Notes / Blog page.

- Creating a blog is a bit involved, but stick with me here.
- In your ghost admin dash you'll need to create a **static page** called "notes". Because ghost allows you to create custom pages with their own custom styling, the page (for now, pending future updates) needs to called `notes` in order to line up with the `page-notes.hbs` file.
- Similar to any project post you create, you'll need to add a `note` tag when creating your post.
