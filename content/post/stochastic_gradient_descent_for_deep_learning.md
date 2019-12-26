---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Stochastic Gradient Descent For Deep Learning"
subtitle: "Understanding the math behind the optimizers"
summary: "TODO"
authors: [Martin d'Hoffschmidt]
tags: ["Deep Learning"]
categories: []
date: 2019-12-22
lastmod: 2019-12-22
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

# Gradient Descent for Deep Learning

Neural networs are complex models infrastructure. 
Their connections require the adaptation of the weights. 
Here we will have an overview of the methods you have at hand in order to optimize your network.
Most of the public libraries as tensorflow and pytorch have already built-in methods that you can take out of the shelve of course. 
However, a proper understanding about them is sometimes might help you in the future. 
This blog post is my first one and is heavily inspired from Ruder's blog post. Back 3 years ago, when I was starting

In the present post, let's investigate more about...


## Gradient Descent

We want to minimize a convex, continuous and differentiable loss function,

$$minimize \quad C(\theta)$$

### Taylor expansion

First, let's consider the Taylor expansion of the loss function up to its quadratic term,

$$
C(\theta + h) \simeq 
C(\theta) + 
h^{T} \nabla C(\theta) +
\frac{1}{2} h^{T} \nabla^{2} C(\theta) h
$$

for the simplicity we will consider that the gradient of the loss function,

$$
\nabla C(\theta) = G(\theta) \quad \text{where} \quad G(\theta) \in \mathbb{R}^{n}
$$

and the hessian of the loss as,

$$
\nabla^2 C(\theta) = H(\theta) \quad \text{where} \quad H(\theta) \in \mathbb{R}^{n \times n}
$$

which simplifies the taylor expanded serie as,

$$
C(\theta + h) = 
C(\theta) + 
h^{T} G(\theta) +
\frac{1}{2} h^{T} H(\theta) h
$$

Now, we want to understand how we can actually chose the optimal step in order to decrease the loss function

### First order approximation

Let's first consider that the loss function behaves linearly around any given point.
Therefore, the Taylor expanded serie becomes simply, 

$$
C(\theta + h) \simeq C(\theta) + h^{T} G(\theta)
$$

Now, consider simply that we are trying to solve a minimisation problem.
The step *h* should chosen carefully such that adding the next point satisfies the minimisation problem.
Intuitively we know that the gradient of any function indicates the direction with the steepest slope.
Therefore, computing the gradient of the function, multiplying it by a small quantity and retrieving it from 
the current set of parameters will lead to a better loss. Thus the step *h* becomes,

$$
h = - \eta G(\theta) \quad \text{where} \quad 0 < \eta 
$$

Note here that we introduce a scaling factor which will. be discussed below. 
Now, we can replace the above term in the first order serie to obtain the following statement,

$$
C( \theta - \eta G(\theta) ) = C(\theta) - \eta {\overbrace{ G(\theta)^{T} G(\theta) }^{ < 0 }} < C(\theta)
$$

Here you will notice that the square of the gradient is always positive. Which means that moving into this direction guarantees, at least locally, that the loss function will decrease. Here note that we have to introduce this holds if and only if the function behaves linearly around a given point. This is the reason why we introduce the scaling factor, which should remain small in order to keep the hypothesis more or less correct. 

### Second order approximation

Let's now try to understand better why this scaling factor is important and let's therefore go back to the original
second order expression stated above. We formulte the problem as follows, we want to minimize the cost function given 
the step *h* as parameter,

$$
\text{argmin} C(\theta + h) 
$$

The solution of such a problem is simple to find as we cancel its gradient, which yields,

$$
0 = \nabla_{h} C (\theta + h) = \nabla_{h} ( C(\theta) +  h^{T} G(\theta) + \frac{1}{2} h^{T} H(\theta) h)
$$

or,

$$
0 = G (\theta) + h^{T} H (\theta) \quad \rightarrow \quad h = H(\theta)^{-1} G(\theta)
$$

If you consider this result with the result from the earlier section you find easily that,

$$
\eta = H(\theta)^{-1} \quad \text{where} \quad \eta \in \mathbb{R}^{n \times n}
$$

which tells us actually that running a gradient descent algorithm optimally requires us to compute for each step 
the Hessian of the loss function in order to find how you can scale your gradients optimally such that you will converge a
minimum. Also, all the parameters will be scaled individualy and collectively. 

In practice, computing the Hessian matrix is computationnaly intractable for most of real problems, and can be estimated.
For instance,  the very well known Broyden method computes it once at the beggining of each problem and then tries to astuciosely
estimate it of the course of the descent. Regarding neural networks, computing the hessian is too expansive. But we try then to use
first order methods with adaptive learning rates such as *RMSprop* or *Adam*.

A last take away that will be usefull for you is the following:

* in regions of the loss function where the hessian has high values means that the curvature of the functions is high, and therefore the learning rate or scaling factor should be small
* in regions of the loss function where the. hessain has small values, the curvature if low and therefore you shouldn't be wasting time and the learning rate will therefore increase
