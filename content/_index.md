---
title: ""
date: 2022-10-24
type: landing

sections:

  - block: hero
    content:
      title: ""
      text: |
        The **Karaman Language & Cognition Lab** conducts research on language acquisition, statistical learning, and cognitive development.  
        
        Our work combines experimental methods and interdisciplinary approaches to understand how humans learn, process, and represent language across development.
      image:
        filename: welcome.jpg
    design:
      flip: true
      columns: "2"

  - block: collection
    content:
      title: Latest News
      count: 3
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      order: desc
      page_type: post
    design:
      view: card
      columns: "1"

  - block: collection
    content:
      title: Selected Publications
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: "1"

  - block: markdown
    content:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the Team →" %}}
    design:
      columns: "1"

---
