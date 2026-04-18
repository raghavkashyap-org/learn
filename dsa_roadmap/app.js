// ─── DATA ────────────────────────────────────────────────────────────────────
const SECTIONS = [
  { name: "C++ Foundations",         icon: "⚙️",  color: "#6c63ff", indices: [0,1,2,3,4,5,6] },
  { name: "Arrays & Complexity",     icon: "📊",  color: "#ff6b6b", indices: [7,8,9,10,11,12,13,14] },
  { name: "Pointers & Binary Search",icon: "🔍",  color: "#48dbfb", indices: [15,16,17,18,19,20,21,22] },
  { name: "Sorting Algorithms",      icon: "🔃",  color: "#ff9f43", indices: [23,24,25,26] },
  { name: "Strings",                 icon: "🔤",  color: "#1dd1a1", indices: [27,28,29,30,31,32,33] },
  { name: "2D Arrays & Math",        icon: "🧮",  color: "#f9ca24", indices: [34,35,36,37,38,39,40] },
  { name: "Recursion & Backtracking",icon: "🔄",  color: "#fd79a8", indices: [41,42,43,44,45,46,47,48,49,50,51,52,53,54] },
  { name: "OOPs in C++",             icon: "🧱",  color: "#a29bfe", indices: [55] },
  { name: "Linked Lists",            icon: "🔗",  color: "#00cec9", indices: [56,57,58,59,60,61,62,63,64,65,66] },
  { name: "Stacks & Queues",         icon: "📚",  color: "#e17055", indices: [67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83] },
  { name: "Binary Trees & BST",      icon: "🌳",  color: "#00b894", indices: [84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109] },
  { name: "Graphs",                  icon: "🕸️",  color: "#74b9ff", indices: [110,111,112,113,114,115,116,117,118,119,120,121,122,123,124] },
  { name: "Updates & Resources",     icon: "📢",  color: "#b2bec3", indices: [125] },
];

