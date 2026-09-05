---
title: tabla
---

## Integrales Inmediatas

### Formas que implican $u^n$
1. $$\int u^{n} du = \frac{u^{n+1}}{n+1} + C, \quad n \neq -1$$
	1. $$\int \frac{1}{u} du = \ln|u| + C$$
### Formas que implican $a+bu$
3. $$\int \frac{u}{a+bu} du = \frac{1}{b^{2}}(bu - a \ln|a+bu|) + C$$
4. $$\int \frac{u}{(a+bu)^{2}} du = \frac{1}{b^{2}}\left(\frac{a}{a+bu} + \ln|a+bu|\right) + C$$
5. $$\int \frac{u}{(a+bu)^{n}} du = \frac{1}{b^{2}}\left[\frac{-1}{(n-2)(a+bu)^{n-2}} + \frac{a}{(n-1)(a+bu)^{n-1}}\right] + C, \quad n \neq 1,2$$
6. $$\int \frac{u^{2}}{a+bu} du = \frac{1}{b^{3}}\left[-\frac{bu}{2}(2a-bu) + a^{2}\ln|a+bu|\right] + C$$
7. $$\int \frac{u^{2}}{(a+bu)^{2}} du = \frac{1}{b^{3}}\left(bu - \frac{a^{2}}{a+bu} - 2a \ln|a+bu|\right) + C$$
8. $$\int \frac{u^{2}}{(a+bu)^{3}} du = \frac{1}{b^{3}}\left[\frac{2a}{a+bu} - \frac{a^{2}}{2(a+bu)^{2}} + \ln|a+bu|\right] + C$$
9. $$\int \frac{u^{2}}{(a+bu)^{n}} du = \frac{1}{b^{3}}\left[\frac{-1}{(n-3)(a+bu)^{n-3}} + \frac{2a}{(n-2)(a+bu)^{n-2}} - \frac{a^{2}}{(n-1)(a+bu)^{n-1}}\right] + C, \quad n \ne 1,2,3$$
10. $$\int \frac{1}{u(a+bu)} du = \frac{1}{a}\ln\left|\frac{u}{a+bu}\right| + C$$
11. $$\int \frac{1}{u(a+bu)^{2}} du = \frac{1}{a}\left(\frac{1}{a+bu} + \frac{1}{a}\ln\left|\frac{u}{a+bu}\right|\right) + C$$
12. $$\int \frac{1}{u^{2}(a+bu)} du = -\frac{1}{a}\left(\frac{1}{u} + \frac{b}{a}\ln\left|\frac{u}{a+bu}\right|\right) + C$$
13. $$\int \frac{1}{u^{2}(a+bu)^{2}} du = -\frac{1}{a^{2}}\left[\frac{a+2bu}{u(a+bu)} + \frac{2b}{a}\ln\left|\frac{u}{a+bu}\right|\right] + C$$

### Formas que implican $a+bu+cu^2$ ($b^2 \ne 4ac$)
14. $$\int \frac{1}{a+bu+cu^{2}} du = \begin{cases} \frac{2}{\sqrt{4ac-b^{2}}} \arctan \frac{2cu+b}{\sqrt{4ac-b^{2}}} + C, & b^{2} < 4ac \\ \frac{1}{\sqrt{b^{2}-4ac}} \ln \left| \frac{2cu+b-\sqrt{b^{2}-4ac}}{2cu+b+\sqrt{b^{2}-4ac}} \right| + C, & b^{2} > 4ac \end{cases}$$
15. $$\int \frac{u}{a+bu+cu^{2}} du = \frac{1}{2c}\left(\ln|a+bu+cu^{2}| - b\int \frac{1}{a+bu+cu^{2}} du\right)$$

