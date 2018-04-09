---
layout: post
title:  "Writing blog posts to support GTM (go to market)"
categories: Resources
tags:  blogs gtm create
author: MM
---

Publishing a blog post informs blog subscribers of a new feature, and enables OM to promote the new features we've added to our products with customers.

Creating a blog post is required by default for new epics and is assessed as part of the [epic closeout process](https://github.ibm.com/Cloud-Integration/appconnect-wiki/wiki/Epic-close-out-&-Release-process). This page brings together information about how to do this.

  _**You should start this process at least a week before the close-out meeting, so that you can get author access, be able to write your blog post, and get the new post reviewed ready for a close-out demo.**_

Providing blog or video content about new features can also help us provide better information about the feature in the structured content.  (The Content squad can mine blog posts for content like tutorials.)

## Before you start
To create content, you'll need to sign up as a contributor to the developer.ibm.com/integration site (aka Integration community or developer center).

_**Get yourself added as a user to the site as soon as possible before you want to start writing your blog post.  Don't wait until a day or two before the close out!**_

Follow the instructions at https://apps.na.collabserv.com/blogs/07328190-3508-4479-90fa-cf13cad3697f/entry/Becoming_an_author?lang=en_us. In step 3, add your external email address. In step 4, after clicking Contribute to this site, select the Contributor option.

[Karen Broughton-Mabbitt](BROUGTK@uk.ibm.com) or [Ian Larner](ian_larner@uk.ibm.com) will add you as a user to the developer.ibm.com/integration site.

## Process
1. In preparation for epic closeout, provide a brief summary of what content will be provided, both in your epic's copy of [the epic closeout template](https://github.ibm.com/Cloud-Integration/appconnect-wiki/wiki/Epic-close-out-template) and the Box note for planned blog posts: https://ibm.ent.box.com/notes/187886653594
2. Go to https://developer.ibm.com/integration/ and sign in (click the person in the top right which drops down a menu with `sign in`, don't click `Log in`).
3. To start a new blog post, click **New > Post** in the menu bar (Or use the link https://developer.ibm.com/integration/wp-admin/post-new.php).
   Alternatively, you can edit your draft and new posts from the Posts page option on the left of the dashboard:
   ![New blog post in Integration site dashboard](https://raw.github.ibm.com/Cloud-Integration/appconnect-ruby/master/new-post.png?token=AAAHeSRqk_phD1bQbB4Ef4SNsarys6IQks5a1KeVwA%3D%3D)
4. Write your content:
  * You can just start typing text, and separate paragraphs by blank lines
  * But, it is better to use basic HTML tags to structure and present content, for which you can use the buttons in the sub-menubar (as highlighted below) to add formatting or to insert images into the media library in WordPress.
    ![Submenu bar for adding basic HTML tags](https://raw.github.ibm.com/Cloud-Integration/appconnect-ruby/master/wp_submenu-buttons.png?token=AAAHebtM78yrV5y8pxCiXfDbLl-c5LVwks5a1KihwA%3D%3D)
  * Better still is to use proper HTML tags for headings (eg `<h3>`) or other elements, as in the IBM Northstar design guidelines; for example, to wrap content in a show/hide section.
  * For general guidance, and links to IBM Northstar guidelines, see the general hints and tips for writing posts at: https://developer.ibm.com/integration/blog/2015/12/04/hints-and-tips-for-writing-posts/
    For more guidance about content for blog posts, see "Read on for more guidance..." below.
  * Click **Save Draft** to save updates while you're working on the draft version of your post. Use the **Preview** button to check how the post looks.
5. Have your post reviewed by your squad's OM and within your squad for technical accuracy, if required. When you're ready for the post to be reviewed, select **Enable public preview** and share the URL with reviewers. The URL is active for 48 hours, so you will need to share a new URL if the review takes longer than that.
  * When the reviewed content is ready, send the URL (the full URL, not the preview URL) to Karen Broughton-Mabbitt, Ian Larner, and Rory Watts for final review, and to ensure the metadata is correct.
  * _**Request review at least 2 days before close out**_, so reviewers can schedule it into their tasks. (and, ideally, try things out.)
6. When final review is complete, and when the content discussed in the blog post is live, click **Publish** to publish your post. If you don't have publish authority for the site, or have problems publishing, ask Karen Broughton-Mabbitt and Ian Larner for help.
7. Let Jordan Humber know of your blog post, in case he wants to link to it from the "What's new" page.

#### Read on for more guidance...

* **Considerations for content:**
    * As the subject matter expert for an epic or feature, you know all the ins and outs of the "thing" you've produced. So look on this as a chance to show off the brilliant work you've done. You'll get external recognition as the author of blog posts, and can grow your reputation and badge awards in the developerWorks community; [for example](https://developer.ibm.com/answers/users/1797/ian-larner/)
    * We don't have a template for blog posts - they might end up a little boring if they all had identical formats. We'd like each blog post to be engaging!
    The general aim is to outline the benefit and business value of a feature, and to demonstrate how easy it is to use for a realistic business scenario.  The latter could be a descriptive walkthrough with Designer using a template or sample flow, or a "from scratch" tutorial... perhaps based on a test case that you have used?
    * If you think you need inspiration, you can look at previous blog posts that have been done for other connectors or new features: https://developer.ibm.com/integration/blog/
    * You could start off by saying what the connector/feature does (i.e. the benefit of having it/the problem it solves).
    * Then give a sample scenario that showcases how it could be used.
    * If appropriate, add a tutorial with the steps as HTML ol/li (You can use the submenu buttons to add these)
    * If appropriate, and you are able, create and add a short video to demonstrate the subject. (Some prefer videos to readily understand a subject, and see it for real.)  For guidance about capturing and inserting videos, see the wiki page [Capturing video for blog posts and doc pages](https://github.ibm.com/Cloud-Integration/appconnect-ruby/wiki/Capturing-video-for-blog-posts-and-doc-pages)
    * If there's anything special you want to highlight, or if any limitations deserve a mention, please do so.
    * Capture images from your screen at the best resolution and then save them as PNGs for insertion into Wordpress.
      You can use Wordpress and HTML tags to reduce the default presentation size of images and to enable readers to view the full size image.
* **Inserting media (typically images and videos)**
  * Use the **Add Media** dialog to insert images (e.g. screen captures) or videos
    * Consider adding a Caption in the Add Media dialog - That creates a Figure element in your post, labelled with the caption.
      If you are going to present a smaller default image that user's can click to display the full-size image, end your caption with "(Click image to view full size.)".
    * Insert images at full size for best quality.  If the default view is too large, you can edit the HTML img tag to give a smaller default view, and use the "Link To" option to let the user "(Click image to view full size.)"
    ![Add media with caption](https://raw.github.ibm.com/Cloud-Integration/appconnect-ruby/master/addmedia_with_caption.png?token=AAAHeV1mVvHmtrBWSQpFHf_R6XplvoKXks5a1KjDwA%3D%3D)
    For example, a figure for the above image inserted with a caption:
    ![Figure for the above image inserted with a caption](https://raw.github.ibm.com/Cloud-Integration/appconnect-ruby/master/image_with_caption.png?token=AAAHeTNDC9FXMArzqNOW2LP8thdx3vQ6ks5a1LIbwA%3D%3D)
* **Add appropriate tags for retrieving posts.**  In the Tags field, type "app c", pause, then select "IBM App Connect" (tag for all App Connect posts). Optionally also select from the following tags:
    * "IBM App Connect (SaaS)" for "IBM App Connect on IBM Cloud"/Designer posts (The title of this tag might change to indicate "on Cloud".)
    * "IBM App Connect Enterprise" for Enterprise/ACE software posts.
    * "IBM App Connect Professional" for Professional/Studio posts.
* **General hints and tips for writing posts** are available at: https://developer.ibm.com/integration/blog/2015/12/04/hints-and-tips-for-writing-posts/
* **Contributing blog post content in non-Wordpress formats.**  If you have a real concern about working in Wordpress, contact [Ian Larner](ian_larner@uk.ibm.com) to discuss help or whether you might contribute content in some other way.  _Note that contributing blog post content in non-Wordpress formats is discouraged, because it adds workload to transform content into Wordpress._
