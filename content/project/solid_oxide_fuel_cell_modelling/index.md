---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Modelling and Optimization of a Solid Oxide Fuel Cell Stack"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2016-02-01T00:00:00
lastmod: 2019-12-07T00:00:00
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


Solid Oxide Fuel Cells have the potential to revolutionize the way we interact with energy. A SOFC is an energy system that converts a fuel directly into electricity. But it can also take the electricty and produce back the fuel. In other words, a SOFC can work on both sides, which makes it a very appealing device to be combined with renewable energy resources. 

A SOFC is complex energy systems that still remain relatively unknown from the public. In the present work, I will try to give you some more insight about the complex working processes that makes such a device so interesting. 

# Modelling and Optimization of a Solid Oxide Fuel Cell Stack

There are several types of fuel cells, which differs in term of the ions that are selectively transported through the electrolyte, temperature, geometry (e.g. planar or tubular) and layer that provides mechani- cal support. The objective of the present project is to build a one-dimensional model that will be used to control Solid Oxide Fuel Cell (SOFC) systems. Before going into the mathematical modelling details, it is first interesting the recall the working principles of SOFCs. In order to explain the selected modelling approach, a description of the component geometry and materials in state-of-the-art anode supported SOFC and related challenges in the development of the technology is first provided.

## 1.1 Working principle

The working principle of a SOFC stack is simple and consists at converting chemical energy directly into electrical energy. SOFC stacks are in serie assembly of repeating units. Gas manifold are required within the stack to supply reactants to the electrocatalytic reaction sites within the electrodes. The cell, which comprises the electrolyte sandwiched between the anode and cathode is assembled between the gas channels. The oxygen from the air channels is consumed together with the hydrogen from the fuel channels to produce electricity. This happens through electro-chemical reactions. The result is the production of water-steam at the fuel channel. Figure 1.1 illustrates the working principle of a planar SOFC in power production mode. Note that the illustration is not at scale, the electrolyte layer is typically often much more smaller than the anode or the cathode.

![Solid Oxide Fuel Cell basic reaction](/images/posts/sofc_1.jpg "Figure 1")

The main electrochemical reaction that occurs in a SOFC is a redox reaction that is composed of two half-reactions involving hydrogen, water and oxygen. The two half reactions are shown on figure 1.1. The cathode needs electrons to reduce the oxygen from the air in order to produce oxygen ions O2−. The oxygen ions are transported to the anode through the electrolyte. At the anode, the oxidation reaction consumes hydrogen to produce water and electrons. By convention the cathode represents the positive pole and the anode the negative pole of the fuel cell. Connected to a load the cell is able to provide it electricity. Note that the two half reactions describe an global behaviour, i.e they gather in fact several elementary steps, such as dissociative adsorption, surface diffusion and charge-transfer reactions. The charge transfer reactions occur at the Triple-Phase Boundaries (TPB), where the electron and ion conducting phases and the gas-phase are present.

SOFCs differ from Proton Exchange Membrane Fuel Cell (PEMFC) for example. They have a higher operating temperature and they use a different type of electrolyte. PEMFCs have an operating tem- perature of about 100◦C while SOFCs are working at 500 − 1000◦C [5]. This is also the reason why different types of electrolytes are used. SOFCs use a solid state ceramic electrolyte which is conducting ions of oxygen. PEMFC have a proton-conducting polymer electrolyte membrane which is crossed by the hydrogen ions. Therefore, the electrochemical reactions taking place at the electrodes are different and the production of water occurs then at the air channel.

## 1.3 Fuel

The operating temperature of fuel cells determines the type of fuel that can be converted. Due to high operating temperature, SOFCs can use various types of fuels other than pure hydrogen. This is also one of the more significant advantage over other types of fuel cells as PEMFC. There, pure hydrogen is mandatory because any hydrocarbon fuels would irreversibly damage the cells. For SOFCs, hydrocarbons such as natural gas can be used and are of great interest because of its widespread availability and already existing infrastructure. In the present work both methane and pure hydrogen are considered as fuel.

