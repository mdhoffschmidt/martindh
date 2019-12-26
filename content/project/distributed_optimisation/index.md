---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Exploration of Highly Parallelizable Optimization Algorithms for Control"
subtitle: "A Smart Grid Example"
summary: ""
authors: []
tags: []
categories: []
date: 2016-02-01T00:00:00
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

# Exploration of Highly Parallelizable Optimization Algorithms for Control

Many recent problems of interest are solved by means of optimization algorithms that are able to manage a multitude of agents or handle efficiently large data sets. Among the problems of interest, many can be cast as convex program with a distributed structure. First, large-scale problems can be solved using appropriate parallel/decomposition-based optimization algorithms in order to decrease the solving time. Second, some applications require that some information remain private while solving an optimization problem. Solving the problem in a distributed or decentralized fashion helps to satisfy this particular constraint. Third, by making local copies of the data, information can be preserved in many locations, making the algorithm consequently more robust towards eventual failures.

## 1. Introduction

### Splitting method for distributed optimization

The objective of the present work is to solve an optimization problem that is distributed between various agents and a central operator. Each agent has an individual or selfish objective, while the central operator prompts them to cooperate to achieve a common objective. The problem must be solved in a decentralized and parallel fashion, while limited information between the central operator and the agents should be communicated. To solve the problem, a particular splitting method is used to distribute parts of the global problem over the agents while their privacy is being protected.

The Generalized Forward-Backward Splitting (GFBS) algorithm presented by H. Raguet and L. Landrieu in [8] is considered. The objective is to understand the algorithm and show why it is well suited for distributed optimization problems with limited information sharing. From the theory of proximal operator[7], the algorithm can be compared to the proximal gradient method. This splitting method is discussed and illustrated as a fixed-point method. Finally, the GFBS algorithm is presented and compared to another splitting method.

### Micro-grid case study

The interest for micro-grids has been growing fast for the recent years due the wide-spread use of re- newable energies. Micro-grids interconnect loads with energy generation and storage systems. The energy production and storage sites being closer to the demand allow for better energy management improving consequently its quality and minimizing the losses related to transport. Micro-grids can operate completely separated from the grid in so called islanded applications. Connected to the central grid, they can be used for frequency stabilisation applications[1].

A micro-grid can be modelled as the interconnection of loads, energy production systems and energy storage devices. In our case study, the loads are represented by offices buildings that are able to adapt their energy consumption depending on the available power. Regarding the energy storage devices, the case study is limited to batteries and flywheels and their advantages and drawbacks are discussed. Regarding the energy generation part, there are several ways of producing energy locally using renewable or non-renewable energy resources. The case-study is limited to wind power and solar power. For the purpose of the simulation, the micro-grid has to manage all of its agents to track a given power profile. All of the components are then first modelled and integrated to problem. Then, the GFBS algorithm solves the distributed optimization problem for different power profiles.

## 2. Ressources

[1] ABB, editor. Stabilizing and maximizing renewables using a flywheel-inverter system, 2013.

[2] Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein. Distributed optimization and statistical learning via the alternating direction method of multipliers. Foun- dations and Trends in Machine Learning, 2010.

[3] P. I. Cooper. The absorption of radiation in solar stills. Solar Energy, 1969.

[4] Federal energy management program. Using distributed energy resources, 2002.

[5] Philipp Fortenbacher, Johanna L. Mathieu, and Göran Andersson. Modeling, identification, and optimal control of batteries for power system applications. 18th Power Systems Compu- tation Conference, 2014.

[6] Tomasz T. Gorecki, Faran A. Qureshi, and Colin N. Jones. Openbuild: An integrated sim- ulation environment for building control. Technical report, École Polytechnique Fédérale de Lausanne, 2015.

[7] Neal Parikh and Stephen Boyd. Proximal algorithms. Foundations and Trends in Optimization, 2013.

[8] Hugo Raguet and Loïc Landrieu. Preconditioning of generaized forward-backward splitting and application to optimization on graphs. Technical report.

[9] Ernest K. Ryu and Stephen Boyd. A primer on monotone operator methods. Technical report, 2015.

[10] Satish Samineni. Modelling and analysis of a flywheel energy storage system for voltage sag correction. Master’s thesis, Collge of Graduate Studies University Idaho, 2003.

[11] Kandler A. Smith, Christopher D. Rahn, and Chao-Yang Wang. Model-based electrochemi- calestimation and constraint management for pulse operation of lithium ion batteries. IEEE transactions on control systems technology, 2010.

[12] Giorgos Stathopoulos, Harsh Shukla, Alexander Szucs, Ye Pu, and Colin N. Jones. Operator splitting methods in control. Submitted to Foundations and Trends in Systems and Control, 2015.