### Formas que implican $\sqrt{a+bu}$
16. $$\int u^{n}\sqrt{a+bu} du = \frac{2}{b(2n+3)}[u^{n}(a+bu)^{3/2} - na\int u^{n-1}\sqrt{a+bu} du]$$
17. $$\int \frac{1}{u\sqrt{a+bu}} du = \begin{cases} \frac{1}{\sqrt{a}}\ln\left|\frac{\sqrt{a+bu}-\sqrt{a}}{\sqrt{a+bu}+\sqrt{a}}\right| + C, & a > 0 \\ \frac{2}{\sqrt{-a}} \arctan \sqrt{\frac{a+bu}{-a}} + C, & a < 0 \end{cases}$$
18. $$\int \frac{1}{u^{n}\sqrt{a+bu}} du = \frac{-1}{a(n-1)}\left[\frac{\sqrt{a+bu}}{u^{n-1}} + \frac{(2n-3)b}{2}\int \frac{1}{u^{n-1}\sqrt{a+bu}} du\right], \quad n \ne 1$$
19. $$\int \frac{\sqrt{a+bu}}{u} du = 2\sqrt{a+bu} + a\int \frac{1}{u\sqrt{a+bu}} du$$
20. $$\int \frac{\sqrt{a+bu}}{u^{n}} du = \frac{-1}{a(n-1)}\left[\frac{(a+bu)^{3/2}}{u^{n-1}} + \frac{(2n-5)b}{2}\int \frac{\sqrt{a+bu}}{u^{n-1}} du\right], \quad n \ne 1$$
21. $$\int \frac{u}{\sqrt{a+bu}} du = \frac{-2(2a-bu)}{3b^{2}}\sqrt{a+bu} + C$$
22. $$\int \frac{u^{n}}{\sqrt{a+bu}} du = \frac{2}{(2n+1)b}\left(u^{n}\sqrt{a+bu} - na\int \frac{u^{n-1}}{\sqrt{a+bu}} du\right)$$

### Formas que implican $a^2 \pm u^2$ ($a>0$)
23. $$\int \frac{1}{a^{2}+u^{2}} du = \frac{1}{a}\arctan \frac{u}{a} + C$$
24. $$\int \frac{1}{u^{2}-a^{2}} du = -\int \frac{1}{a^{2}-u^{2}} du = \frac{1}{2a}\ln\left|\frac{u-a}{u+a}\right| + C$$
25. $$\int \frac{1}{(a^{2}\pm u^{2})^{n}} du = \frac{1}{2a^{2}(n-1)}\left[\frac{u}{(a^{2}\pm u^{2})^{n-1}} + (2n-3)\int \frac{1}{(a^{2}\pm u^{2})^{n-1}} du\right], \quad n \ne 1$$

### Formas que implican $\sqrt{u^2 \pm a^2}$ ($a>0$)
26. $$\int \sqrt{u^{2}\pm a^{2}} du = \frac{1}{2}(u\sqrt{u^{2}\pm a^{2}} \pm a^{2}\ln|u+\sqrt{u^{2}\pm a^{2}}|) + C$$
27. $$\int u^{2}\sqrt{u^{2}\pm a^{2}} du = \frac{1}{8}[u(2u^{2}\pm a^{2})\sqrt{u^{2}\pm a^{2}} - a^{4}\ln|u+\sqrt{u^{2}\pm a^{2}}|] + C$$
28. $$\int \frac{\sqrt{u^{2}+a^{2}}}{u} du = \sqrt{u^{2}+a^{2}} - a \ln\left|\frac{a+\sqrt{u^{2}+a^{2}}}{u}\right| + C$$
29. $$\int \frac{\sqrt{u^{2}-a^{2}}}{u} du = \sqrt{u^{2}-a^{2}} - a \sec^{-1}\frac{|u|}{a} + C$$
30. $$\int \frac{\sqrt{u^{2}\pm a^{2}}}{u^{2}} du = \frac{-\sqrt{u^{2}\pm a^{2}}}{u} + \ln|u+\sqrt{u^{2}\pm a^{2}}| + C$$
31. $$\int \frac{1}{\sqrt{u^{2}\pm a^{2}}} du = \ln|u+\sqrt{u^{2}\pm a^{2}}| + C$$
32. $$\int \frac{1}{u\sqrt{u^{2}+a^{2}}} du = \frac{-1}{a}\ln\left|\frac{a+\sqrt{u^{2}+a^{2}}}{u}\right| + C$$
33. $$\int \frac{1}{u\sqrt{u^{2}-a^{2}}} du = \frac{1}{a}\sec^{-1}\frac{|u|}{a} + C$$
34. $$\int \frac{u^{2}}{\sqrt{u^{2}\pm a^{2}}} du = \frac{1}{2}(u\sqrt{u^{2}\pm a^{2}} \mp a^{2}\ln|u+\sqrt{u^{2}\pm a^{2}}|) + C$$
35. $$\int \frac{1}{u^{2}\sqrt{u^{2}\pm a^{2}}} du = \pm\frac{\sqrt{u^{2}\pm a^{2}}}{a^{2}u} + C$$
36. $$\int \frac{1}{(u^{2}\pm a^{2})^{3/2}} du = \frac{\pm u}{a^{2}\sqrt{u^{2}\pm a^{2}}} + C$$