In the fuel channels of SOFCs, the methane can be internally reformed. The Nickel in the Ni-Y SZ anode is a good catalyst for internal reforming reactions. The internal reforming reactions involve mainly the reaction of methane steam reforming and the reaction of water gas-shift. The first produces hydrogen and carbon monoxide while consuming methane and water. The second consumes carbon monoxide and water to produce hydrogen and carbon dioxide. The internal reforming reactions improve the theoretical efficiency of the SOFC system. Nevertheless, direct internal reforming of methane can be a challenging task due to possible anode fouling[5]. The anode fouling is a degradation effect characterized by the formation of a thin carbon layer over the anode reducing consequently the available active area for electrochemical reaction. In practice, the fuel is pre-reformed with water before being sent to fuel channels of the cells. A pre-reformer is then used. The fuel feeding then the cell is a mix of methane, water, hydrogen, carbon monoxide and carbon dioxide. This is namely the situation that will be studied below.

## 1.4 Control and optimizationel

Connected to the a load, for instance the grid, a SOFC system should be able to satisfy the power demand from any user. The power demand is most likely to change over time and the SOFC system should be able to track it. Therefore different techniques can be used such as Real-Time Optimization to follow the desired power profile while the fuel consumption, i.e. the cost of running the system, is being minimized. More specifically, the objective is to maximize the system efficiency.

The tracking of a variable power profile over time means that the current flowing through the cells will vary over time as well. As the current varies so does the cell potential but also the rate of electrochemical reactions at the electrode. This impacts the temperature profile inside the cell which affects in its turn the rate of species production/consumption of the internal reforming reactions. Also when the temperature changes, the potential losses as for instance the activation overpotentials and ohmic overpotentials will change. Gradient in temperature and overpotentials are the driving forces for several mechanical and electrochemical degradation phenomena that affects cell performance. A modification of their spatial distribution and cycling upon time can decrease the life-time of the system. Therefore, while the efficiency is being maximized, several constraints on the system must be satisfied in order to avoid degradation effects and maximize consequently the life-time of the system.

The aim of the present work is to build a 1-dimensional model which is able to predict with a certain level of accuracy the behaviour of SOFC. A 0-dimensional model or lumped model is unable to predict the temperature profile inside the cell and is therefore very limited to predict degradation effects. Indeed, to minimize the degradation effects the model should be able to take them into account to identify the system operating conditions that should be avoided. The focus of the current work is to build and validate a 1-dimensional SOFC model. Particular interest will be held on the simulation of the temperature profile inside the cell. This model will form the basis for the further implementation of appropriate degradation terms, which are dependent upon the local conditions in the SOFC stack.

$$\int_{a}^{b} x^2 dx$$

# Ressources

[1] E. Achenbach and E. Riensche. Methane/steam reforming kinetics for solid oxide fuel cells. Journal of Power Sources, 1994.

[2] P. Aguiar, C. S. Adjiman, and N.P. Brandon. Anode-supported intermediate temperature direct internal reforming solid oxide fuel cell. i: model-based steady-state performance. Journal of Power Sources, 2004.

[3] C. G. Broyden. A class of methods for solving nonlinear simultaneous equations. Mathematics of Computation, 1965.

[4] S.H. Chan, K.A. Khor, and Z.T. Xia. A complete polarization model of a solid oxide fuel cell and its sensitivity to the change of cell component thickness. Journal of Power Sources, 2001.

[5] V.M. Janardhanan and O. Deutschmann. Modeling of solid-oxide fuel cells. Technical report, Institute for Chemical Technology and Polymer Chemistry, University of Karlsruhe, 2007.

[6] R.J. Kee, H. Zhu, and D.G. Goodwin. Solid-oxide fuel cells with hydrocarbon fuels. Proceedings of the Combustion Institute, 2005.

[7] Eric Kvaalen. A faster broyden method. BIT Numerical Mathematics, 1991.

[8] A. Nakajo, Z. Wuillemin, P. Metzger, S. Diethelm, G. Schiller, J. Van Herle, and D. Favrat. Elec- trochemical model of solid oxide fuel cell for simulation at the stack scale, i. calibration procedure on experimental data. Journal of The Electrochemical Society, 2011.

[9] B. Todd and J. B. Young. Thermodynamic and transport properties of gases for use in solid oxide fuel cell modeling. Journal of Power Sources, 2002.

[10] H. Zhu, R.J. Kee, V.M. Janardhanan, O. Deutschmann, and D.G. Goodwin. Modeling elementary heterogeneous chemistry and electrochemistry in solid-oxide fuel cells. Journal of The Electrochem- ical Society, 2005.