const VIDEOS = [{"title":"Lecture 1 : Flowchart & Pseudocode + Installation | DSA Series by Shradha Khapra Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/VTLCoHnyACE/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=VTLCoHnyACE","duration":"1:25:52","views":"5849329","id":0},{"title":"Lecture 2 : Variable, Data Types & Operators | DSA Series by Shradha Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/Dxu7GKtdbnA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=Dxu7GKtdbnA","duration":"1:16:44","views":"2007686","id":1},{"title":"Lecture 3: Conditional Statements & Loops | DSA Series by Shradha Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/qR9U6bKxJ7g/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=qR9U6bKxJ7g","duration":"1:34:39","views":"1421326","id":2},{"title":"Lecture 4: Patterns | DSA Series by Shradha Khapra Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/rga_q2N7vU8/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=rga_q2N7vU8","duration":"1:31:07","views":"1415993","id":3},{"title":"Lecture 5: Functions | DSA Series by Shradha Khapra Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/P08Z_NC8GuY/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=P08Z_NC8GuY","duration":"49:13","views":"987946","id":4},{"title":"Binary Number System | DSA Series by Shradha Khapra Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/xpy5NXiBFvA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=xpy5NXiBFvA","duration":"37:20","views":"877873","id":5},{"title":"Bitwise Operators, Data Type Modifiers & more | DSA Series by Shradha Khapra Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/r-u4uh3QvsQ/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=r-u4uh3QvsQ","duration":"38:33","views":"540580","id":6},{"title":"Array Data Structure - Part1 | DSA Series by Shradha Khapra Ma'am | C++","thumbnail":"https://i.ytimg.com/vi/8wmn7k1TTcI/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=8wmn7k1TTcI","duration":"54:07","views":"1444750","id":7},{"title":"Vectors in C++ | Arrays Part 2 | DSA Series by Shradha Ma'am | Lecture 9","thumbnail":"https://i.ytimg.com/vi/NWg38xWYzEg/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=NWg38xWYzEg","duration":"40:06","views":"744186","id":8},{"title":"Kadane's Algorithm | Maximum Subarray Sum | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/9IZYqostl2M/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=9IZYqostl2M","duration":"23:29","views":"715216","id":9},{"title":"Majority Element | Brute- Better-Best Approach | Moore's Voting Algorithm | & Pair Sum","thumbnail":"https://i.ytimg.com/vi/_xqIp2rj8bo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=_xqIp2rj8bo","duration":"39:10","views":"575845","id":10},{"title":"Time & Space Complexity - DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/PwKv8fOcriM/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=PwKv8fOcriM","duration":"1:25:41","views":"942079","id":11},{"title":"Buy and Sell Stock Problem and Pow(X,N) Power exponential Problem - Leetcode | DSA Series","thumbnail":"https://i.ytimg.com/vi/WBzZCm46mFo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=WBzZCm46mFo","duration":"29:10","views":"433506","id":12},{"title":"Container with Most Water Problem | Brute & Optimal Solution | Two Pointer Approach - Leetcode 11","thumbnail":"https://i.ytimg.com/vi/EbkMABpP52U/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=EbkMABpP52U","duration":"32:00","views":"314363","id":13},{"title":"Product of Array Except Self | Brute to Optimal Solution | Leetcode 238","thumbnail":"https://i.ytimg.com/vi/TW2m8m_FNJE/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=TW2m8m_FNJE","duration":"29:30","views":"295283","id":14},{"title":"Pointers in C++ | In Detail | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/qYEjR6M0wSk/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=qYEjR6M0wSk","duration":"46:08","views":"560893","id":15},{"title":"Binary Search Algorithm - Iterative and Recursive Method | [Theory + Code] with Example","thumbnail":"https://i.ytimg.com/vi/TbbSJrY5GqQ/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=TbbSJrY5GqQ","duration":"44:16","views":"492610","id":16},{"title":"Search in Rotated Sorted Array | Binary Search | Leetcode 33","thumbnail":"https://i.ytimg.com/vi/6WNZQBHWQJs/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=6WNZQBHWQJs","duration":"19:30","views":"258390","id":17},{"title":"Peak Index in Mountain Array | Binary Search | Leetcode 852","thumbnail":"https://i.ytimg.com/vi/RjxD6UXGlhc/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=RjxD6UXGlhc","duration":"23:34","views":"181928","id":18},{"title":"Single Element in Sorted Array | Binary Search | DSA Series Lecture 20","thumbnail":"https://i.ytimg.com/vi/qsbCBduIs40/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=qsbCBduIs40","duration":"27:33","views":"184043","id":19},{"title":"Book Allocation or Allocate Books Problem | DSA Series - Binary Search","thumbnail":"https://i.ytimg.com/vi/JRAByolWqhw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=JRAByolWqhw","duration":"32:59","views":"217234","id":20},{"title":"Painter's Partition Problem | DSA Placement Series - Binary Search | Lecture 22","thumbnail":"https://i.ytimg.com/vi/srsFN5OHBgw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=srsFN5OHBgw","duration":"27:44","views":"141743","id":21},{"title":"Aggressive Cows Problem | DSA Placement Series - Binary Search | Lecture 23","thumbnail":"https://i.ytimg.com/vi/7wOzDqsfXy0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=7wOzDqsfXy0","duration":"30:12","views":"160967","id":22},{"title":"Sorting Algorithms | Bubble Sort, Selection Sort & Insertion Sort | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/1jCFUv-Xlqo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=1jCFUv-Xlqo","duration":"34:33","views":"1320512","id":23},{"title":"Sort an Array of 0s, 1s & 2s | DNF Sorting Algorithm | Leetcode 75","thumbnail":"https://i.ytimg.com/vi/J48aGjfjYTI/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=J48aGjfjYTI","duration":"33:39","views":"187436","id":24},{"title":"Merge Sorted Arrays Problem and Next Permutation Problem | DSA Series","thumbnail":"https://i.ytimg.com/vi/-1cLK6PaLsQ/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=-1cLK6PaLsQ","duration":"43:49","views":"304861","id":25},{"title":"C++ STL Complete Tutorial | Standard Template Library - One Shot","thumbnail":"https://i.ytimg.com/vi/okhdtEk1iKk/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=okhdtEk1iKk","duration":"1:27:20","views":"542761","id":26},{"title":"How to setup C++ compiler on Mac ? | Software Installation for Mac users","thumbnail":"https://i.ytimg.com/vi/varXreLWPRo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=varXreLWPRo","duration":"1:40","views":"162739","id":27},{"title":"Strings & Character Arrays in C++  -  Part 1 | DSA Placement Series","thumbnail":"https://i.ytimg.com/vi/MOSjYaVymcU/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=MOSjYaVymcU","duration":"30:03","views":"330405","id":28},{"title":"Valid Palindrome & Remove all Occurrences | Strings Part 2 | DSA Placement Series","thumbnail":"https://i.ytimg.com/vi/dSRFgEs3a6A/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=dSRFgEs3a6A","duration":"24:02","views":"212162","id":29},{"title":"Strings - Part 3 | Permutation in String | DSA Placement Series","thumbnail":"https://i.ytimg.com/vi/VXewy91P0S4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=VXewy91P0S4","duration":"21:41","views":"168880","id":30},{"title":"Strings - Part 4 | Reverse Words in String | DSA Placement Series","thumbnail":"https://i.ytimg.com/vi/RitppzIdMCo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=RitppzIdMCo","duration":"14:42","views":"217146","id":31},{"title":"String Compression problem - Lecture 32 | Leetcode 443","thumbnail":"https://i.ytimg.com/vi/cAB15h6-sWA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=cAB15h6-sWA","duration":"19:29","views":"131565","id":32},{"title":"Maths for DSA - One Shot | Euclid's Algorithm | Sieve of Eratosthenes | Modular Arithmetics","thumbnail":"https://i.ytimg.com/vi/Y4KdgqV1IqA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=Y4KdgqV1IqA","duration":"55:48","views":"191844","id":33},{"title":"2D Arrays in C++ | Part 1 | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/lBL8327gq8I/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=lBL8327gq8I","duration":"37:31","views":"247444","id":34},{"title":"Search a 2D Matrix - Variation I & II | 2D Arrays - Part 2 | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/LEFFjgt5i6w/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=LEFFjgt5i6w","duration":"37:43","views":"128536","id":35},{"title":"Spiral Matrix | 2D Arrays - Part 3 | Leetcode 54 | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/XMpdvwUObho/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=XMpdvwUObho","duration":"24:33","views":"135053","id":36},{"title":"Two Sum | Find Duplicate | Find Repeating & Missing Values | Hashing Problems","thumbnail":"https://i.ytimg.com/vi/0Fxc_jKj2vo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=0Fxc_jKj2vo","duration":"53:30","views":"261696","id":37},{"title":"3 Sum | Brute, Better & Optimized Approach with Codes | Leetcode 15","thumbnail":"https://i.ytimg.com/vi/K-RsltkN63w/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=K-RsltkN63w","duration":"43:43","views":"189824","id":38},{"title":"4 Sum Problem | Optimal Approach | DSA Series by Shradha Ma'am","thumbnail":"https://i.ytimg.com/vi/X6sL8JTROLY/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=X6sL8JTROLY","duration":"23:02","views":"93268","id":39},{"title":"Subarray Sum Equals K | Brute-Better-Optimal approach","thumbnail":"https://i.ytimg.com/vi/KDH4mhFVvHw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=KDH4mhFVvHw","duration":"34:45","views":"191726","id":40},{"title":"Recursion Tutorial - Basics to Advanced | Part 1","thumbnail":"https://i.ytimg.com/vi/9OsMG4fI4OY/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=9OsMG4fI4OY","duration":"46:22","views":"386725","id":41},{"title":"Recursion Part 2 : Fibonacci numbers problem, Binary search problem, Find if array sorted problem","thumbnail":"https://i.ytimg.com/vi/4iT-GhvSKzc/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=4iT-GhvSKzc","duration":"41:30","views":"177576","id":42},{"title":"Recursion Part 3 : Backtracking in Detail | Print all Subsets | Subsets II","thumbnail":"https://i.ytimg.com/vi/pNzljlzDCiI/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=pNzljlzDCiI","duration":"42:20","views":"204426","id":43},{"title":"Permutations of an Array/String | Recursion & Backtracking","thumbnail":"https://i.ytimg.com/vi/N4gJDGdhpLw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=N4gJDGdhpLw","duration":"22:55","views":"166945","id":44},{"title":"N-Queens Problem | using Backtracking | Leetcode Hard","thumbnail":"https://i.ytimg.com/vi/BdSJnIdR-4s/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=BdSJnIdR-4s","duration":"24:26","views":"223876","id":45},{"title":"Sudoku Solver Problem | using Backtracking | Leetcode Hard","thumbnail":"https://i.ytimg.com/vi/70cP3qtJp-s/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=70cP3qtJp-s","duration":"26:58","views":"127665","id":46},{"title":"Rat in a Maze Problem | Backtracking","thumbnail":"https://i.ytimg.com/vi/D8Yze9CDDAw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=D8Yze9CDDAw","duration":"32:45","views":"95730","id":47},{"title":"Combination Sum Problem | Recursion & Backtracking","thumbnail":"https://i.ytimg.com/vi/jkgZw2WEaqA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=jkgZw2WEaqA","duration":"23:35","views":"99973","id":48},{"title":"Palindrome Partitioning Problem | Recursion & Backtracking","thumbnail":"https://i.ytimg.com/vi/aZ0B1eWkSVU/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=aZ0B1eWkSVU","duration":"20:44","views":"79230","id":49},{"title":"Merge Sort Algorithm | Recursion & Backtracking","thumbnail":"https://i.ytimg.com/vi/cQDtOBTy7_Y/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=cQDtOBTy7_Y","duration":"32:04","views":"369867","id":50},{"title":"One Major update & reaching 1000M views","thumbnail":"https://i.ytimg.com/vi/SBQfXK7q5K4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=SBQfXK7q5K4","duration":"3:50","views":"127507","id":51},{"title":"Quick Sort Algorithm - Lecture 51 of Complete DSA Placement Series","thumbnail":"https://i.ytimg.com/vi/8MNB0Mba_Dc/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=8MNB0Mba_Dc","duration":"26:23","views":"366036","id":52},{"title":"Count Inversions Problem | Brute and Optimal","thumbnail":"https://i.ytimg.com/vi/ynnWDBTdVi0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=ynnWDBTdVi0","duration":"24:33","views":"69886","id":53},{"title":"KNIGHTS TOUR Problem - Backtracking | Leetcode 2596","thumbnail":"https://i.ytimg.com/vi/Sp1jzttFVdE/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=Sp1jzttFVdE","duration":"22:32","views":"61075","id":54},{"title":"OOPs Tutorial in One Shot | Object Oriented Programming | in C++ Language | for Placement Interviews","thumbnail":"https://i.ytimg.com/vi/mlIUKyZIUUU/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=mlIUKyZIUUU","duration":"2:04:23","views":"4076856","id":55},{"title":"Introduction to Linked List | Data Structures & Algorithms","thumbnail":"https://i.ytimg.com/vi/LyuuqCVkP5I/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=LyuuqCVkP5I","duration":"50:43","views":"824759","id":56},{"title":"Reverse a Linked List | DSA Series by @shradhaKD","thumbnail":"https://i.ytimg.com/vi/R-CKBYnOv1U/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=R-CKBYnOv1U","duration":"10:29","views":"170212","id":57},{"title":"Middle of a Linked List | DSA Series by @shradhaKD","thumbnail":"https://i.ytimg.com/vi/nzaHG0dme4g/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=nzaHG0dme4g","duration":"10:32","views":"85393","id":58},{"title":"Detect & Remove Cycle in Linked List | DSA Series by @shradhaKD","thumbnail":"https://i.ytimg.com/vi/-1E8ZMS0gSs/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=-1E8ZMS0gSs","duration":"30:24","views":"104763","id":59},{"title":"Merge Two Sorted Lists | DSA Series by @shradhaKD","thumbnail":"https://i.ytimg.com/vi/f8RPIb-0DDE/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=f8RPIb-0DDE","duration":"12:41","views":"102108","id":60},{"title":"Copy List with Random Pointer | DSA Series by @shradhaKD","thumbnail":"https://i.ytimg.com/vi/8ze7Zopdsaw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=8ze7Zopdsaw","duration":"20:52","views":"71741","id":61},{"title":"Doubly Linked List Tutorial","thumbnail":"https://i.ytimg.com/vi/bO5DasTsaRQ/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=bO5DasTsaRQ","duration":"32:16","views":"151308","id":62},{"title":"Circular Linked List in Data Structures","thumbnail":"https://i.ytimg.com/vi/e6lZY5Yha8U/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=e6lZY5Yha8U","duration":"33:56","views":"109677","id":63},{"title":"Flatten a Doubly Linked List | Leetcode 430 | DSA Series by @shradhaKD","thumbnail":"https://i.ytimg.com/vi/I8b0rff5F9M/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=I8b0rff5F9M","duration":"24:47","views":"54956","id":64},{"title":"Reverse Nodes in K-Group | Linked List","thumbnail":"https://i.ytimg.com/vi/-swgIiMIlJo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=-swgIiMIlJo","duration":"20:39","views":"62853","id":65},{"title":"Swap Nodes in Pairs | Linked List","thumbnail":"https://i.ytimg.com/vi/wwbTMNVlFHQ/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=wwbTMNVlFHQ","duration":"20:06","views":"51102","id":66},{"title":"Introduction to STACKS | Data Structures & Algorithms | Lecture 66","thumbnail":"https://i.ytimg.com/vi/0X-fV-1ir9c/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=0X-fV-1ir9c","duration":"22:11","views":"346506","id":67},{"title":"Valid Parentheses | Stack | Lecture 67","thumbnail":"https://i.ytimg.com/vi/NlHupEeDXzY/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=NlHupEeDXzY","duration":"16:25","views":"120811","id":68},{"title":"Stock Span Problem | Optimal Solution","thumbnail":"https://i.ytimg.com/vi/01vBuZyMfqk/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=01vBuZyMfqk","duration":"26:29","views":"75030","id":69},{"title":"Next Greater Element | Optimal Solution & Code","thumbnail":"https://i.ytimg.com/vi/NKbExYwvjb0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=NKbExYwvjb0","duration":"23:32","views":"79351","id":70},{"title":"Previous Smaller Element | Optimal Solution & Code","thumbnail":"https://i.ytimg.com/vi/WnjUfBn9nZM/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=WnjUfBn9nZM","duration":"9:24","views":"34629","id":71},{"title":"Design a Min Stack | Optimal Solution & Code","thumbnail":"https://i.ytimg.com/vi/wHDm-N2m2XY/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=wHDm-N2m2XY","duration":"24:34","views":"56208","id":72},{"title":"Largest Rectangle in Histogram | Best Solution & Code","thumbnail":"https://i.ytimg.com/vi/ysy1o-QEj3k/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=ysy1o-QEj3k","duration":"32:56","views":"68835","id":73},{"title":"L73. Next Greater Element - II | Stack & Queue","thumbnail":"https://i.ytimg.com/vi/If--3pm9K3U/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=If--3pm9K3U","duration":"20:04","views":"47189","id":74},{"title":"L74. Trapping Rainwater Problem | Optimal Solution & Code","thumbnail":"https://i.ytimg.com/vi/UHHp8USwx4M/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=UHHp8USwx4M","duration":"30:50","views":"104159","id":75},{"title":"L75. The Celebrity Problem | Stack & Queue","thumbnail":"https://i.ytimg.com/vi/OZPmEA_8FM8/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=OZPmEA_8FM8","duration":"15:11","views":"45463","id":76},{"title":"L76. Implement LRU Cache | Linked List","thumbnail":"https://i.ytimg.com/vi/GsY6y0iPaHw/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=GsY6y0iPaHw","duration":"35:34","views":"66097","id":77},{"title":"New Chapter : Queue Data Structure","thumbnail":"https://i.ytimg.com/vi/Khf9v67Ya30/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=Khf9v67Ya30","duration":"18:55","views":"181596","id":78},{"title":"L78. Circular Queue in Data Strucuture","thumbnail":"https://i.ytimg.com/vi/4mKKolshFD0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=4mKKolshFD0","duration":"18:37","views":"136658","id":79},{"title":"L79. Implement Queue using Stack & Stack using Queue","thumbnail":"https://i.ytimg.com/vi/sFvP5Ois0CE/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=sFvP5Ois0CE","duration":"15:47","views":"78903","id":80},{"title":"L80. First Unique Character in String | Easy - Leetcode387","thumbnail":"https://i.ytimg.com/vi/sqyCBvEQN9c/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=sqyCBvEQN9c","duration":"13:23","views":"42255","id":81},{"title":"L81. Sliding Window Maximum | Queue","thumbnail":"https://i.ytimg.com/vi/XwG5cozqfaM/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=XwG5cozqfaM","duration":"31:22","views":"102243","id":82},{"title":"L82. Gas Station | Greedy Approach | Leetcode 134","thumbnail":"https://i.ytimg.com/vi/SmTow5Ht4iU/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=SmTow5Ht4iU","duration":"22:16","views":"58173","id":83},{"title":"Binary Trees in Data Structures | Tree Traversal | DSA Placement Series","thumbnail":"https://i.ytimg.com/vi/eKJrXBCRuNQ/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=eKJrXBCRuNQ","duration":"1:14:15","views":"323980","id":84},{"title":"L.84 Height of a Binary Tree | Count of Nodes in a Binary Tree","thumbnail":"https://i.ytimg.com/vi/7tzHzN_Ehus/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=7tzHzN_Ehus","duration":"23:09","views":"90090","id":85},{"title":"L.85 Identical Tree (same tree) | Subtree of another Tree","thumbnail":"https://i.ytimg.com/vi/tumW7jsjv68/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=tumW7jsjv68","duration":"23:28","views":"49286","id":86},{"title":"L.86 Diameter of Binary Tree","thumbnail":"https://i.ytimg.com/vi/aPyDPImR5UM/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=aPyDPImR5UM","duration":"19:29","views":"51231","id":87},{"title":"Top View of a Binary Tree | DSA Series : L.87","thumbnail":"https://i.ytimg.com/vi/FGr-syrhvOA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=FGr-syrhvOA","duration":"19:39","views":"45978","id":88},{"title":"Kth Level of a Binary Tree | DSA Series : L.88","thumbnail":"https://i.ytimg.com/vi/ze4JO_ODl3w/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=ze4JO_ODl3w","duration":"7:59","views":"30473","id":89},{"title":"Lowest Common Ancestor in Binary Tree | DSA Series : L.89","thumbnail":"https://i.ytimg.com/vi/oX5D0uKOMck/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=oX5D0uKOMck","duration":"18:20","views":"41900","id":90},{"title":"Build Tree from Preorder & Inorder | DSA Series : L.90","thumbnail":"https://i.ytimg.com/vi/33b1M980cCA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=33b1M980cCA","duration":"20:59","views":"49206","id":91},{"title":"Transform to Sum Tree | DSA Series : L.91","thumbnail":"https://i.ytimg.com/vi/TY6kEejJEM0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=TY6kEejJEM0","duration":"8:41","views":"22246","id":92},{"title":"Binary Tree Paths | DSA Series : L.92","thumbnail":"https://i.ytimg.com/vi/AWJD__CfM6A/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=AWJD__CfM6A","duration":"10:01","views":"29232","id":93},{"title":"Maximum Width of Binary Tree | DSA Series : L.93","thumbnail":"https://i.ytimg.com/vi/rhz-csskg_A/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=rhz-csskg_A","duration":"21:09","views":"32274","id":94},{"title":"Morris Inorder Traversal | DSA Series : L.94","thumbnail":"https://i.ytimg.com/vi/PUfADhkq1LI/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=PUfADhkq1LI","duration":"17:52","views":"37337","id":95},{"title":"Flatten Binary Tree to Linked List | DSA Series : L.95","thumbnail":"https://i.ytimg.com/vi/dU2Z5HWSGM0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=dU2Z5HWSGM0","duration":"15:43","views":"30567","id":96},{"title":"Binary Search Trees (BSTs) | DSA Series : L.96","thumbnail":"https://i.ytimg.com/vi/RuF7dPfj27Q/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=RuF7dPfj27Q","duration":"43:16","views":"116813","id":97},{"title":"Sorted Array to Balanced BST | DSA Series : L.97","thumbnail":"https://i.ytimg.com/vi/0s6sCjs_4g0/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=0s6sCjs_4g0","duration":"8:44","views":"33791","id":98},{"title":"Validate Binary Search Tree | DSA Series : L.98","thumbnail":"https://i.ytimg.com/vi/dSBcCynP1nA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=dSBcCynP1nA","duration":"12:41","views":"29524","id":99},{"title":"Min Distance between BST Nodes | DSA Series : L.99","thumbnail":"https://i.ytimg.com/vi/WZmjRXF_Zi4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=WZmjRXF_Zi4","duration":"14:16","views":"22735","id":100},{"title":"Kth Smallest in BST | DSA Series : L.100","thumbnail":"https://i.ytimg.com/vi/Kq4BbvIhj44/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=Kq4BbvIhj44","duration":"12:42","views":"22736","id":101},{"title":"Lowest Common Ancestor in BST | DSA Series : L.101","thumbnail":"https://i.ytimg.com/vi/ORxkZ12FrU4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=ORxkZ12FrU4","duration":"12:29","views":"19133","id":102},{"title":"Construct BST from Preorder | DSA Series : L.102","thumbnail":"https://i.ytimg.com/vi/-n5Ur1wE5Jc/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=-n5Ur1wE5Jc","duration":"19:10","views":"23023","id":103},{"title":"Merge Two Binary Search Trees | DSA Series : L.103","thumbnail":"https://i.ytimg.com/vi/AiKZjCuy2k4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=AiKZjCuy2k4","duration":"16:39","views":"20352","id":104},{"title":"Recover BST | DSA Series : L.104","thumbnail":"https://i.ytimg.com/vi/0KGzfij_SCk/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=0KGzfij_SCk","duration":"24:03","views":"22017","id":105},{"title":"Largest BST in Binary Tree | DSA Series : L.105","thumbnail":"https://i.ytimg.com/vi/Pr-HFxp7npk/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=Pr-HFxp7npk","duration":"24:56","views":"24130","id":106},{"title":"Populate Next Right Pointers in Each Node | DSA Series : L.106","thumbnail":"https://i.ytimg.com/vi/a8VKpW1DsD8/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=a8VKpW1DsD8","duration":"11:12","views":"17712","id":107},{"title":"BST Iterator | DSA Series : L.107","thumbnail":"https://i.ytimg.com/vi/dS1bKglre3A/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=dS1bKglre3A","duration":"17:16","views":"19436","id":108},{"title":"Inorder Predecessor & Successor in BST | DSA Series : L.108","thumbnail":"https://i.ytimg.com/vi/IHNkql1tAnk/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=IHNkql1tAnk","duration":"19:50","views":"27075","id":109},{"title":"Introduction to Graphs | Data Structure & Algorithms","thumbnail":"https://i.ytimg.com/vi/RpgyCJBbl5E/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=RpgyCJBbl5E","duration":"26:08","views":"194101","id":110},{"title":"BFS Traversal in Graphs | Data Structure & Algorithms","thumbnail":"https://i.ytimg.com/vi/scQITTLgFJo/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=scQITTLgFJo","duration":"18:31","views":"119411","id":111},{"title":"DFS Traversal in Graphs | Data Structure & Algorithms","thumbnail":"https://i.ytimg.com/vi/3czYbhac160/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=3czYbhac160","duration":"14:03","views":"72848","id":112},{"title":"Detect a Cycle in Undirected Graph using DFS | Data Structure & Algorithms","thumbnail":"https://i.ytimg.com/vi/OZClCpPQDR4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=OZClCpPQDR4","duration":"19:45","views":"32172","id":113},{"title":"Detect a Cycle in Undirected Graph using BFS | Data Structure & Algorithms","thumbnail":"https://i.ytimg.com/vi/MIjOkApZ39g/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=MIjOkApZ39g","duration":"18:23","views":"20873","id":114},{"title":"Number of Islands | Connected Components in Matrix | Leetcode 200","thumbnail":"https://i.ytimg.com/vi/AME6baBpswY/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=AME6baBpswY","duration":"17:05","views":"25303","id":115},{"title":"Rotting Oranges | Multi-source BFS | Leetcode 994","thumbnail":"https://i.ytimg.com/vi/RmXo5SWkhCs/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=RmXo5SWkhCs","duration":"26:22","views":"25344","id":116},{"title":"Detect a Cycle in Directed Graph using DFS | Lecture 116","thumbnail":"https://i.ytimg.com/vi/AcppN5XFt24/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=AcppN5XFt24","duration":"15:59","views":"17420","id":117},{"title":"Topological Sorting in Graph | using DFS | Lecture 117","thumbnail":"https://i.ytimg.com/vi/0WIINUY12Yg/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=0WIINUY12Yg","duration":"15:58","views":"33075","id":118},{"title":"Course Schedule Problem | using Graph & Topological Sort","thumbnail":"https://i.ytimg.com/vi/37cJ38HadM4/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=37cJ38HadM4","duration":"17:54","views":"15158","id":119},{"title":"Course Schedule II Problem | using Graph & Topological Sort","thumbnail":"https://i.ytimg.com/vi/rZsgWxodGmM/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=rZsgWxodGmM","duration":"19:33","views":"11773","id":120},{"title":"Flood Fill Algorithm | Graph Problem","thumbnail":"https://i.ytimg.com/vi/JI_e2RzARbM/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=JI_e2RzARbM","duration":"15:10","views":"19264","id":121},{"title":"Topological Sorting using Kahn's Algorithm | Graph  - DSA Lecture 121","thumbnail":"https://i.ytimg.com/vi/BnQpaTZg6Sc/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=BnQpaTZg6Sc","duration":"18:47","views":"14122","id":122},{"title":"Dijkstra's Algorithm - Single Source Shortest Path - Greedy Method","thumbnail":"https://i.ytimg.com/vi/8gYBHjtjWBI/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=8gYBHjtjWBI","duration":"35:20","views":"44227","id":123},{"title":"Bellman Ford Algorithm - Single Source Shortest Path - Dynamic Programming","thumbnail":"https://i.ytimg.com/vi/3rFHlbJ7qKc/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=3rFHlbJ7qKc","duration":"23:38","views":"23810","id":124},{"title":"DSA Series Quick Update - 125 lectures | New DSA Sheet | DP, Heaps, Tries etc","thumbnail":"https://i.ytimg.com/vi/YlmU4gBgePA/maxresdefault.jpg","url":"https://www.youtube.com/watch?v=YlmU4gBgePA","duration":"6:24","views":"72737","id":125}];

