---
layout: post
title:  "Capturing video for blog posts and doc pages"
categories: Resources
tags:  video blog how create
---

* content
{:toc}

* Notes on how to record video are here: https://ibm.box.com/s/rf45edcvtwibucdmfv1hnbxzgry7js6p
* If you include video that is a short (less than 2 mins) enhancement for a blog post, use the **Add Media** button to store the video in the developerWorks site. You can use the HTML5 `video` element to show and control the video content. For example:
    ```
    <video autoplay loop controls style="width: 70%;">
      <source src="https://developer.ibm.com/integration/wp-content/uploads/sites/25/2017/07/AppConnectLogs.mov" type="video/mp4">
    </video>
    ```
* The style width setting is used to give a reasonable size to the video within a blog post.  If your video requires a different size, such as for legibility, you can change the width value.
    * When inserting a video from the media gallery, you might be offered the option 'Embed media player' (usually for mp4 files).  This creates a Wordpress video shortcode that forces the video to be displayed with a width of 640px:
    ```
    [video width="1920" height="1080"
    mp4="https://developer.ibm.com/integration/wp-content/uploads/sites/25/2017/07/AppConnectLogs.mov"][/video]
    ```
    If you want a different video size, you can replace the video shortcode with the HTML5 video tag (as above).
* If you include video that makes sense as a standalone asset, it should be published to YouTube and linked from there to your post - talk to Karen Broughton-Mabbitt or Ian Larner for more information about how to do this, both have publishing rights for the developerWorks YouTube channel and manage the playlists for our content.
    * To embed a Youtube video, you only need the video ID from Youtube; for example, for the video [https://youtu.be/aBvIlNv1Nlc](https://youtu.be/aBvIlNv1Nlc):
    ```
    <div data-widget="videoplayer" data-videoid="aBvIlNv1Nlc" data-videotype="youtube"
    data-showvideodescription="true" style="width: 70%;"></div>
    ```
