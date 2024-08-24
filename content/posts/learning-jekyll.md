---
title: Learning Jekyll
excerpt: All about my jekyll installation experience
slug: 'learning-jekyll'
date: 2020-11-05
---
I was searching for a an SSG (Static Site Generator) tool for personal use, several templating engines does not do it justice. Such as: 
   - Nunjacks
   - Mustache
   - placeholders.js

Jekyll has an amazing community, tons of themes are available and the free ones such as this one are not too shabby.

## Challenges

Currently I am using a Windows machine and Jekyll cannot be installed normally on a Windows. I have tried WSL2, and sure enough it did work easily there but [WSL requires Hyper-V architecture](https://docs.microsoft.com/en-us/windows/wsl/wsl2-faq). Due to the fact that I needed my virtual machines on my station for entertainment reasons, I was unable to make this compromise. 

Thankfully after some googling and trial and errors. I came across this guide [here](https://learn.cloudcannon.com/jekyll/install-jekyll-on-windows/) and the section for 
[Ruby on Windows](https://jekyllrb.com/docs/installation/windows/) finally worked for me. Being able to type `ruby` and `gem` feels so good.