// ─── STATE ───────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'dsa_roadmap_v1';

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return {
      completed:  s.completed  || {},
      notes:      s.notes      || {},
      bookmarks:  s.bookmarks  || {},
      studyLog:   s.studyLog   || {},   // { 'YYYY-MM-DD': count }
      streak:     s.streak     || { count: 0, lastDate: null },
      goalDate:   s.goalDate   || null,
    };
  } catch {
    return { completed: {}, notes: {}, bookmarks: {}, studyLog: {}, streak: { count: 0, lastDate: null }, goalDate: null };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let activeFilter = 'all'; // 'all' | 'completed' | 'pending' | 'bookmarked'
let searchQuery = '';
let currentNoteVideoId = null;
let zenMode = false;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function formatViews(v) {
  const n = parseInt(v);
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return v;
}

function getSectionForVideo(id) {
  return SECTIONS.find(s => s.indices.includes(id));
}

function getCompletedCount() {
  return Object.values(state.completed).filter(Boolean).length;
}

function getSectionProgress(section) {
  const done = section.indices.filter(i => state.completed[i]).length;
  return { done, total: section.indices.length, pct: Math.round(done / section.indices.length * 100) };
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
function renderAll() {
  renderSidebar();
  renderMain();
  updateGlobalProgress();
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar-sections');
  sidebar.innerHTML = '';
  SECTIONS.forEach((sec, idx) => {
    const { done, total, pct } = getSectionProgress(sec);
    const li = document.createElement('li');
    li.className = 'sidebar-item';
    li.innerHTML = `
      <a href="#section-${idx}" class="sidebar-link">
        <span class="sidebar-icon">${sec.icon}</span>
        <span class="sidebar-label">${sec.name}</span>
        <span class="sidebar-badge" style="background:${sec.color}22;color:${sec.color}">${done}/${total}</span>
      </a>
      <div class="sidebar-mini-bar">
        <div class="sidebar-mini-fill" style="width:${pct}%;background:${sec.color}"></div>
      </div>
    `;
    sidebar.appendChild(li);
  });
}

function renderMain() {
  const container = document.getElementById('sections-container');
  container.innerHTML = '';

  let hasResults = false;

  SECTIONS.forEach((sec, secIdx) => {
    const filteredVideos = sec.indices.map(i => VIDEOS[i]).filter(v => {
      const matchSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase());
      const isDone = !!state.completed[v.id];
      const isBookmarked = !!state.bookmarks[v.id];
      const matchFilter =
        activeFilter === 'all'       ? true :
        activeFilter === 'completed' ? isDone :
        activeFilter === 'pending'   ? !isDone :
        activeFilter === 'bookmarked'? isBookmarked : true;
      const matchZen = zenMode ? !isDone : true;
      return matchSearch && matchFilter && matchZen;
    });

    if (filteredVideos.length === 0) return;
    hasResults = true;

    const { done, total, pct } = getSectionProgress(sec);
    const section = document.createElement('div');
    section.className = 'section-block';
    section.id = `section-${secIdx}`;

    section.innerHTML = `
      <div class="section-header" style="--sec-color:${sec.color}">
        <div class="section-header-left">
          <span class="section-emoji">${sec.icon}</span>
          <div>
            <h2 class="section-title">${sec.name}</h2>
            <p class="section-sub">${done} of ${total} completed</p>
          </div>
        </div>
        <div class="section-ring-wrap">
          <svg class="section-ring" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3"/>
            <circle cx="18" cy="18" r="15" fill="none" stroke="${sec.color}" stroke-width="3"
              stroke-dasharray="${pct * 0.942} 94.2" stroke-linecap="round"
              transform="rotate(-90 18 18)"/>
          </svg>
          <span class="section-ring-pct" style="color:${sec.color}">${pct}%</span>
        </div>
      </div>
      <div class="video-grid" id="grid-${secIdx}"></div>
    `;

    container.appendChild(section);

    const grid = section.querySelector('.video-grid');
    filteredVideos.forEach(v => grid.appendChild(buildCard(v, sec)));
  });

  if (!hasResults) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🔎</div>
      <p>No videos match your search.</p>
    </div>`;
  }
}

function buildCard(v, sec) {
  const done = !!state.completed[v.id];
  const hasNote = !!state.notes[v.id];
  const card = document.createElement('div');
  card.className = `video-card ${done ? 'is-done' : ''}`;
  card.dataset.id = v.id;
  card.style.setProperty('--card-accent', sec.color);

  const isBookmarked = !!state.bookmarks[v.id];
  card.innerHTML = `
    <div class="card-thumb-wrap">
      <img class="card-thumb" src="${v.thumbnail}" alt="${v.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/default/maxresdefault.jpg'">
      <span class="card-duration">${v.duration}</span>
      <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark(${v.id},event)" title="${isBookmarked ? 'Remove bookmark' : 'Bookmark'}">
        ${isBookmarked ? '🔖' : '🏷️'}
      </button>
      <div class="card-play-overlay">
        <svg viewBox="0 0 24 24" fill="white" width="32" height="32"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
    <div class="card-body">
      <p class="card-title">${v.title.replace(/\|.*$/, '').trim()}</p>
      <div class="card-meta">
        <span class="card-views">👁 ${formatViews(v.views)}</span>
        ${hasNote ? '<span class="card-note-badge" title="Has notes">📝</span>' : ''}
      </div>
      <div class="card-actions">
        <a href="${v.url}" target="_blank" class="btn-watch" style="--btn-clr:${sec.color}">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>
          Watch
        </a>
        <button class="btn-complete ${done ? 'done' : ''}" onclick="handleComplete(${v.id})" style="--btn-clr:${sec.color}">
          ${done
            ? `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Done`
            : `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/></svg> Mark Done`
          }
        </button>
        ${done ? `<button class="btn-note" onclick="openNote(${v.id})" title="Add/Edit note">📝</button>` : ''}
      </div>
    </div>
    ${done ? '<div class="card-done-ribbon" style="background:'+sec.color+'"><svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>' : ''}
  `;

  // Click thumb to open video
  card.querySelector('.card-thumb-wrap').addEventListener('click', (e) => {
    if (!e.target.closest('.btn-complete')) window.open(v.url, '_blank');
  });

  return card;
}

// ─── ACTIONS ─────────────────────────────────────────────────────────────────
function handleComplete(id) {
  const wasComplete = !!state.completed[id];
  if (wasComplete) {
    state.completed[id] = false;
    saveState(state);
    renderAll();
  } else {
    state.completed[id] = true;
    recordActivity();
    saveState(state);
    renderAll();
    openNote(id, true);
  }
  if (!wasComplete) burst(id);
}

function burst(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  for (let i = 0; i < 18; i++) spawnConfetti(cx, cy);
}

function spawnConfetti(cx, cy) {
  const el = document.createElement('div');
  el.className = 'confetti-piece';
  const colors = ['#ff6b6b','#ffd700','#48dbfb','#1dd1a1','#fd79a8','#6c63ff'];
  el.style.cssText = `left:${cx}px;top:${cy}px;background:${colors[Math.floor(Math.random()*colors.length)]};
    transform:translate(${(Math.random()-0.5)*180}px,${(Math.random()-0.5)*180}px) rotate(${Math.random()*360}deg) scale(0);`;
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.style.transition = 'all 0.8s cubic-bezier(.17,.67,.35,1.2)';
    el.style.transform = el.style.transform.replace('scale(0)', 'scale(1)');
    el.style.opacity = '0';
  });
  setTimeout(() => el.remove(), 900);
}

function updateGlobalProgress() {
  const done = getCompletedCount();
  const total = VIDEOS.length;
  const pct = Math.round(done / total * 100);
  document.getElementById('global-done').textContent = done;
  document.getElementById('global-total').textContent = total;
  document.getElementById('global-pct').textContent = pct + '%';
  document.getElementById('global-bar-fill').style.width = pct + '%';
  renderStreakBadge();
  renderGoalProgress();
}

// ─── NOTE MODAL ──────────────────────────────────────────────────────────────
function openNote(id, isNew = false) {
  currentNoteVideoId = id;
  const v = VIDEOS[id];
  const sec = getSectionForVideo(id);
  document.getElementById('modal-title').textContent = v.title.replace(/\|.*$/, '').trim();
  document.getElementById('modal-section').textContent = sec.name;
  document.getElementById('modal-section').style.color = sec.color;
  document.getElementById('note-textarea').value = state.notes[id] || '';
  document.getElementById('note-modal').classList.add('open');
  document.getElementById('note-textarea').focus();
  if (isNew) {
    document.getElementById('modal-subtitle').textContent = '🎉 Great job! Add a note about what you learned.';
  } else {
    document.getElementById('modal-subtitle').textContent = 'Your personal notes for this lecture.';
  }
}

function closeNote() {
  document.getElementById('note-modal').classList.remove('open');
  currentNoteVideoId = null;
}

function saveNote() {
  if (currentNoteVideoId === null) return;
  const text = document.getElementById('note-textarea').value.trim();
  if (text) {
    state.notes[currentNoteVideoId] = text;
  } else {
    delete state.notes[currentNoteVideoId];
  }
  saveState(state);
  closeNote();
  renderAll();
}

// ─── EXPORT / IMPORT ─────────────────────────────────────────────────────────
function exportProgress() {
  const payload = {
    version: 2,
    exportedAt: new Date().toISOString(),
    appName: 'DSA Roadmap — Apna College',
    totalVideos: VIDEOS.length,
    completedCount: getCompletedCount(),
    completed: state.completed,
    notes: state.notes,
  };
  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  a.href     = url;
  a.download = `dsa_roadmap_progress_${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ Progress exported! Share this file across devices.', 'success');
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      // Support both v1 (flat) and v2 (nested) formats
      const imported = parsed.completed || parsed;
      const importedNotes = parsed.notes || {};

      if (typeof imported !== 'object') throw new Error('Invalid format');

      state.completed = {};
      state.notes = {};

      // Apply imported completed state
      Object.entries(imported).forEach(([k, v]) => {
        const id = parseInt(k);
        if (!isNaN(id) && id >= 0 && id < VIDEOS.length) {
          state.completed[id] = !!v;
        }
      });

      // Apply imported notes
      Object.entries(importedNotes).forEach(([k, v]) => {
        const id = parseInt(k);
        if (!isNaN(id) && id >= 0 && id < VIDEOS.length && v) {
          state.notes[id] = v;
        }
      });

      saveState(state);
      renderAll();

      const doneCount = getCompletedCount();
      showToast(`✅ Imported! ${doneCount} videos restored, ${Object.keys(state.notes).length} notes loaded.`, 'success');
    } catch(err) {
      showToast('❌ Invalid file. Please use an exported JSON from this app.', 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = ''; // reset so same file can be re-imported
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'app-toast ' + type;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ─── BOOKMARKS ────────────────────────────────────────────────────────────────
function toggleBookmark(id, e) {
  e.stopPropagation();
  state.bookmarks[id] = !state.bookmarks[id];
  if (!state.bookmarks[id]) delete state.bookmarks[id];
  saveState(state);
  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) {
    const btn = card.querySelector('.btn-bookmark');
    if (btn) {
      const on = !!state.bookmarks[id];
      btn.classList.toggle('bookmarked', on);
      btn.textContent = on ? '🔖' : '🏷️';
      btn.title = on ? 'Remove bookmark' : 'Bookmark';
    }
  }
  updateGlobalProgress();
}

// ─── STREAK ───────────────────────────────────────────────────────────────────
function getTodayStr()     { return new Date().toISOString().slice(0, 10); }
function getYesterdayStr() { return new Date(Date.now() - 86400000).toISOString().slice(0, 10); }

function recordActivity() {
  const today = getTodayStr();
  state.studyLog = state.studyLog || {};
  state.studyLog[today] = (state.studyLog[today] || 0) + 1;
  const str = state.streak || { count: 0, lastDate: null };
  if (!str.lastDate) {
    state.streak = { count: 1, lastDate: today };
  } else if (str.lastDate !== today) {
    state.streak = {
      count: str.lastDate === getYesterdayStr() ? str.count + 1 : 1,
      lastDate: today,
    };
  }
}

function renderStreakBadge() {
  const el = document.getElementById('streak-badge');
  if (!el) return;
  const count = state.streak?.count || 0;
  el.innerHTML = count > 0
    ? `🔥 <strong>${count}</strong> day${count !== 1 ? 's' : ''}`
    : `🔥 <strong>0</strong> days`;
  el.title = count > 0 ? `${count}-day study streak! Keep it up!` : 'Start your streak by completing a video today';
  el.className = 'streak-badge' + (count >= 7 ? ' hot' : '');
}

// ─── GOAL TRACKER ─────────────────────────────────────────────────────────────
function openGoalModal() {
  document.getElementById('goal-modal').classList.add('open');
  const inp = document.getElementById('goal-date-input');
  if (inp) {
    inp.value = state.goalDate || '';
    inp.min = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  }
}
function closeGoalModal() { document.getElementById('goal-modal').classList.remove('open'); }

function setGoal() {
  const inp = document.getElementById('goal-date-input');
  if (!inp?.value) return;
  state.goalDate = inp.value;
  saveState(state);
  renderGoalProgress();
  closeGoalModal();
  showToast('🎯 Goal set! You\'ve got this.', 'success');
}
function clearGoal() {
  state.goalDate = null;
  saveState(state);
  renderGoalProgress();
  closeGoalModal();
}

function renderGoalProgress() {
  const el = document.getElementById('goal-display');
  if (!el) return;
  if (!state.goalDate) {
    el.innerHTML = `<button class="btn-set-goal" onclick="openGoalModal()">🎯 Set Goal</button>`;
    return;
  }
  const today = new Date(); today.setHours(0,0,0,0);
  const goal  = new Date(state.goalDate);
  const daysLeft = Math.ceil((goal - today) / 86400000);
  const remaining = VIDEOS.length - getCompletedCount();
  const perDay = daysLeft > 0 ? Math.ceil(remaining / daysLeft) : remaining;
  if (daysLeft < 0) {
    el.innerHTML = `<div class="goal-chip overdue" onclick="openGoalModal()">⚠️ Goal overdue</div>`;
  } else if (daysLeft === 0) {
    el.innerHTML = `<div class="goal-chip today" onclick="openGoalModal()">🏁 Goal day!</div>`;
  } else {
    el.innerHTML = `<div class="goal-chip" onclick="openGoalModal()">🎯 ${daysLeft}d · ${perDay}/day</div>`;
  }
}

// ─── STATS MODAL ─────────────────────────────────────────────────────────────
function openStats() {
  document.getElementById('stats-modal').classList.add('open');
  renderStats();
}
function closeStats() { document.getElementById('stats-modal').classList.remove('open'); }

function renderStats() {
  const done      = getCompletedCount();
  const total     = VIDEOS.length;
  const pct       = Math.round(done / total * 100);
  const noteCount = Object.values(state.notes).filter(Boolean).length;
  const bkCount   = Object.values(state.bookmarks).filter(Boolean).length;
  const streak    = state.streak?.count || 0;
  // Estimate from actual duration strings in VIDEOS
  let estMins = 0;
  VIDEOS.forEach(v => {
    if (!state.completed[v.id]) return;
    const parts = v.duration.split(':').map(Number);
    if (parts.length === 3) estMins += parts[0]*60 + parts[1] + parts[2]/60;
    else if (parts.length === 2) estMins += parts[0] + parts[1]/60;
  });
  const estHours = (estMins / 60).toFixed(1);

  document.getElementById('sstat-done').textContent    = done;
  document.getElementById('sstat-pct').textContent     = pct + '%';
  document.getElementById('sstat-notes').textContent   = noteCount;
  document.getElementById('sstat-bk').textContent      = bkCount;
  document.getElementById('sstat-streak').textContent  = streak + (streak === 1 ? ' day' : ' days');
  document.getElementById('sstat-hours').textContent   = estHours + 'h';

  // Donut arc
  const circ = 2 * Math.PI * 36;
  const arc  = document.getElementById('donut-arc');
  if (arc) {
    arc.style.strokeDasharray  = `${circ * pct / 100} ${circ}`;
    arc.style.strokeDashoffset = '0';
  }

  renderSectionStats();
  renderHeatmap();
}

function renderSectionStats() {
  const c = document.getElementById('section-stats-list');
  if (!c) return;
  c.innerHTML = '';
  SECTIONS.forEach(sec => {
    const { done, total, pct } = getSectionProgress(sec);
    const row = document.createElement('div');
    row.className = 'ssec-row';
    row.innerHTML = `
      <div class="ssec-head">
        <span>${sec.icon} ${sec.name}</span>
        <span class="ssec-count" style="color:${sec.color}">${done}/${total}</span>
      </div>
      <div class="ssec-bar-bg"><div class="ssec-bar-fill" style="width:${pct}%;background:${sec.color}"></div></div>`;
    c.appendChild(row);
  });
}

function renderHeatmap() {
  const c = document.getElementById('heatmap-grid');
  if (!c) return;
  c.innerHTML = '';
  for (let i = 69; i >= 0; i--) {
    const d     = new Date(Date.now() - i * 86400000).toISOString().slice(0,10);
    const count = (state.studyLog || {})[d] || 0;
    const cell  = document.createElement('div');
    cell.className = 'hmap-cell';
    cell.title = `${d}: ${count} video${count !== 1 ? 's' : ''}`;
    cell.style.background =
      count === 0 ? 'rgba(255,255,255,0.05)' :
      count === 1 ? 'rgba(245,158,11,0.35)' :
      count === 2 ? 'rgba(245,158,11,0.62)' : '#f59e0b';
    c.appendChild(cell);
  }
  // Month labels
  const ml = document.getElementById('hmap-months');
  if (!ml) return;
  ml.innerHTML = '';
  let lastM = null;
  for (let i = 69; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const m = d.toLocaleString('default', { month: 'short' });
    if (m !== lastM) {
      const s = document.createElement('span');
      s.textContent = m;
      s.style.gridColumn = (70 - i) + '';
      ml.appendChild(s);
      lastM = m;
    }
  }
}

// ─── ALL NOTES MODAL ─────────────────────────────────────────────────────────
function openAllNotes() {
  document.getElementById('all-notes-modal').classList.add('open');
  renderAllNotes();
}
function closeAllNotes() { document.getElementById('all-notes-modal').classList.remove('open'); }

function renderAllNotes() {
  const c = document.getElementById('all-notes-list');
  if (!c) return;
  c.innerHTML = '';
  const entries = Object.entries(state.notes)
    .filter(([, v]) => v)
    .map(([k, v]) => ({ id: parseInt(k), note: v }));

  if (!entries.length) {
    c.innerHTML = `<div class="empty-notes"><div style="font-size:2.5rem">📝</div>
      <p>No notes yet.<br>Complete a video and jot something down!</p></div>`;
    return;
  }
  entries.forEach(({ id, note }) => {
    const v = VIDEOS[id], sec = getSectionForVideo(id);
    if (!v || !sec) return;
    const item = document.createElement('div');
    item.className = 'note-entry';
    item.innerHTML = `
      <div class="note-entry-header">
        <div>
          <span class="note-sec-tag" style="color:${sec.color}">${sec.icon} ${sec.name}</span>
          <div class="note-vid-title">${v.title.replace(/\|.*$/, '').trim()}</div>
        </div>
        <div class="note-entry-btns">
          <button onclick="copyNote(${id})" title="Copy">📋</button>
          <button onclick="closeAllNotes();openNote(${id})" title="Edit">✏️</button>
          <button onclick="deleteNote(${id})" title="Delete" class="del-btn">🗑️</button>
        </div>
      </div>
      <div class="note-text">${note.replace(/\n/g, '<br>')}</div>`;
    c.appendChild(item);
  });
}

function copyNote(id) {
  navigator.clipboard.writeText(state.notes[id] || '').then(() =>
    showToast('📋 Note copied!', 'success'));
}
function deleteNote(id) {
  delete state.notes[id];
  saveState(state);
  renderAllNotes();
  renderAll();
  showToast('🗑️ Note deleted.', 'success');
}

// ─── POMODORO TIMER ───────────────────────────────────────────────────────────
const POMO = { WORK: 25*60, BREAK: 5*60 };
let pomo = { mode: 'work', timeLeft: POMO.WORK, running: false, interval: null, sessions: 0 };

function togglePomodoro() {
  const w = document.getElementById('pomo-widget');
  if (w) w.classList.toggle('open');
}

function startPomo() {
  if (pomo.running) {
    clearInterval(pomo.interval);
    pomo.running = false;
    updatePomoBtn();
    return;
  }
  pomo.running = true;
  pomo.interval = setInterval(() => {
    pomo.timeLeft--;
    if (pomo.timeLeft <= 0) {
      clearInterval(pomo.interval);
      pomo.running = false;
      pomo.sessions++;
      if (pomo.mode === 'work') {
        pomo.mode = 'break'; pomo.timeLeft = POMO.BREAK;
        showToast('☕ Break time! 5 minutes.', 'success');
      } else {
        pomo.mode = 'work'; pomo.timeLeft = POMO.WORK;
        showToast('💪 Back to work! 25 minutes.', 'success');
      }
    }
    updatePomoDisplay();
    updatePomoBtn();
  }, 1000);
  updatePomoBtn();
}

function resetPomo() {
  clearInterval(pomo.interval);
  pomo.running = false; pomo.mode = 'work'; pomo.timeLeft = POMO.WORK;
  updatePomoDisplay(); updatePomoBtn();
}

function updatePomoDisplay() {
  const mm  = String(Math.floor(pomo.timeLeft/60)).padStart(2,'0');
  const ss  = String(pomo.timeLeft%60).padStart(2,'0');
  const el  = document.getElementById('pomo-time');
  const ml  = document.getElementById('pomo-mode-label');
  const arc = document.getElementById('pomo-arc');
  const se  = document.getElementById('pomo-sessions');
  if (el)  el.textContent = `${mm}:${ss}`;
  if (ml)  ml.textContent = pomo.mode === 'work' ? '🍅 Focus' : '☕ Break';
  if (se)  se.textContent = pomo.sessions;
  if (arc) {
    const total = pomo.mode === 'work' ? POMO.WORK : POMO.BREAK;
    const prog  = 1 - pomo.timeLeft / total;
    const circ  = 2 * Math.PI * 38;
    arc.style.strokeDasharray  = `${circ * prog} ${circ}`;
    arc.style.stroke = pomo.mode === 'work' ? '#f59e0b' : '#1dd1a1';
  }
}
function updatePomoBtn() {
  const b = document.getElementById('pomo-start-btn');
  if (b) b.textContent = pomo.running ? '⏸ Pause' : '▶ Start';
}

// ─── ZEN / FOCUS MODE ────────────────────────────────────────────────────────
function toggleZenMode() {
  zenMode = !zenMode;
  document.body.classList.toggle('zen-mode', zenMode);
  const btn = document.getElementById('zen-btn');
  if (btn) btn.classList.toggle('nav-icon-active', zenMode);
  showToast(zenMode ? '🎯 Focus Mode ON — hiding completed' : '👁 Focus Mode OFF', 'success');
  renderMain();
}

// ─── SHORTCUTS MODAL ─────────────────────────────────────────────────────────
function openShortcuts() { document.getElementById('shortcuts-modal').classList.add('open'); }
function closeShortcuts() { document.getElementById('shortcuts-modal').classList.remove('open'); }

// ─── SEARCH & FILTER ─────────────────────────────────────────────────────────
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderMain();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderMain();
  });
});

