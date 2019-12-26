---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "On the Implementation of an Active Learning Model Predictive Controller"
subtitle: "An Autonomous Race Car Example"
summary: ""
authors: [Martin d'Hoffschmidt]
tags: [Model Predictive Control, Deep Learning]
categories: []
date: 2016-12-07T00:00:00
lastmod: 2019-12-26T00:00:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "Center"
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

# On the Implementation of an Active Learning Model Predictive Controller: An Autonomous Race Car Example

## Introduction

The race car drivers want to be the first to cross the finish line, and their ability to achieve this goal is determined by their driving skills based on experience. The performance of the driver on the track depends on its ability to push the vehicle towards its limits without losing the control. This knowledge about the vehicle is acquired through an intense training. While the final goal is clear, the strategy that each driver uses to achieve it is more subjective. It can be considered as a combination of technical knowledge, intuition and experience. For instance, a skilled driver is able to feel the behaviour of the car in a corner perceiving the limits of what the vehicle can achieve. The focus of the present work consist in exploring how it is possible for an autonomous race car to improve its skills on the track, similarly to a human race driver.

Humans can in practice solve, easily and intuitively, a very large range of complex problems. From standing up and walking, swimming, cooking or singing, acquiring new skills is made possible through a complex learning process. An individual learns a specific task through repetitive trials. Which leads him ultimately to improve its skills at performing this task. The learning process involved in improving a specific skill can be characterized by two main aspects. First, the learning process is carried out in a continuous fashion. Indeed, the indi- vidual never stops learning. The ability to learn may eventually decay over time, which leads to the second aspect. An individual that is motivated or that is having fun at performing a given task is likely to learn faster. Whereas, he may turn away from the task when she appears to be boring or too complex.

In the present work, the autonomous race car is controlled with a Learning Model Predictive Controller (LMPC). In this way, the racing objective is clearly defined and the constraints of the race car can explicitly be handled. Improving the performance of the controller can be achieved in two different ways. First, the repetitive aspect of racing on a circuit makes it possible to integrate additional knowledge on the task. By analogy, the more laps the race driver completes the better he knows the tricks to improve its lap time. Second, it is possible to identify a model of the car, while driving, to always improve the model that is provided to the controller. Which can be compared to the ability of the driver to improve the knowledge he has on the vehicle to acquire a better intuition on its dynamics. Finally, a curiosity cost is added to the objective function of the optimal controller to motivate the controller at improving its model.



