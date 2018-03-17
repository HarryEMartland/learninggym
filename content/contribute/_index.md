---
title: "Contribute"
date: 2018-03-17T16:59:45Z
draft: false
---

Learning Gym is designed to be built and maintained by the community.
We encourage people to add new subjects and new tasks either by using the forms on this website or by making a pull request on GitHub.

#### Request a Subject or Task

The buttons below will take to to a form which you can fill in to request a task or subject to be added.
Please fill in as many of the fields as possible.

<div class='row'>
    <div class='col m6 s12 input-field'>
        <a class="waves-effect waves-light btn" href='subject' style='width:100%'>Request a Subject</a>
    </div>
    <div class='col m6 s12 input-field'>
        <a class="waves-effect waves-light btn" href='task' style='width:100%'>Request a Task</a>
    </div>
</div>

#### GitHub Pull Request (Advanced)

This website is built using [hugo](https://gohugo.io/) which is a static site generator.

To add a new subject use the command `hugo new <subject>/_index.md -k subject` where `<subject>` is the name of the subject being created.
You can then edit the new index file, fill in some of the links which you know and add a description in the main body of the file.

To add tasks to a subject use the command `hugo new <subject>/<taks>.mb` where `<subject>` is the name of the subject for the task and `<task>` is the name of the task.
You can then edit the new file filling in the properties at the top and adding a description to the main body of the file.

To view your changes use the command `hugo server -D` then go to [http://localhost:1313/](http://localhost:1313/) in your browser and navigate to the page.


#### Page Properties
Subject and Task pages have some special properties which can be used.
These properties give the pages extra functionality or change how they are displayed on other pages.
The properties should be filled in as completely as possible.
If you notice any incorrect properties please raise an issue on GitHub or Make a pull request.

##### Subject

| Property | Description |
|----|------|
|facebookLink|Link to Facebook|
|githubLink|Link to GitHub|
|twitterLink|Link to twitter|
|externalLink|Link to external website|
|wikiLink|Link to Wikipedia|

##### Task

| Property | Description |
|----|------|
|weight|Used to order the tasks|
|primary|If the task should be shown at the top of the page in a card|
|link|The link to the task|
|difficulty|How hard the task is (easy, medium, hard, expert)|
|tags|Tags which describe the task|