### Formas que implican $\sqrt{a^2 - u^2}$ ($a>0$)
37. $$\int \sqrt{a^{2}-u^{2}} du = \frac{1}{2}\left(u\sqrt{a^{2}-u^{2}} + a^{2}\arcsin\frac{u}{a}\right) + C$$
38. $$\int u^{2}\sqrt{a^{2}-u^{2}} du = \frac{1}{8}\left[u(2u^{2}-a^{2})\sqrt{a^{2}-u^{2}} + a^{4}\arcsin\frac{u}{a}\right] + C$$
39. $$\int \frac{\sqrt{a^{2}-u^{2}}}{u} du = \sqrt{a^{2}-u^{2}} - a \ln\left|\frac{a+\sqrt{a^{2}-u^{2}}}{u}\right| + C$$
40. $$\int \frac{\sqrt{a^{2}-u^{2}}}{u^{2}} du = \frac{-\sqrt{a^{2}-u^{2}}}{u} - \arcsin\frac{u}{a} + C$$
41. $$\int \frac{1}{\sqrt{a^{2}-u^{2}}} du = \arcsin\frac{u}{a} + C$$
42. $$\int \frac{1}{u\sqrt{a^{2}-u^{2}}} du = \frac{-1}{a}\ln\left|\frac{a+\sqrt{a^{2}-u^{2}}}{u}\right| + C$$
43. $$\int \frac{u^{2}}{\sqrt{a^{2}-u^{2}}} du = \frac{1}{2}\left(-u\sqrt{a^{2}-u^{2}} + a^{2}\arcsin\frac{u}{a}\right) + C$$
44. $$\int \frac{1}{u^{2}\sqrt{a^{2}-u^{2}}} du = \frac{-\sqrt{a^{2}-u^{2}}}{a^{2}u} + C$$
45. $$\int \frac{1}{(a^{2}-u^{2})^{3/2}} du = \frac{u}{a^{2}\sqrt{a^{2}-u^{2}}} + C$$

### Formas que implican $\sin u$ o $\cos u$
46. $$\int \sin u ~ du = -\cos u + C$$
47. $$\int \cos u ~ du = \sin u + C$$
48. $$\int \sin^{2}u ~ du = \frac{1}{2}(u - \sin u \cos u) + C$$
49. $$\int \cos^{2}u ~ du = \frac{1}{2}(u + \sin u \cos u) + C$$
50. $$\int \sin^{n}u ~ du = -\frac{\sin^{n-1}u \cos u}{n} + \frac{n-1}{n}\int \sin^{n-2}u ~ du$$
51. $$\int \cos^{n}u ~ du = \frac{\cos^{n-1}u \sin u}{n} + \frac{n-1}{n}\int \cos^{n-2}u ~ du$$
52. $$\int u \sin u ~ du = \sin u - u \cos u + C$$
53. $$\int u \cos u ~ du = \cos u + u \sin u + C$$
54. $$\int u^{n}\sin u ~ du = -u^{n}\cos u + n\int u^{n-1}\cos u ~ du$$
55. $$\int u^{n}\cos u ~ du = u^{n}\sin u - n\int u^{n-1}\sin u ~ du$$
56. $$\int \frac{1}{1\pm \sin u} du = \tan u \mp \sec u + C$$
57. $$\int \frac{1}{1\pm \cos u} du = -\cot u \pm \csc u + C$$
58. $$\int \frac{1}{\sin u \cos u} du = \ln|\tan u| + C$$