// ─── SIDEBAR TOGGLE ──────────────────────────────────────────────────────────
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  document.getElementById('app-layout').classList.toggle('sidebar-closed');
});

// ─── MODAL EVENTS ────────────────────────────────────────────────────────────
document.getElementById('modal-close').addEventListener('click', closeNote);
document.getElementById('modal-save').addEventListener('click', saveNote);
document.getElementById('modal-skip').addEventListener('click', closeNote);
document.getElementById('note-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('note-modal')) closeNote();
});
document.addEventListener('keydown', e => {
  const tag = document.activeElement?.tagName;
  const inInput = tag === 'INPUT' || tag === 'TEXTAREA';

  if (e.key === 'Escape') {
    closeNote(); closeStats(); closeAllNotes(); closeShortcuts(); closeGoalModal();
    document.getElementById('note-modal').classList.remove('open');
    return;
  }
  if (e.key === 'Enter' && e.ctrlKey && document.getElementById('note-modal').classList.contains('open')) {
    saveNote();
    return;
  }
  if (inInput) return;

  const keyMap = {
    '/': () => { e.preventDefault(); document.getElementById('search-input').focus(); },
    's': openStats,
    'n': openAllNotes,
    't': togglePomodoro,
    'z': toggleZenMode,
    'e': exportProgress,
    '?': openShortcuts,
    'h': openShortcuts,
  };
  if (keyMap[e.key]) keyMap[e.key]();
});

// ─── EXPORT / IMPORT WIRING ───────────────────────────────────────────────────
document.getElementById('btn-export').addEventListener('click', exportProgress);
document.getElementById('btn-import').addEventListener('click', () => {
  document.getElementById('import-file-input').click();
});
document.getElementById('import-file-input').addEventListener('change', importProgress);

// ─── INIT ────────────────────────────────────────────────────────────────────
updatePomoDisplay();
renderAll();
