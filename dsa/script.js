    const phases = [
      {
        label: "Phase 1",
        title: "Foundation and linear thinking",
        detail: "Complexity, arrays, strings, two pointers, sliding windows, sorting, binary search, and STL fluency."
      },
      {
        label: "Phase 2",
        title: "Core data structures",
        detail: "Recursion, linked lists, stacks, queues, hashing, monotonic structures, heaps, intervals, and greedy basics."
      },
      {
        label: "Phase 3",
        title: "Trees, graphs, and dynamic programming",
        detail: "Tree traversals, BST logic, graph traversal, shortest paths, union-find, topological sort, and multi-dimensional DP."
      },
      {
        label: "Phase 4",
        title: "Advanced problem-solving",
        detail: "Tries, string algorithms, range query structures, bit manipulation, number theory, advanced greedy, and mixed hard patterns."
      }
    ];

    const roadmap = [
      {
        week: 1,
        phase: "Foundation",
        title: "Problem Solving Basics, C++ STL, Arrays, Strings",
        hours: 15,
        goal: "Build your base language and analytical habits so you can read a problem, estimate complexity, and write clean array and string code without hesitation.",
        leetcode: "By the end of week 1, you should solve very basic array and string Easy problems: linear search style tasks, max/min scans, frequency counting with small alphabets, palindrome checks, and simple string traversal.",
        topics: [
          {
            title: "Asymptotic analysis and constraints reading",
            time: "3h",
            detail: "Learn how input size determines the valid time complexity range before you even start coding.",
            bullets: [
              "Big-O, Big-Theta, amortized intuition, constant factor awareness",
              "Estimating whether O(n), O(n log n), O(n^2), or exponential is acceptable",
              "Space complexity, in-place thinking, and tradeoff between time and memory"
            ]
          },
          {
            title: "C++ STL for DSA work",
            time: "4h",
            detail: "Set up the standard tools you will use in almost every interview solution.",
            bullets: [
              "vector, string, pair, auto, references, iterators, range-based loops",
              "sort, reverse, min, max, accumulate, lower_bound, upper_bound basics",
              "Writing helper functions, passing by reference, and avoiding unnecessary copies"
            ]
          },
          {
            title: "Array fundamentals",
            time: "4h",
            detail: "Understand contiguous memory style thinking and index-based traversal patterns.",
            bullets: [
              "Forward and backward traversal, prefix and suffix intuition",
              "Subarray concept versus subset concept",
              "Running sum, max scan, count scan, and update-in-place patterns"
            ]
          },
          {
            title: "String fundamentals",
            time: "4h",
            detail: "Treat strings as indexed arrays with character-specific operations.",
            bullets: [
              "Character frequency, vowel or digit checks, lowercase or uppercase conversion",
              "Comparing strings, building strings, and reverse traversal",
              "Simple palindrome and anagram reasoning"
            ]
          }
        ]
      },
      {
        week: 2,
        phase: "Foundation",
        title: "Prefix Sums, Two Pointers, Sliding Window",
        hours: 16,
        goal: "Learn the first three pattern families that repeatedly appear in array and string medium problems.",
        leetcode: "By the end of week 2, you should solve Easy and lower-Medium problems involving fixed-window sums, longest valid window, pair finding in sorted arrays, and basic prefix-sum range queries.",
        topics: [
          {
            title: "Prefix sums and range logic",
            time: "4h",
            detail: "Use precomputed partial sums to answer repeated range queries efficiently.",
            bullets: [
              "1D prefix sums and inclusive or exclusive indexing",
              "Transforming subarray sum questions using prefix differences",
              "When prefix sums work and when ordering or negative values complicate the pattern"
            ]
          },
          {
            title: "Two pointers",
            time: "4h",
            detail: "Move two indices under a maintained relationship rather than restarting scans.",
            bullets: [
              "Opposite-end pointers for sorted arrays and palindrome-style checks",
              "Same-direction pointers for compaction, duplicate removal, partition logic",
              "Reasoning about why pointer movement does not miss answers"
            ]
          },
          {
            title: "Fixed-size sliding window",
            time: "4h",
            detail: "Maintain a running answer over a window of exact size k.",
            bullets: [
              "Window add and remove operations",
              "Moving average, max sum, count in a window, and rolling character counts",
              "Difference between recomputing and incremental updates"
            ]
          },
          {
            title: "Variable-size sliding window",
            time: "4h",
            detail: "Maintain a valid range and shrink only when the constraint is violated.",
            bullets: [
              "Longest substring or subarray under a constraint",
              "Frequency maps, distinct counts, and character replacement patterns",
              "Choosing when to expand, shrink, or record the answer"
            ]
          }
        ]
      },
      {
        week: 3,
        phase: "Foundation",
        title: "Sorting, Searching, Binary Search Patterns",
        hours: 15,
        goal: "Understand how ordering changes a problem and when binary search is valid on value space or answer space.",
        leetcode: "By the end of week 3, you should solve sorted-array search tasks, insertion position, first or last occurrence, rotated-array basics, and answer-space binary search for simple monotonic conditions.",
        topics: [
          {
            title: "Sorting as a preprocessing step",
            time: "4h",
            detail: "Learn when sorting reveals structure and makes brute force unnecessary.",
            bullets: [
              "sort on primitives and pairs with custom comparators",
              "How sorting enables two pointers, interval merging, and greedy selection",
              "Tradeoff: O(n log n) preprocessing for simpler later logic"
            ]
          },
          {
            title: "Classic binary search",
            time: "4h",
            detail: "Search for a target in monotonic indexed data.",
            bullets: [
              "Mid computation, boundaries, and loop invariants",
              "First true, last true, lower_bound and upper_bound style searches",
              "Common off-by-one mistakes and how to avoid them"
            ]
          },
          {
            title: "Binary search on answer",
            time: "4h",
            detail: "Search over a numerical answer range when a feasibility check is monotonic.",
            bullets: [
              "Turning optimization questions into yes or no checks",
              "Capacity, speed, distance, partition, and threshold style problems",
              "Writing a good check function in C++"
            ]
          },
          {
            title: "Searching in modified arrays",
            time: "3h",
            detail: "Apply binary search to non-plain sorted structures.",
            bullets: [
              "Rotated sorted arrays, mountain arrays conceptually, nearly sorted search ideas",
              "Handling duplicates carefully",
              "Knowing when binary search no longer applies cleanly"
            ]
          }
        ]
      },
      {
        week: 4,
        phase: "Core DS",
        title: "Recursion, Call Stack, Backtracking Basics",
        hours: 16,
        goal: "Develop recursive thinking so you can express repeated decision-making cleanly and understand the call stack instead of fearing it.",
        leetcode: "By the end of week 4, you should solve recursion-based Easy and Medium tasks like factorial or power variants, subsets, simple permutations, and path-building backtracking problems with clear choices.",
        topics: [
          {
            title: "Recursion fundamentals",
            time: "4h",
            detail: "Model a problem as the same problem on a smaller state.",
            bullets: [
              "Base case, recursive hypothesis, progress toward termination",
              "Stack frames, return values, and state restoration",
              "Tracing recursion trees by hand"
            ]
          },
          {
            title: "Recursive array and string problems",
            time: "3h",
            detail: "Use recursion for reversal, palindrome, subset choice, and divide-style traversal.",
            bullets: [
              "Index-driven recursion",
              "Choice-based recursion with include or exclude branching",
              "Comparing recursive and iterative versions"
            ]
          },
          {
            title: "Backtracking template",
            time: "5h",
            detail: "Build and undo decisions while exploring a search tree.",
            bullets: [
              "Path vector, current state, choose-explore-unchoose pattern",
              "Generating subsets, permutations, combinations",
              "Pruning invalid states early to reduce branching"
            ]
          },
          {
            title: "Complexity of recursive search",
            time: "4h",
            detail: "Estimate branching factor and depth so you know when recursion is still feasible.",
            bullets: [
              "Recursion tree size intuition",
              "Why backtracking can be exponential",
              "When memoization will later convert recursion to DP"
            ]
          }
        ]
      },
      {
        week: 5,
        phase: "Core DS",
        title: "Linked Lists, Stacks, Queues, Deques",
        hours: 16,
        goal: "Learn pointer-based structures and order-constrained containers that drive many interview simulations and traversal algorithms.",
        leetcode: "By the end of week 5, you should solve reverse linked list, middle node, cycle detection, stack validation, parentheses matching, queue simulation, and basic deque window tasks.",
        topics: [
          {
            title: "Singly and doubly linked lists",
            time: "5h",
            detail: "Stop treating linked lists as magical pointer puzzles and reduce them to careful next-pointer updates.",
            bullets: [
              "Traversal, insertion, deletion, head changes",
              "Fast and slow pointers, cycle detection, list midpoint",
              "In-place reversal and dummy-node techniques"
            ]
          },
          {
            title: "Stacks",
            time: "3h",
            detail: "Use LIFO structure for reversal, validation, parsing, and monotonic reasoning.",
            bullets: [
              "Parentheses and bracket matching",
              "Undo-style processing and expression traversal intuition",
              "Recognizing stack-friendly nearest-greater or nearest-smaller patterns"
            ]
          },
          {
            title: "Queues and BFS mindset",
            time: "4h",
            detail: "Use FIFO order for level-by-level processing and sequential scheduling.",
            bullets: [
              "Standard queue operations and simulation problems",
              "Queue as a frontier concept that will later power graph BFS",
              "Circular queue intuition and buffering logic"
            ]
          },
          {
            title: "Deque patterns",
            time: "4h",
            detail: "Use both ends efficiently when order and monotonicity matter.",
            bullets: [
              "Sliding window max or min intuition",
              "Pop from back to maintain decreasing or increasing candidates",
              "Why deque beats brute force for window extrema"
            ]
          }
        ]
      },
      {
        week: 6,
        phase: "Core DS",
        title: "Hashing, Sets, Maps, Frequency Tables, Monotonic Structures",
        hours: 17,
        goal: "Master constant-average-time lookup and the habit of storing just enough state to avoid repeated work.",
        leetcode: "By the end of week 6, you should solve two-sum variants, duplicate detection, grouping anagrams, longest consecutive sequence, frequency-based windows, and monotonic stack problems like next greater element or daily temperatures.",
        topics: [
          {
            title: "unordered_map and unordered_set",
            time: "4h",
            detail: "Use hashing to convert repeated searching into direct lookup.",
            bullets: [
              "Frequency counting, seen-state tracking, complement lookup",
              "Key design, collisions conceptually, and average-case thinking",
              "When ordered map versus unordered map matters"
            ]
          },
          {
            title: "Frequency-based problem design",
            time: "4h",
            detail: "Model the problem around counts rather than raw positions.",
            bullets: [
              "Anagrams, multisets, top frequencies, and mode-style reasoning",
              "Combining frequency maps with windows or prefix ideas",
              "Tracking distinct counts efficiently"
            ]
          },
          {
            title: "Monotonic stack",
            time: "5h",
            detail: "Maintain a stack that stays sorted by value so each element is pushed and popped at most once.",
            bullets: [
              "Next greater, next smaller, previous greater, previous smaller",
              "Stock span, histogram, temperature waiting time patterns",
              "Why the total complexity stays linear"
            ]
          },
          {
            title: "Monotonic queue and optimization windows",
            time: "4h",
            detail: "Maintain candidate answers for ranges without recomputing all elements.",
            bullets: [
              "Window max and min",
              "Range feasibility and DP optimization intuition",
              "Choosing between deque, heap, and balanced tree style solutions"
            ]
          }
        ]
      },
      {
        week: 7,
        phase: "Core DS",
        title: "Heaps, Priority Queues, Intervals, Greedy Introduction",
        hours: 16,
        goal: "Learn how to repeatedly extract the best candidate and how to reason about interval ordering and local optimal choices.",
        leetcode: "By the end of week 7, you should solve kth largest, top k frequent, merge intervals, meeting rooms, task scheduling basics, and simple greedy selection problems with sorted order.",
        topics: [
          {
            title: "priority_queue in C++",
            time: "4h",
            detail: "Use heaps for repeated min or max extraction and streaming problems.",
            bullets: [
              "Max heap versus min heap with custom comparator",
              "Top k elements, median intuition, running priorities",
              "When heap is better than sorting the entire input"
            ]
          },
          {
            title: "Interval patterns",
            time: "4h",
            detail: "Treat intervals as ordered segments that often require sort plus merge or sort plus scan.",
            bullets: [
              "Merge intervals, overlap detection, insertion, gap finding",
              "Open versus closed interval reasoning",
              "Room allocation and sweep-line intuition"
            ]
          },
          {
            title: "Greedy foundations",
            time: "4h",
            detail: "Make the best local choice only when you can justify that it preserves global optimality.",
            bullets: [
              "Earliest finish time, smallest feasible resource, or best ratio ideas",
              "Exchange argument intuition",
              "How to detect when greedy is unsafe"
            ]
          },
          {
            title: "Heap plus greedy combinations",
            time: "4h",
            detail: "Combine ordering and dynamic best-choice extraction.",
            bullets: [
              "Meeting rooms, CPU scheduling, task ordering, interval assignment",
              "Sort first, then process active candidates in a heap",
              "Recognizing event-driven processing"
            ]
          }
        ]
      },
      {
        week: 8,
        phase: "Trees",
        title: "Binary Trees, Traversals, BST Fundamentals",
        hours: 17,
        goal: "Shift from linear reasoning to hierarchical state propagation through recursive tree processing.",
        leetcode: "By the end of week 8, you should solve inorder, preorder, postorder traversal, tree height, tree equality, subtree basics, BST search, BST validation, and level order traversal problems.",
        topics: [
          {
            title: "Tree terminology and construction",
            time: "3h",
            detail: "Understand nodes, edges, height, depth, leaf, root, and parent-child relationships.",
            bullets: [
              "Representing trees with node pointers",
              "Recursive structure of binary trees",
              "Why trees often simplify to solving left and right subproblems"
            ]
          },
          {
            title: "Depth-first traversals",
            time: "5h",
            detail: "Use preorder, inorder, and postorder as different moments to process a node.",
            bullets: [
              "Recursive traversal templates",
              "Iterative traversal using stacks",
              "Which traversal exposes which property, especially for BSTs"
            ]
          },
          {
            title: "Breadth-first traversal",
            time: "4h",
            detail: "Process trees level by level using queues.",
            bullets: [
              "Level order traversal and level-size loops",
              "Left view, right view, and level aggregates",
              "Connecting BFS mindset from queue problems"
            ]
          },
          {
            title: "BST logic",
            time: "5h",
            detail: "Use ordered tree structure to search, insert, validate, and reason with ranges.",
            bullets: [
              "Search and insertion paths",
              "Inorder traversal gives sorted order",
              "Validation using low-high bounds or inorder monotonicity"
            ]
          }
        ]
      },
      {
        week: 9,
        phase: "Trees",
        title: "Advanced Tree Patterns, LCA, Tree DP Intuition",
        hours: 17,
        goal: "Learn to return richer information from subtrees and solve nontrivial tree questions with one DFS.",
        leetcode: "By the end of week 9, you should solve diameter, balanced tree, max path style reasoning, lowest common ancestor, path sum variations, and serialize-style conceptual tree tasks.",
        topics: [
          {
            title: "Postorder problem solving",
            time: "4h",
            detail: "Compute answers from children upward when parent logic depends on subtree information.",
            bullets: [
              "Height-balanced checks",
              "Diameter through a node",
              "Returning compound state from recursion"
            ]
          },
          {
            title: "Path-based tree questions",
            time: "4h",
            detail: "Track path sums, ancestor relationships, and path existence conditions.",
            bullets: [
              "Root-to-leaf versus any-to-any path distinctions",
              "Prefix sum on trees intuition",
              "Backtracking state in tree DFS"
            ]
          },
          {
            title: "Lowest common ancestor",
            time: "4h",
            detail: "Identify shared ancestry through recursive search or BST ordering.",
            bullets: [
              "General binary tree LCA",
              "BST-optimized LCA",
              "Why LCA logic mirrors search convergence"
            ]
          },
          {
            title: "Tree DP introduction",
            time: "5h",
            detail: "Model each node with states that depend on its children.",
            bullets: [
              "Include or exclude node patterns",
              "Robber-on-tree style state design",
              "Thinking in per-node states without cycles"
            ]
          }
        ]
      },
      {
        week: 10,
        phase: "Graphs",
        title: "Graphs, Representation, DFS, BFS, Connected Components",
        hours: 18,
        goal: "Extend traversal thinking from trees to general graphs with cycles, visited state, and disconnected components.",
        leetcode: "By the end of week 10, you should solve number of islands, flood fill, graph traversal, connected components, shortest path in unweighted grids, and BFS level distance problems.",
        topics: [
          {
            title: "Graph representation",
            time: "4h",
            detail: "Build adjacency lists and understand directed, undirected, weighted, and unweighted graphs.",
            bullets: [
              "Edge list, adjacency matrix, adjacency list tradeoffs",
              "Node indexing and visited arrays",
              "Grid as an implicit graph"
            ]
          },
          {
            title: "DFS on graphs",
            time: "5h",
            detail: "Traverse deeply while guarding against revisits and cycles.",
            bullets: [
              "Connected components",
              "Cycle detection basics in undirected graphs",
              "Recursive versus iterative DFS"
            ]
          },
          {
            title: "BFS on graphs and grids",
            time: "5h",
            detail: "Use BFS when the problem asks for minimum steps in an unweighted setting.",
            bullets: [
              "Multi-source BFS",
              "Level-order distance calculation",
              "Grid neighbors, bounds checking, and visited timing"
            ]
          },
          {
            title: "Traversal patterns in interviews",
            time: "4h",
            detail: "Recognize when a question is secretly graph traversal under different words.",
            bullets: [
              "Rooms, courses, islands, states, transformations, dependencies",
              "Explicit graph versus implicit state graph",
              "Choosing DFS or BFS based on output requirement"
            ]
          }
        ]
      },
      {
        week: 11,
        phase: "Graphs",
        title: "Topological Sort, Union-Find, Shortest Paths, MST",
        hours: 19,
        goal: "Handle graph problems that go beyond plain traversal and require ordering, merging, or weighted path logic.",
        leetcode: "By the end of week 11, you should solve course schedule, redundant connection, number of provinces, network delay style questions, and minimum spanning tree basics.",
        topics: [
          {
            title: "Topological sorting",
            time: "4h",
            detail: "Order directed acyclic graph nodes so dependencies appear before dependents.",
            bullets: [
              "Indegree and Kahn's algorithm",
              "DFS topological sort conceptually",
              "Cycle detection in directed graphs"
            ]
          },
          {
            title: "Disjoint Set Union (Union-Find)",
            time: "5h",
            detail: "Efficiently merge components and query whether nodes belong to the same group.",
            bullets: [
              "Parent array, path compression, union by rank or size",
              "Dynamic connectivity and edge processing",
              "Grouping accounts, provinces, redundant edges"
            ]
          },
          {
            title: "Shortest path algorithms",
            time: "5h",
            detail: "Choose the right method depending on weight rules.",
            bullets: [
              "BFS for unweighted shortest path",
              "Dijkstra for non-negative weighted graphs using a min heap",
              "Why Bellman-Ford exists conceptually and when negatives matter"
            ]
          },
          {
            title: "Minimum spanning tree",
            time: "5h",
            detail: "Connect all nodes with minimum total cost.",
            bullets: [
              "Kruskal with DSU",
              "Prim with min heap intuition",
              "Difference between shortest path tree and MST"
            ]
          }
        ]
      },
      {
        week: 12,
        phase: "Advanced Search",
        title: "Backtracking Advanced, State Space Search, Bitmasking Intro",
        hours: 17,
        goal: "Push recursive search into harder combinatorial problems and begin reducing state with bit representations.",
        leetcode: "By the end of week 12, you should solve combination sum style problems, N-Queens style backtracking intuition, subset-state generation, and basic bitmask enumeration tasks.",
        topics: [
          {
            title: "Constraint-heavy backtracking",
            time: "5h",
            detail: "Layer validity rules into your recursive search so the tree prunes early.",
            bullets: [
              "Combinations with duplicates",
              "Board search and row-column-diagonal constraints",
              "Ordering candidates to reduce branching"
            ]
          },
          {
            title: "State encoding",
            time: "4h",
            detail: "Compact problem state into arrays, sets, or integers for faster checks.",
            bullets: [
              "Visited arrays versus hash sets",
              "Encoding selections as bitmasks",
              "Memoization key design intuition"
            ]
          },
          {
            title: "Bitmask basics",
            time: "4h",
            detail: "Represent subsets and toggles using bits.",
            bullets: [
              "Set, clear, toggle, test bits",
              "Enumerating all subsets",
              "Using masks for chosen-element states"
            ]
          },
          {
            title: "BFS on abstract state spaces",
            time: "4h",
            detail: "Treat game, lock, word transformation, or move systems as implicit graphs.",
            bullets: [
              "State generation and transition edges",
              "Visited-state deduplication",
              "Shortest moves in configuration spaces"
            ]
          }
        ]
      },
      {
        week: 13,
        phase: "DP",
        title: "Dynamic Programming Foundations",
        hours: 18,
        goal: "Learn to convert repeated subproblems into stored results instead of recomputing them recursively.",
        leetcode: "By the end of week 13, you should solve climbing stairs, house robber, coin change basics, decode ways style tasks, and standard 1D DP problems with memoization and tabulation.",
        topics: [
          {
            title: "DP mindset",
            time: "4h",
            detail: "Recognize overlapping subproblems and optimal substructure rather than memorizing random formulas.",
            bullets: [
              "State definition: what exactly does dp[i] or dp[i][j] mean?",
              "Transition relation and base cases",
              "Memoization versus bottom-up tabulation"
            ]
          },
          {
            title: "1D DP",
            time: "5h",
            detail: "Start with linear sequences where each state depends on a small previous neighborhood.",
            bullets: [
              "Fibonacci family, climbing stairs, min cost climb",
              "House robber and take-or-skip transitions",
              "Space optimization with rolling variables"
            ]
          },
          {
            title: "Decision DP",
            time: "4h",
            detail: "Solve by choosing between options at each step.",
            bullets: [
              "Include or exclude element patterns",
              "Coin change count or min problems",
              "Ways versus minimum versus maximum objective types"
            ]
          },
          {
            title: "DP debugging practice",
            time: "5h",
            detail: "Learn how to inspect wrong transitions and invalid state meanings.",
            bullets: [
              "Printing states on small examples",
              "Checking base cases and index shifts",
              "Comparing recursive thinking with table filling"
            ]
          }
        ]
      },
      {
        week: 14,
        phase: "DP",
        title: "2D DP, Knapsack, LIS, LCS, Grid DP",
        hours: 19,
        goal: "Handle multi-parameter state and sequence alignment patterns that dominate many classic interview DP questions.",
        leetcode: "By the end of week 14, you should solve unique paths, minimum path sum, 0-1 knapsack style questions, longest common subsequence, partition equal subset sum, and LIS core problems.",
        topics: [
          {
            title: "Grid DP",
            time: "4h",
            detail: "Move through grids where each cell depends on previous reachable cells.",
            bullets: [
              "Unique paths and obstacles",
              "Minimum path cost",
              "Transition choices and boundary initialization"
            ]
          },
          {
            title: "Knapsack family",
            time: "5h",
            detail: "Model capacity-constrained choosing problems.",
            bullets: [
              "0-1 knapsack state and transition",
              "Subset sum and partition-style transformations",
              "Difference between 0-1 and unbounded variants"
            ]
          },
          {
            title: "Sequence DP",
            time: "5h",
            detail: "Compare or build sequences based on previous prefixes.",
            bullets: [
              "Longest common subsequence",
              "Edit distance intuition",
              "Longest increasing subsequence using DP and binary-search optimization conceptually"
            ]
          },
          {
            title: "State dimension design",
            time: "5h",
            detail: "Choose the smallest state that still contains enough information.",
            bullets: [
              "Index plus capacity, index plus previous choice, row plus column style states",
              "Avoiding redundant dimensions",
              "When memoization tables become too large"
            ]
          }
        ]
      },
      {
        week: 15,
        phase: "DP",
        title: "Advanced DP, Interval DP, Tree DP, Digit DP Awareness",
        hours: 18,
        goal: "Expose yourself to harder state design so tough DP questions stop feeling alien.",
        leetcode: "By the end of week 15, you should handle more difficult DP mediums and understand the structure of interval merge-cost problems, tree-based include-exclude DP, and constrained counting DP.",
        topics: [
          {
            title: "Interval DP",
            time: "4h",
            detail: "Solve subarray or substring ranges where dp[l][r] depends on smaller intervals.",
            bullets: [
              "Burst balloons style reasoning",
              "Palindromic subsequence and partition perspectives",
              "Choosing the last operation rather than the first"
            ]
          },
          {
            title: "Tree DP refinement",
            time: "4h",
            detail: "Return multiple states from each node and combine children carefully.",
            bullets: [
              "Rob tree and independent-set style logic",
              "Subtree aggregation and rerooting awareness",
              "How acyclic structure simplifies dependencies"
            ]
          },
          {
            title: "DP optimization awareness",
            time: "5h",
            detail: "Know that some problems can be improved but do not force every optimization immediately.",
            bullets: [
              "Rolling arrays, monotonic queue optimization, bitset hints",
              "LIS O(n log n) improvement idea",
              "Tradeoff between clarity and optimized complexity"
            ]
          },
          {
            title: "Digit DP and constrained counting awareness",
            time: "5h",
            detail: "Understand the shape of DP over digits, tight bounds, and leading zero state even if you do not master it immediately.",
            bullets: [
              "Position, tight, started, and aggregate state design",
              "Counting numbers under constraints",
              "Why these problems are advanced but still systematic"
            ]
          }
        ]
      },
      {
        week: 16,
        phase: "Strings",
        title: "Tries, String Hashing, Pattern Matching, Advanced String Work",
        hours: 17,
        goal: "Move beyond plain strings and learn indexed prefix structures and string comparison accelerators.",
        leetcode: "By the end of week 16, you should solve prefix dictionary problems, wildcard or word search style trie tasks, substring grouping tasks, and some advanced string processing questions with structured preprocessing.",
        topics: [
          {
            title: "Trie data structure",
            time: "5h",
            detail: "Use prefix trees when repeated prefix matching dominates the problem.",
            bullets: [
              "Node structure, insert, search, startsWith",
              "Word dictionary and search variants",
              "Memory tradeoffs and alphabet assumptions"
            ]
          },
          {
            title: "String hashing awareness",
            time: "4h",
            detail: "Speed up substring comparison using rolling hash concepts.",
            bullets: [
              "Prefix hashes and substring hash extraction",
              "Collision awareness",
              "When hashing is practical in contests and advanced interviews"
            ]
          },
          {
            title: "Pattern matching concepts",
            time: "4h",
            detail: "Understand efficient string search rather than only brute-force matching.",
            bullets: [
              "KMP prefix function concept",
              "Why failure links help avoid rechecking",
              "Z-function awareness for pattern and prefix tasks"
            ]
          },
          {
            title: "Palindrome and substring patterns",
            time: "4h",
            detail: "Handle center expansion and substring structure efficiently.",
            bullets: [
              "Longest palindromic substring intuition",
              "Center expansion versus DP",
              "Distinct substring and repeated pattern awareness"
            ]
          }
        ]
      },
      {
        week: 17,
        phase: "Range Structures",
        title: "Fenwick Tree, Segment Tree, Sparse Table, Range Queries",
        hours: 18,
        goal: "Learn data structures that maintain or query aggregate information on intervals efficiently.",
        leetcode: "By the end of week 17, you should understand and implement range sum update/query structures, solve mutable range-sum problems, and recognize when offline or tree-based range techniques are needed.",
        topics: [
          {
            title: "Range query problem framing",
            time: "3h",
            detail: "Decide whether queries are static, dynamic, point update, or range update problems.",
            bullets: [
              "Prefix sum versus Fenwick versus segment tree",
              "Online versus offline processing",
              "Update frequency as the deciding factor"
            ]
          },
          {
            title: "Fenwick tree (Binary Indexed Tree)",
            time: "4h",
            detail: "Use bit-based indexing to support prefix sums and point updates efficiently.",
            bullets: [
              "Lowbit operation and tree structure intuition",
              "Prefix sum query and point update",
              "Coordinate compression awareness for large values"
            ]
          },
          {
            title: "Segment tree",
            time: "7h",
            detail: "Store aggregate information for intervals in a divide-and-conquer tree.",
            bullets: [
              "Build, query, and update operations",
              "Range minimum, maximum, sum, and custom merge logic",
              "Lazy propagation awareness for range updates"
            ]
          },
          {
            title: "Sparse table awareness",
            time: "4h",
            detail: "Use preprocessing for immutable range idempotent queries.",
            bullets: [
              "Range minimum query concept",
              "Powers-of-two decomposition",
              "Why immutable arrays make stronger preprocessing possible"
            ]
          }
        ]
      },
      {
        week: 18,
        phase: "Advanced Logic",
        title: "Bit Manipulation, Math, Number Theory, Combinatorics",
        hours: 16,
        goal: "Sharpen the low-level logic and mathematical shortcuts that make many tricky interview questions shorter and faster.",
        leetcode: "By the end of week 18, you should solve XOR questions, power-of-two checks, subset parity problems, gcd or lcm tasks, modular arithmetic basics, and common combinatorial counting setups.",
        topics: [
          {
            title: "Bit manipulation patterns",
            time: "5h",
            detail: "Use bits as compressed state and for arithmetic properties.",
            bullets: [
              "XOR identities, single number, missing number, parity",
              "Masks, shifts, subset iteration, and bit count",
              "Why bit tricks often replace extra memory"
            ]
          },
          {
            title: "GCD, LCM, primes, factorization",
            time: "4h",
            detail: "Use fundamental number theory tools that appear surprisingly often.",
            bullets: [
              "Euclidean algorithm",
              "Prime testing and sieve awareness",
              "Divisor counting and factor decomposition basics"
            ]
          },
          {
            title: "Modular arithmetic",
            time: "3h",
            detail: "Work safely with large numbers in counting problems.",
            bullets: [
              "Modulo properties for add, subtract, multiply",
              "Fast exponentiation concept",
              "Mod inverse awareness for advanced counting"
            ]
          },
          {
            title: "Combinatorics intuition",
            time: "4h",
            detail: "Count arrangements and choices without brute force.",
            bullets: [
              "Permutations versus combinations",
              "Stars and bars awareness",
              "Counting by complement and inclusion-exclusion intuition"
            ]
          }
        ]
      },
      {
        week: 19,
        phase: "Advanced Logic",
        title: "Greedy Advanced, Sweep Line, Ordered Sets, Offline Techniques",
        hours: 17,
        goal: "Handle problems where the answer emerges from ordered events, local irreversible decisions, or preprocessing plus deferred query handling.",
        leetcode: "By the end of week 19, you should solve advanced interval scheduling, skyline-style event sweeps conceptually, ordered-set window problems, and some offline query or sorting-based optimizations.",
        topics: [
          {
            title: "Advanced greedy reasoning",
            time: "5h",
            detail: "Justify local choices with stronger arguments rather than intuition alone.",
            bullets: [
              "Exchange arguments and invariant maintenance",
              "Minimizing removals, maximizing disjoint selections, resource allocation",
              "When sorting order determines correctness"
            ]
          },
          {
            title: "Sweep line",
            time: "4h",
            detail: "Convert geometry or interval overlap problems into ordered event processing.",
            bullets: [
              "Start and end events",
              "Maintaining active sets or counts",
              "Skyline, overlap counts, meeting room style extensions"
            ]
          },
          {
            title: "Ordered containers and balanced structure awareness",
            time: "4h",
            detail: "Use ordered state when relative position matters more than plain presence.",
            bullets: [
              "set, multiset, map and order statistics awareness",
              "Sliding window median intuition",
              "Nearest value and predecessor-successor queries"
            ]
          },
          {
            title: "Offline processing",
            time: "4h",
            detail: "Reorder work to make hard online tasks simpler.",
            bullets: [
              "Sort queries by threshold or endpoint",
              "Mo's algorithm awareness",
              "Combining DSU, Fenwick, or sorting with deferred answers"
            ]
          }
        ]
      },
      {
        week: 20,
        phase: "Integration",
        title: "Mixed Revision, Timed Practice, Hard Pattern Recognition",
        hours: 18,
        goal: "Integrate the full syllabus into interview performance: faster pattern recognition, cleaner explanations, and better time management.",
        leetcode: "By the end of week 20, you should be comfortable across most Easy problems and a wide set of Medium problems, with structured exposure to Hard patterns in graphs, DP, strings, and range-query questions.",
        topics: [
          {
            title: "Mixed-set diagnosis",
            time: "4h",
            detail: "Train the skill of identifying the dominant pattern within the first few minutes.",
            bullets: [
              "Ask: array, graph, tree, DP, greedy, or data structure maintenance?",
              "Map problem statements to known templates quickly",
              "Distinguish between brute force baseline and interview-grade solution"
            ]
          },
          {
            title: "Timed interview simulation",
            time: "5h",
            detail: "Practice under realistic time pressure with explanation included.",
            bullets: [
              "5-minute analysis, 20-minute coding, 5-minute testing rhythm",
              "Explain invariant, data structure choice, and complexity clearly",
              "Recover when the first approach fails"
            ]
          },
          {
            title: "Weak-area loops",
            time: "4h",
            detail: "Use your error log to revisit the patterns that still feel unstable.",
            bullets: [
              "Re-solve failed problems without notes",
              "Rewrite templates from memory",
              "Create a one-page cheat sheet of recurring cues"
            ]
          },
          {
            title: "Stretch topics and hard exposure",
            time: "5h",
            detail: "Touch harder patterns so future growth is incremental, not intimidating.",
            bullets: [
              "Advanced graph plus DP combinations",
              "Segment tree plus lazy propagation practice",
              "String algorithms, bitmask DP, and state compression review"
            ]
          }
        ]
      }
    ];

    const recommendations = {
      1: [
        { name: "Find Numbers with Even Number of Digits", note: "Warm-up traversal and counting logic." },
        { name: "Maximum Subarray", note: "Basic scan intuition and running answer tracking." },
        { name: "Valid Palindrome", note: "String traversal and cleanup logic." },
        { name: "Valid Anagram", note: "Frequency counting on strings." },
        { name: "Longest Common Prefix", note: "Simple string comparison across a list." }
      ],
      2: [
        { name: "Running Sum of 1d Array", note: "Direct prefix-sum warm-up." },
        { name: "Range Sum Query - Immutable", note: "Classic prefix sum application." },
        { name: "Two Sum II - Input Array Is Sorted", note: "Opposite-end two pointers." },
        { name: "Best Time to Buy and Sell Stock", note: "Prefix-min style and scan reasoning." },
        { name: "Longest Substring Without Repeating Characters", note: "Variable-size sliding window core pattern." }
      ],
      3: [
        { name: "Binary Search", note: "Pure binary search template." },
        { name: "Search Insert Position", note: "Boundary handling and insertion index." },
        { name: "First Bad Version", note: "First true binary search pattern." },
        { name: "Search in Rotated Sorted Array", note: "Modified array binary search." },
        { name: "Koko Eating Bananas", note: "Binary search on answer space." }
      ],
      4: [
        { name: "Subsets", note: "Include-exclude recursion template." },
        { name: "Permutations", note: "Choice tree with visited state." },
        { name: "Combination Sum", note: "Backtracking with sum constraints." },
        { name: "Generate Parentheses", note: "State validity pruning." },
        { name: "Letter Combinations of a Phone Number", note: "Backtracking over branching choices." }
      ],
      5: [
        { name: "Reverse Linked List", note: "Core pointer update exercise." },
        { name: "Linked List Cycle", note: "Fast and slow pointer pattern." },
        { name: "Middle of the Linked List", note: "Pointer speed reasoning." },
        { name: "Valid Parentheses", note: "Canonical stack problem." },
        { name: "Implement Queue using Stacks", note: "Order simulation with basic structures." }
      ],
      6: [
        { name: "Two Sum", note: "Hash map complement lookup." },
        { name: "Group Anagrams", note: "Frequency or sorted-key grouping." },
        { name: "Contains Duplicate", note: "Set-based existence check." },
        { name: "Daily Temperatures", note: "Monotonic stack pattern." },
        { name: "Longest Consecutive Sequence", note: "Hash set and sequence-start logic." }
      ],
      7: [
        { name: "Kth Largest Element in an Array", note: "Heap selection pattern." },
        { name: "Top K Frequent Elements", note: "Heap plus frequency map." },
        { name: "Merge Intervals", note: "Sort and merge interval family." },
        { name: "Meeting Rooms II", note: "Intervals with heap of active rooms." },
        { name: "Task Scheduler", note: "Greedy scheduling with frequencies." }
      ],
      8: [
        { name: "Binary Tree Inorder Traversal", note: "DFS traversal foundation." },
        { name: "Maximum Depth of Binary Tree", note: "Classic height recursion." },
        { name: "Same Tree", note: "Recursive structure matching." },
        { name: "Binary Tree Level Order Traversal", note: "Queue-based BFS on trees." },
        { name: "Validate Binary Search Tree", note: "BST range or inorder property." }
      ],
      9: [
        { name: "Diameter of Binary Tree", note: "Postorder aggregation." },
        { name: "Balanced Binary Tree", note: "Return state from children." },
        { name: "Path Sum II", note: "Path construction with backtracking." },
        { name: "Lowest Common Ancestor of a Binary Tree", note: "Classic recursive convergence." },
        { name: "Binary Tree Maximum Path Sum", note: "Advanced subtree contribution logic." }
      ],
      10: [
        { name: "Number of Islands", note: "DFS or BFS connected components." },
        { name: "Flood Fill", note: "Grid traversal basics." },
        { name: "Rotting Oranges", note: "Multi-source BFS." },
        { name: "Clone Graph", note: "Graph traversal plus visited mapping." },
        { name: "Walls and Gates", note: "Distance propagation by BFS." }
      ],
      11: [
        { name: "Course Schedule", note: "Cycle detection and topological sort." },
        { name: "Course Schedule II", note: "Constructing topo order." },
        { name: "Redundant Connection", note: "Union-Find application." },
        { name: "Network Delay Time", note: "Dijkstra on weighted graph." },
        { name: "Min Cost to Connect All Points", note: "Minimum spanning tree practice." }
      ],
      12: [
        { name: "Combination Sum II", note: "Backtracking with duplicates and pruning." },
        { name: "N-Queens", note: "Constraint-heavy search tree." },
        { name: "Word Search", note: "DFS state-space search on a board." },
        { name: "Open the Lock", note: "BFS on implicit states." },
        { name: "Subsets II", note: "Bitmask or duplicate-aware backtracking." }
      ],
      13: [
        { name: "Climbing Stairs", note: "Starter 1D DP state." },
        { name: "Min Cost Climbing Stairs", note: "Transition cost accumulation." },
        { name: "House Robber", note: "Take-or-skip DP." },
        { name: "Coin Change", note: "Minimum count DP." },
        { name: "Decode Ways", note: "State validity in string DP." }
      ],
      14: [
        { name: "Unique Paths", note: "Grid DP base problem." },
        { name: "Minimum Path Sum", note: "Optimization over grid states." },
        { name: "Partition Equal Subset Sum", note: "Knapsack transformation." },
        { name: "Longest Common Subsequence", note: "Classic 2D sequence DP." },
        { name: "Longest Increasing Subsequence", note: "Sequence DP with advanced optimization awareness." }
      ],
      15: [
        { name: "Burst Balloons", note: "Interval DP structure." },
        { name: "House Robber III", note: "Tree DP states." },
        { name: "Palindromic Substrings", note: "Substring state reasoning." },
        { name: "Palindrome Partitioning II", note: "Partition plus DP." },
        { name: "Count Number of Special Integers", note: "Digit DP exposure." }
      ],
      16: [
        { name: "Implement Trie (Prefix Tree)", note: "Trie insert and search template." },
        { name: "Design Add and Search Words Data Structure", note: "Trie with branching search." },
        { name: "Word Search II", note: "Trie plus DFS on board." },
        { name: "Longest Palindromic Substring", note: "String center-expansion classic." },
        { name: "Find the Index of the First Occurrence in a String", note: "Pattern matching entry point." }
      ],
      17: [
        { name: "Range Sum Query - Mutable", note: "Segment tree or Fenwick tree core use case." },
        { name: "Count of Smaller Numbers After Self", note: "Fenwick or segment tree with compression." },
        { name: "The Skyline Problem", note: "Advanced sweep and ordered structure exposure." },
        { name: "My Calendar I", note: "Ordered interval maintenance awareness." },
        { name: "Queries on a Permutation With Key", note: "Fenwick tree style thinking." }
      ],
      18: [
        { name: "Single Number", note: "XOR identity basics." },
        { name: "Number of 1 Bits", note: "Bit counting and masks." },
        { name: "Power of Two", note: "Bitwise property check." },
        { name: "Greatest Common Divisor of Strings", note: "GCD-style reasoning in a string setting." },
        { name: "Pow(x, n)", note: "Fast exponentiation and recursion." }
      ],
      19: [
        { name: "Non-overlapping Intervals", note: "Greedy interval removal logic." },
        { name: "Insert Interval", note: "Ordered interval processing." },
        { name: "Minimum Number of Arrows to Burst Balloons", note: "Greedy by finishing point." },
        { name: "Car Pooling", note: "Sweep line and event accumulation." },
        { name: "Sliding Window Median", note: "Ordered maintenance with balanced structure awareness." }
      ],
      20: [
        { name: "Word Ladder", note: "Mixed BFS pattern with transformation graph." },
        { name: "Cheapest Flights Within K Stops", note: "Graph shortest path with constraint reasoning." },
        { name: "Regular Expression Matching", note: "Hard DP pattern recognition." },
        { name: "Trapping Rain Water", note: "Integrated pattern recall: pointers, prefix, or stack." },
        { name: "Largest Rectangle in Histogram", note: "Monotonic stack mastery check." }
      ]
    };

    const heroMetricsEl = document.getElementById("hero-metrics");
    const phaseListEl = document.getElementById("phase-list");
    const weekGridEl = document.getElementById("week-grid");
    const navToggleEl = document.getElementById("nav-toggle");
    const navLinksEl = document.getElementById("nav-links");
    const progressFillEl = document.getElementById("progress-fill");
    const totalHoursEl = document.getElementById("sidebar-total-hours");
    const totalWeeksEl = document.getElementById("sidebar-total-weeks");
    const masterPillsEl = document.getElementById("master-pills");
    const progressLabelStartEl = document.getElementById("progress-label-start");
    const progressLabelEndEl = document.getElementById("progress-label-end");
    const completedWeeksCountEl = document.getElementById("completed-weeks-count");
    const completedHoursCountEl = document.getElementById("completed-hours-count");
    const progressCalendarEl = document.getElementById("progress-calendar");
    const calendarActiveDaysEl = document.getElementById("calendar-active-days");
    const calendarLastSavedEl = document.getElementById("calendar-last-saved");
    const exportProgressBtn = document.getElementById("export-progress");
    const importProgressBtn = document.getElementById("import-progress");
    const importProgressInput = document.getElementById("import-progress-input");
    const weekDetailHeadingEl = document.getElementById("week-detail-heading");
    const weekDetailGoalEl = document.getElementById("week-detail-goal");
    const weekDetailMetricsEl = document.getElementById("week-detail-metrics");
    const weekDetailPanelTitleEl = document.getElementById("week-detail-panel-title");
    const weekDetailLeetcodeEl = document.getElementById("week-detail-leetcode");
    const weekDetailPhaseListEl = document.getElementById("week-detail-phase-list");
    const prevWeekLinkEl = document.getElementById("prev-week-link");
    const nextWeekLinkEl = document.getElementById("next-week-link");
    const weekDetailSubheadingEl = document.getElementById("week-detail-subheading");
    const weekTopicProgressEl = document.getElementById("week-topic-progress");
    const weekBulletProgressEl = document.getElementById("week-bullet-progress");
    const weekHoursLabelEl = document.getElementById("week-hours-label");
    const weekPhaseLabelEl = document.getElementById("week-phase-label");
    const weekResourceGridEl = document.getElementById("week-resource-grid");
    const weekRecommendationGridEl = document.getElementById("week-recommendation-grid");
    const weekDetailTopicsEl = document.getElementById("week-detail-topics");

    const STORAGE_KEY = "dsa-atlas-progress-v2";
    const CALENDAR_DAYS = 140;

    const totalHours = roadmap.reduce((sum, item) => sum + item.hours, 0);
    const totalTopics = roadmap.reduce((sum, item) => sum + item.topics.length, 0);
    const totalSubtopics = roadmap.reduce((sum, item) => (
      sum + item.topics.reduce((topicSum, topic) => topicSum + topic.bullets.length, 0)
    ), 0);
    const totalTrackableItems = totalTopics + totalSubtopics;

    const heroMetrics = [
      {
        value: `${roadmap.length}`,
        label: "Weeks",
        copy: "A full beginner-to-advanced path, paced for consistency."
      },
      {
        value: `${totalHours}h`,
        label: "Estimated Study",
        copy: "Planned concept time, implementation time, and problem-solving time."
      },
      {
        value: `${totalTopics}+`,
        label: "Detailed Blocks",
        copy: "Every week is broken into study units with sub-topics."
      },
      {
        value: "C++",
        label: "Primary Language",
        copy: "Templates, STL, recursion, graphs, DP, and range structures."
      }
    ];

    heroMetricsEl.innerHTML = heroMetrics.map(metric => `
      <article class="metric">
        <strong>${metric.value}</strong>
        <span><b>${metric.label}</b><br>${metric.copy}</span>
      </article>
    `).join("");

    phaseListEl.innerHTML = phases.map(phase => `
      <article class="phase-item">
        <span>${phase.label}</span>
        <div>
          <strong>${phase.title}</strong>
          <small>${phase.detail}</small>
        </div>
      </article>
    `).join("");

    const masterTopics = [
      "Arrays & Strings",
      "Pointers & Windows",
      "Linked Lists",
      "Stacks & Queues",
      "Hashing",
      "Trees",
      "Graphs",
      "Heaps",
      "Greedy",
      "Dynamic Programming",
      "Tries",
      "Segment Trees"
    ];

    masterPillsEl.innerHTML = masterTopics.map(topic => `<div class="pill">${topic}</div>`).join("");

    totalWeeksEl.textContent = `${roadmap.length} weeks`;
    totalHoursEl.textContent = `${totalHours} hours of focused study blocks across concept learning, C++ implementation, and targeted practice.`;

    const defaultProgressState = () => ({
      completedTopics: {},
      completedBullets: {},
      activity: {},
      updatedAt: null
    });

    const getTopicKey = (week, topicIndex) => `${week}-${topicIndex}`;
    const getBulletKey = (week, topicIndex, bulletIndex) => `${week}-${topicIndex}-${bulletIndex}`;

    const getTodayKey = () => {
      const now = new Date();
      const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
      return local.toISOString().slice(0, 10);
    };

    const formatDateLabel = (value) => {
      if (!value) {
        return "No data";
      }

      const date = new Date(`${value}T00:00:00`);
      return new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(date);
    };

    const normalizeProgressState = (raw) => {
      const base = defaultProgressState();
      const state = raw && typeof raw === "object" ? raw : {};
      const completedTopics = state.completedTopics && typeof state.completedTopics === "object" ? state.completedTopics : {};
      const completedBullets = state.completedBullets && typeof state.completedBullets === "object" ? state.completedBullets : {};
      const completedWeeks = state.completedWeeks && typeof state.completedWeeks === "object" ? state.completedWeeks : {};
      const activity = state.activity && typeof state.activity === "object" ? state.activity : {};

      roadmap.forEach((item) => {
        item.topics.forEach((topic, topicIndex) => {
          const topicKey = getTopicKey(item.week, topicIndex);
          const topicEntry = completedTopics[topicKey];

          if (topicEntry && typeof topicEntry === "object" && topicEntry.completed === true) {
            base.completedTopics[topicKey] = {
              completed: true,
              date: typeof topicEntry.date === "string" ? topicEntry.date : getTodayKey()
            };
          }

          topic.bullets.forEach((_, bulletIndex) => {
            const bulletKey = getBulletKey(item.week, topicIndex, bulletIndex);
            const bulletEntry = completedBullets[bulletKey];

            if (bulletEntry && typeof bulletEntry === "object" && bulletEntry.completed === true) {
              base.completedBullets[bulletKey] = {
                completed: true,
                date: typeof bulletEntry.date === "string" ? bulletEntry.date : getTodayKey()
              };
            }
          });
        });

        const legacyWeekEntry = completedWeeks[item.week];
        if (legacyWeekEntry && typeof legacyWeekEntry === "object" && legacyWeekEntry.completed === true) {
          const legacyDate = typeof legacyWeekEntry.date === "string" ? legacyWeekEntry.date : getTodayKey();
          item.topics.forEach((topic, topicIndex) => {
            const topicKey = getTopicKey(item.week, topicIndex);
            base.completedTopics[topicKey] = base.completedTopics[topicKey] || { completed: true, date: legacyDate };
            topic.bullets.forEach((_, bulletIndex) => {
              const bulletKey = getBulletKey(item.week, topicIndex, bulletIndex);
              base.completedBullets[bulletKey] = base.completedBullets[bulletKey] || { completed: true, date: legacyDate };
            });
          });
        }
      });

      Object.entries(activity).forEach(([date, count]) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(Number(count)) && Number(count) > 0) {
          base.activity[date] = Math.max(1, Math.floor(Number(count)));
        }
      });

      base.updatedAt = typeof state.updatedAt === "string" ? state.updatedAt : null;
      return base;
    };

    const loadProgressState = () => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        return saved ? normalizeProgressState(JSON.parse(saved)) : defaultProgressState();
      } catch (error) {
        return defaultProgressState();
      }
    };

    let progressState = loadProgressState();

    const saveProgressState = () => {
      progressState.updatedAt = new Date().toISOString();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
    };

    const isTopicComplete = (week, topicIndex) => Boolean(progressState.completedTopics[getTopicKey(week, topicIndex)]?.completed);
    const isBulletComplete = (week, topicIndex, bulletIndex) => Boolean(progressState.completedBullets[getBulletKey(week, topicIndex, bulletIndex)]?.completed);
    const getCompletedTopicCount = () => Object.keys(progressState.completedTopics).length;
    const getCompletedSubtopicCount = () => Object.keys(progressState.completedBullets).length;
    const getWeekTopicCount = (week) => roadmap.find(item => item.week === week)?.topics.length || 0;
    const getWeekCompletedTopicCount = (week) => {
      const item = roadmap.find(entry => entry.week === week);
      return item ? item.topics.filter((_, topicIndex) => isTopicComplete(week, topicIndex)).length : 0;
    };
    const getWeekSubtopicStats = (week) => {
      const item = roadmap.find(entry => entry.week === week);
      if (!item) {
        return { done: 0, total: 0 };
      }

      const total = item.topics.reduce((sum, topic) => sum + topic.bullets.length, 0);
      const done = item.topics.reduce((sum, topic, topicIndex) => (
        sum + topic.bullets.filter((_, bulletIndex) => isBulletComplete(week, topicIndex, bulletIndex)).length
      ), 0);

      return { done, total };
    };

    const changeActivityCount = (date, delta) => {
      if (!date || !delta) {
        return;
      }

      const next = (progressState.activity[date] || 0) + delta;
      if (next > 0) {
        progressState.activity[date] = next;
      } else {
        delete progressState.activity[date];
      }
    };

    const setCompletionState = (collectionName, key, nextCompleted) => {
      const collection = progressState[collectionName];
      const currentEntry = collection[key];

      if (nextCompleted) {
        if (currentEntry?.completed) {
          return;
        }

        const todayKey = getTodayKey();
        collection[key] = {
          completed: true,
          date: todayKey
        };
        changeActivityCount(todayKey, 1);
        return;
      }

      if (!currentEntry?.completed) {
        return;
      }

      delete collection[key];
      changeActivityCount(currentEntry.date, -1);
    };

    const renderCalendar = () => {
      const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - (CALENDAR_DAYS - 1));
      const dayOffset = startDate.getDay();
      const cells = [];

      for (let i = 0; i < dayOffset; i += 1) {
        cells.push(`<div class="calendar-day" aria-hidden="true"></div>`);
      }

      for (let i = 0; i < CALENDAR_DAYS; i += 1) {
        const current = new Date(startDate);
        current.setDate(startDate.getDate() + i);
        const local = new Date(current.getTime() - current.getTimezoneOffset() * 60000);
        const key = local.toISOString().slice(0, 10);
        const count = progressState.activity[key] || 0;
        const level = count >= 4 ? 4 : count;
        const title = count > 0 ? `${count} completion${count > 1 ? "s" : ""} on ${formatDateLabel(key)}` : `No completions on ${formatDateLabel(key)}`;
        cells.push(`<div class="calendar-day level-${level}" title="${title}" aria-label="${title}"></div>`);
      }

      progressCalendarEl.innerHTML = cells.join("");

      const activityDates = Object.keys(progressState.activity).filter(date => progressState.activity[date] > 0);
      calendarActiveDaysEl.textContent = `${activityDates.length}`;

      const latestDate = activityDates.sort().at(-1);
      calendarLastSavedEl.textContent = latestDate ? formatDateLabel(latestDate) : "No data";
    };

    const renderProgressSummary = () => {
      const completedTopicsCount = getCompletedTopicCount();
      const completedSubtopicsCount = getCompletedSubtopicCount();
      const completedItems = completedTopicsCount + completedSubtopicsCount;
      const percent = totalTrackableItems ? (completedItems / totalTrackableItems) * 100 : 0;

      completedWeeksCountEl.textContent = `${completedTopicsCount}/${totalTopics}`;
      completedHoursCountEl.textContent = `${completedSubtopicsCount}/${totalSubtopics}`;
      progressLabelStartEl.textContent = `${completedItems} done`;
      progressLabelEndEl.textContent = `${totalTrackableItems} total`;
      progressFillEl.style.width = `${percent}%`;
    };

    const syncProgressUI = () => {
      document.querySelectorAll(".week-card").forEach((card) => {
        const week = Number(card.dataset.week);
        const note = card.querySelector(".week-status-note");
        const completedTopics = getWeekCompletedTopicCount(week);
        const totalWeekTopics = getWeekTopicCount(week);
        const subtopicStats = getWeekSubtopicStats(week);
        const isComplete = totalWeekTopics > 0 && completedTopics === totalWeekTopics;

        card.classList.toggle("is-complete", isComplete);
        if (note) {
          note.textContent = `${completedTopics}/${totalWeekTopics} topics complete • ${subtopicStats.done}/${subtopicStats.total} sub-topics complete`;
        }
      });

      document.querySelectorAll(".topic-card").forEach((card) => {
        const week = Number(card.dataset.week);
        const topicIndex = Number(card.dataset.topicIndex);
        const topicKey = getTopicKey(week, topicIndex);
        const isComplete = Boolean(progressState.completedTopics[topicKey]?.completed);
        const button = card.querySelector(".topic-complete-toggle");
        const note = card.querySelector(".topic-status-note");
        const totalBullets = Number(card.dataset.totalBullets);
        const doneBullets = roadmap[week - 1].topics[topicIndex].bullets.filter((_, bulletIndex) => (
          isBulletComplete(week, topicIndex, bulletIndex)
        )).length;
        const completionDate = progressState.completedTopics[topicKey]?.date;

        card.classList.toggle("is-complete", isComplete);
        if (button) {
          button.classList.toggle("is-complete", isComplete);
          button.setAttribute("aria-pressed", String(isComplete));
          button.textContent = isComplete ? "Topic completed" : "Mark topic complete";
        }

        if (note) {
          note.textContent = isComplete && completionDate
            ? `Saved on ${formatDateLabel(completionDate)} • ${doneBullets}/${totalBullets} sub-topics done`
            : `${doneBullets}/${totalBullets} sub-topics done`;
        }
      });

      document.querySelectorAll(".bullet-item").forEach((item) => {
        const week = Number(item.dataset.week);
        const topicIndex = Number(item.dataset.topicIndex);
        const bulletIndex = Number(item.dataset.bulletIndex);
        const isComplete = isBulletComplete(week, topicIndex, bulletIndex);
        const button = item.querySelector(".bullet-toggle");

        item.classList.toggle("is-complete", isComplete);
        if (button) {
          button.setAttribute("aria-pressed", String(isComplete));
          button.setAttribute("aria-label", isComplete ? "Mark sub-topic incomplete" : "Mark sub-topic complete");
        }
      });
    };

    const renderProgressState = () => {
      renderProgressSummary();
      renderCalendar();
      syncProgressUI();
    };

    weekGridEl.innerHTML = roadmap.map(item => `
      <article class="week-card" id="week-${item.week}" data-week="${item.week}">
        <div class="week-index">
          <strong>${item.week}</strong>
          <span>${item.phase}</span>
        </div>
        <div class="week-body">
          <div class="week-head">
            <div>
              <h3>Week ${item.week} · ${item.title}</h3>
              <div class="week-meta">
                <span class="tag">${item.hours} hours</span>
                <span class="tag">${item.topics.length} topic blocks</span>
                <span class="tag">${item.phase}</span>
                <span class="tag tag-complete">Trackable</span>
              </div>
              <p class="week-desc">${item.goal}</p>
            </div>
            <div class="week-status">
              <span class="week-status-note">0/${item.topics.length} topics complete</span>
            </div>
          </div>
          <p class="leetcode-lens"><strong>LeetCode target:</strong> ${item.leetcode}</p>
          <div class="recommendation-shell">
            <h4>Recommended LeetCode Set</h4>
            <div class="recommendation-grid">
              ${(recommendations[item.week] || []).map(problem => `
                <article class="recommendation-item">
                  <strong>${problem.name}</strong>
                  <span>${problem.note}</span>
                </article>
              `).join("")}
            </div>
          </div>
          <div class="topic-grid">
            ${item.topics.map((topic, topicIndex) => `
              <article class="topic-card" data-week="${item.week}" data-topic-index="${topicIndex}" data-total-bullets="${topic.bullets.length}">
                <div class="topic-topline">
                  <strong>${topic.title}</strong>
                  <span class="topic-time">${topic.time}</span>
                </div>
                <p>${topic.detail}</p>
                <ul class="bullet-list">
                  ${topic.bullets.map((point, bulletIndex) => `
                    <li class="bullet-item" data-week="${item.week}" data-topic-index="${topicIndex}" data-bullet-index="${bulletIndex}">
                      <button class="bullet-toggle" type="button" data-bullet-key="${getBulletKey(item.week, topicIndex, bulletIndex)}" aria-pressed="false" aria-label="Mark sub-topic complete"></button>
                      <span>${point}</span>
                    </li>
                  `).join("")}
                </ul>
                <div class="topic-progress">
                  <button class="complete-toggle topic-complete-toggle" type="button" data-topic-key="${getTopicKey(item.week, topicIndex)}" aria-pressed="false">Mark topic complete</button>
                  <span class="topic-status-note">0/${topic.bullets.length} sub-topics done</span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </article>
    `).join("");

    const cards = [...document.querySelectorAll(".week-card")];
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.12 });

    cards.forEach(card => revealObserver.observe(card));

    weekGridEl.addEventListener("click", (event) => {
      const topicButton = event.target.closest(".topic-complete-toggle");
      if (topicButton) {
        const topicKey = topicButton.dataset.topicKey;
        const isComplete = Boolean(progressState.completedTopics[topicKey]?.completed);
        setCompletionState("completedTopics", topicKey, !isComplete);
        saveProgressState();
        renderProgressState();
        return;
      }

      const bulletButton = event.target.closest(".bullet-toggle");
      if (!bulletButton) {
        return;
      }

      const bulletKey = bulletButton.dataset.bulletKey;
      const isComplete = Boolean(progressState.completedBullets[bulletKey]?.completed);
      setCompletionState("completedBullets", bulletKey, !isComplete);
      saveProgressState();
      renderProgressState();
    });

    exportProgressBtn.addEventListener("click", () => {
      const payload = {
        app: "DSA Atlas",
        version: 2,
        exportedAt: new Date().toISOString(),
        progress: progressState
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      link.href = url;
      link.download = `dsa-atlas-progress-${stamp}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });

    importProgressBtn.addEventListener("click", () => {
      importProgressInput.click();
    });

    importProgressInput.addEventListener("change", async (event) => {
      const [file] = event.target.files || [];
      if (!file) {
        return;
      }

      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const imported = normalizeProgressState(parsed.progress || parsed);
        progressState = imported;
        saveProgressState();
        renderProgressState();
      } catch (error) {
        window.alert("Invalid progress file. Please import a JSON file exported from this page.");
      } finally {
        event.target.value = "";
      }
    });

    navToggleEl.addEventListener("click", () => {
      const isOpen = navLinksEl.classList.toggle("is-open");
      navToggleEl.setAttribute("aria-expanded", String(isOpen));
    });

    navLinksEl.addEventListener("click", (event) => {
      if (window.innerWidth > 900 || !event.target.closest("a")) {
        return;
      }

      navLinksEl.classList.remove("is-open");
      navToggleEl.setAttribute("aria-expanded", "false");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        navLinksEl.classList.remove("is-open");
        navToggleEl.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("load", () => {
      renderProgressState();
    });