### Formas que implican $\tan u, \cot u, \sec u$ o $\csc u$
59. $$\int \tan u ~ du = \ln|\sec u| + C$$
60. $$\int \cot u ~ du = - \ln|\csc u| + C$$
61. $$\int \sec u ~ du = \ln|\sec u + \tan u| + C$$
62. $$\int \csc u ~ du = \ln|\csc u - \cot u| + C$$
63. $$\int \tan^{2}u ~ du = -u + \tan u + C$$
64. $$\int \cot^{2}u ~ du = -u - \cot u + C$$
65. $$\int \sec^{2}u ~ du = \tan u + C$$
66. $$\int \csc^{2}u ~ du = -\cot u + C$$
67. $$\int \tan^{n}u ~ du = \frac{\tan^{n-1}u}{n-1} - \int \tan^{n-2}u ~ du, \quad n \ne 1$$
68. $$\int \cot^{n}u ~ du = -\frac{\cot^{n-1}u}{n-1} - \int \cot^{n-2}u ~ du, \quad n \ne 1$$
69. $$\int \sec^{n}u ~ du = \frac{\sec^{n-2}u \tan u}{n-1} + \frac{n-2}{n-1}\int \sec^{n-2}u ~ du, \quad n \ne 1$$
70. $$\int \csc^{n}u ~ du = -\frac{\csc^{n-2}u \cot u}{n-1} + \frac{n-2}{n-1}\int \csc^{n-2}u ~ du, \quad n \ne 1$$
71. $$\int \frac{1}{1\pm \tan u} du = \frac{1}{2}(u \pm \ln|\cos u \pm \sin u|) + C$$
72. $$\int \frac{1}{1\pm \cot u} du = \frac{1}{2}(u \mp \ln|\sin u \pm \cos u|) + C$$
73. $$\int \frac{1}{1\pm \sec u} du = u + \cot u \mp \csc u + C$$
74. $$\int \frac{1}{1\pm \csc u} du = u - \tan u \pm \sec u + C$$

### Formas que implican funciones trigonométricas inversas
75. $$\int \arcsin u ~ du = u \arcsin u + \sqrt{1-u^{2}} + C$$
76. $$\int \arccos u ~ du = u \arccos u - \sqrt{1-u^{2}} + C$$
77. $$\int \arctan u ~ du = u \arctan u - \ln\sqrt{1+u^{2}} + C$$
78. $$\int \text{arccot}~ u ~ du = u ~\text{arccot}~ u + \ln\sqrt{1+u^{2}} + C$$
79. $$\int \sec^{-1} u ~ du = u \sec^{-1} u - \ln|u+\sqrt{u^{2}-1}| + C$$
80. $$\int \csc^{-1} u ~ du = u \csc^{-1} u + \ln|u+\sqrt{u^{2}-1}| + C$$

### Formas que implican $e^u$
81. $$\int e^{u} du = e^{u} + C$$
82. $$\int u e^{u} du = (u-1)e^{u} + C$$
83. $$\int u^{n}e^{u} du = u^{n}e^{u} - n\int u^{n-1}e^{u} du$$
84. $$\int \frac{1}{1+e^{u}} du = u - \ln(1+e^{u}) + C$$
85. $$\int e^{au}\sin bu ~ du = \frac{e^{au}}{a^{2}+b^{2}}(a \sin bu - b \cos bu) + C$$
86. $$\int e^{au}\cos bu ~ du = \frac{e^{au}}{a^{2}+b^{2}}(a \cos bu + b \sin bu) + C$$

### Formas que implican $\ln u$
87. $$\int \ln u ~ du = u(-1+\ln u) + C$$
88. $$\int u \ln u ~ du = \frac{u^{2}}{4}(-1+2\ln u) + C$$
89. $$\int u^{n}\ln u ~ du = \frac{u^{n+1}}{(n+1)^{2}}[-1+(n+1)\ln u] + C, \quad n \ne -1$$
90. $$\int (\ln u)^{2} du = u[2-2\ln u + (\ln u)^{2}] + C$$
91. $$\int (\ln u)^{n} du = u(\ln u)^{n} - n\int (\ln u)^{n-1} du$$

### Formas que implican funciones hiperbólicas
92. $$\int \cosh u ~ du = \sinh u + C$$
93. $$\int \sinh u ~ du = \cosh u + C$$
94. $$\int \text{sech}^{2}u ~ du = \tanh u + C$$
95. $$\int \text{csch}^{2}u ~ du = -\coth u + C$$
96. $$\int \text{sech}~ u \tanh u ~ du = -\text{sech}~ u + C$$
97. $$\int \text{csch}~ u \coth u ~ du = -\text{csch}~ u + C$$

### Formas que implican funciones hiperbólicas inversas (logarítmicas)
98. $$\int \frac{du}{\sqrt{u^{2}\pm a^{2}}} = \ln(u+\sqrt{u^{2}\pm a^{2}}) + C$$
99. $$\int \frac{du}{a^{2}-u^{2}} = \frac{1}{2a}\ln\left|\frac{a+u}{a-u}\right| + C$$
100. $$\int \frac{du}{u\sqrt{a^{2}\pm u^{2}}} = -\frac{1}{a}\ln\frac{a+\sqrt{a^{2}\pm u^{2}}}{|u|} + C$$
