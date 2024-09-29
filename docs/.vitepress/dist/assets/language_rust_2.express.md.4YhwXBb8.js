import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.DOEc3Y8C.js";const g=JSON.parse('{"title":"变量绑定","description":"","frontmatter":{},"headers":[],"relativePath":"language/rust/2.express.md","filePath":"language/rust/2.express.md"}'),p={name:"language/rust/2.express.md"};function l(h,s,e,k,d,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="变量绑定" tabindex="-1">变量绑定 <a class="header-anchor" href="#变量绑定" aria-label="Permalink to &quot;变量绑定&quot;">​</a></h1><p>使用 <em>let</em> 进行变量绑定（注意，不是赋值）。</p><p>在 Rust 中，使用 <code>let</code> 关键字进行变量绑定确实与传统的赋值操作有所不同。尽管在日常用语中，我们可能会互换使用“绑定”和“赋值”这两个词。要理解这两者之间的差异，我们需要深入了解它们的含义以及它们在 Rust 中是如何工作的。</p><p>使用 <code>let</code> 关键字创建一个新变量时，你实际上是在将一个名称（标识符）绑定到一个值或者数据结构上。这意味着这个名称现在与这个特定的值关联在一起。这个操作发生在变量首次被引入到作用域时。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p><strong>赋值</strong></p><p>赋值通常涉及更改已存在的变量的值。在大多数编程语言中，这通过使用 <code>=</code> 操作符来完成。但在 Rust 中，由于默认的不可变性，你需要显式地声明变量为可变的（<code>mut</code>）才能更改其值。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是一个赋值操作，将 y 的值更改为 15</span></span></code></pre></div><p>为什么说 <code>let</code> 是绑定而不是赋值：</p><p><strong>不可变性</strong>：Rust 默认的不可变性意味着，除非你显式地声明变量为可变的，否则你不能更改其值。这与许多其他语言不同，在这些语言中，变量可以在任何时候重新赋值。</p><p><strong>阴影</strong>：在 Rust 中，你可以使用相同的变量名重新绑定变量（即使用 <code>let</code> 关键字）。这称为变量阴影。这允许你使用相同的名称进行新的绑定，而不是在原始变量上进行赋值。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是一个新的绑定，而不是在原始 x 上的赋值</span></span></code></pre></div><p><strong>以下是我和 ChatGPT 4.0 的对话：</strong></p><hr><p><strong>我</strong>：我要是在写代码的时候写死了 <code>y = 11</code>，创建了一个不可变的变量，但是我需要更改 y 值，怎么处理这件事情？</p><p><strong>ChatGPT</strong>：</p><ol><li><p><strong>重新声明为可变</strong>：</p><p>你可以重新声明 <code>y</code> 为一个可变变量，并赋予其一个新的值。</p><p>当你重新声明一个变量（例如 <code>y</code>）时，你实际上是在创建一个新的变量绑定，这个新的绑定“阴影”了原始的绑定。这意味着新的绑定会覆盖旧的绑定，使其在后续代码中不再可直接访问。</p><p>考虑以下代码：</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mut</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>在这里：</p><p>首先，你创建了一个不可变的 <code>y</code> 绑定，其值为 11。然后，你创建了一个新的、可变的 <code>y</code> 绑定，其值为 22。这个新的绑定“阴影”了原始的 <code>y</code> 绑定。从这一点开始，当你引用 <code>y</code> 时，你实际上是引用值为 22 的可变绑定，而不是原始的值为 11 的绑定。原始的 <code>y</code> 绑定仍然存在于内存中（除非被优化掉），但你不能直接访问它，因为新的 <code>y</code> 绑定已经覆盖了它。</p><p>如果你不再使用原始的 <code>y</code> 绑定（或新的 <code>y</code> 绑定），它们最终会在它们的生命周期结束时被丢弃。</p></li><li><p><strong>使用阴影</strong>：</p><p>你可以使用相同的名称 <code>y</code> 创建一个新的变量绑定。这不是真正地更改原始 <code>y</code> 的值，而是创建了一个新的 <code>y</code> 绑定。这称为变量阴影。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是一个新的 y 绑定，它“阴影”了原始的 y</span></span></code></pre></div></li><li><p><strong>使用内部作用域</strong>：</p><p>你可以在一个新的作用域内重新绑定 <code>y</code>，这样原始的 <code>y</code> 在这个作用域外仍然保持不变。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 22</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 11</span></span></code></pre></div></li></ol><p><strong>我</strong>：什么是 Rust 的生命周期？</p><p><strong>ChatGPT</strong>：在 Rust 中，生命周期是一个非常重要的概念，它描述了引用或其他对象在内存中存在的时间段。生命周期确保 Rust 程序的内存安全性，特别是在涉及到引用时。</p><p>生命周期主要与引用有关，它们确保：</p><ol><li>引用总是有效的。</li><li>防止悬挂引用（即引用指向已经释放或无效的内存）。</li><li>防止数据竞争和其他并发相关的问题。</li></ol><p>以下是有关生命周期的一些核心概念：</p><ol><li><p><strong>每个引用都有一个生命周期</strong>：这是引用所指向的数据在内存中保持有效的时间段。</p></li><li><p><strong>隐式生命周期</strong>：在许多情况下，Rust 能够隐式地推断引用的生命周期，无需显式地标注。</p></li><li><p><strong>显式生命周期</strong>：在某些复杂的情况下，你可能需要显式地标注生命周期。这是通过使用生命周期注解来完成的，例如 <code>&#39;a</code>。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> longest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(s1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, s2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() &gt; s2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        s1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        s2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上述函数中，生命周期注解 <code>&#39;a</code> 指定了 <code>s1</code>、<code>s2</code> 和返回值都有相同的生命周期。</p></li></ol><ul><li><p><strong>结构体与生命周期</strong>：当你在结构体中存储引用时，你也需要使用生命周期注解。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Book</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>生命周期的约束</strong>：有时，你需要确保某个引用比其他引用存在更长的时间。你可以使用生命周期子类型来指定这些约束。</p></li><li><p><strong><code>&#39;static</code> 生命周期</strong>：这是 Rust 中最长的生命周期，表示引用的整个程序期间都有效。例如，字符串字面量就有 <code>&#39;static</code> 生命周期。</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li></ul><p>总的来说，生命周期是 Rust 中确保内存安全性的关键概念。</p><p>通过正确地使用生命周期，你可以避免许多常见的内存相关错误，如悬挂引用或数据竞争。</p><h4 id="表达式" tabindex="-1">表达式 <a class="header-anchor" href="#表达式" aria-label="Permalink to &quot;表达式&quot;">​</a></h4><p>几乎所有东西都是表达式（expressions）：会返回一个值（value）作为结果。</p><p><em>例外：变量绑定不是表达式</em></p><p>单位类型（unit）表示空，写作 <code>()</code>。</p><p>在 Rust 中，单位值 <code>()</code> 也称为 &quot;unit&quot;，它是一个特殊的类型，表示没有任何有意义的值。这可以看作是一个零元素的元组。</p><p>单位值 <code>()</code> 在 Rust 中有多种用途：</p><ol><li><p><strong>表示函数没有有意义的返回值</strong>：在 Rust 中，每个函数都有返回值，即使你没有明确指定。默认情况下，函数返回单位类型 <code>()</code>。例如：</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> do_nothing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 此函数没有返回任何有意义的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在 Rust 中，<code>fn do_nothing()</code> 定义了一个名为 <code>do_nothing</code> 的函数，该函数不接受任何参数，也不返回任何值。这个函数的主体为空，所以它什么都不做。</p></li></ol><p>需要注意：</p><ul><li>类型 <code>()</code> 只有一个可取的值：<code>()</code>。</li><li><code>()</code> 是默认的返回类型。</li></ul><p>例如：</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tuple_with_one_element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (s,);</span></span></code></pre></div><p>在这个例子中，<code>tuple_with_one_element</code> 是一个只包含一个元素 <code>s</code> 的元组。</p><p>可以在表达式后加分号 <code>;</code> 来舍弃它的值，这时它返回 <code>()</code>。因此，如果一个函数以分号结尾，它返回 <code>()</code>。</p><p>举个例子：</p><p>首先理解表达式和语句的区别：</p><ul><li><strong>表达式（Expression）</strong>：在 Rust 中，表达式是一段返回值的代码。例如，<code>5 + 6</code> 是一个表达式，它的值是 <code>11</code>。</li><li><strong>语句（Statement）</strong>：语句是执行某种操作但不返回值的代码。例如，<code>let x = 5;</code> 是一个语句，它不返回值。</li></ul><p>其次是分号的作用：</p><p><strong>在 Rust 中，如果你在表达式的末尾加上分号 <code>;</code>，那么这个表达式就变成了一个语句，它不再返回值。实际上，它返回了一个特殊的值，即单位值 <code>()</code>。</strong></p><p>函数返回值：</p><p><strong>在 Rust 的函数中，最后的表达式决定了函数的返回值。如果这个表达式后面没有分号，那么该表达式的值就是函数的返回值。如果你在函数的最后一个表达式后面加上分号，那么这个函数就不再返回该表达式的值，而是返回单位值 <code>()</code>。</strong></p><p>以下是一个例子来说明这个概念：</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个函数返回 i32 类型的值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> return_value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> i32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个函数没有明确的返回值，因此它返回单位值 ()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> no_return_value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在 <code>return_value</code> 函数中，最后的表达式 <code>5 + 6</code> 没有分号，所以它的值 <code>11</code> 是函数的返回值。而在 <code>no_return_value</code> 函数中，<code>5 + 6;</code> 后面有分号，所以它实际上返回了单位值 <code>()</code>。</p><p>总之，这段描述的意思是：在 Rust 中，你可以通过在表达式后加分号来舍弃它的值，并使其返回单位值 <code>()</code>。</p>`,50)]))}const E=i(p,[["render",l]]);export{g as __pageData,E as default};
