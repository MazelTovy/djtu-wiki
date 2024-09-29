import{_ as a,c as e,a0 as n,o as t}from"./chunks/framework.DOEc3Y8C.js";const g=JSON.parse('{"title":"Iterator","description":"","frontmatter":{},"headers":[],"relativePath":"language/rust/12.iterator.md","filePath":"language/rust/12.iterator.md"}'),l={name:"language/rust/12.iterator.md"};function p(i,s,o,c,r,d){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="iterator" tabindex="-1">Iterator <a class="header-anchor" href="#iterator" aria-label="Permalink to &quot;Iterator&quot;">​</a></h1><p>迭代器在 Rust 中是一个非常重要和强大的概念。迭代器允许程序员在集合上执行一系列的操作，而不需要明确地循环遍历每个元素。</p><p><strong>迭代器的定义</strong></p><p>迭代器是一个处理序列的对象。迭代器模式允许你对一个序列进行某种计算，而无需了解或暴露该序列的内部结构。</p><p><strong>创建迭代器</strong> 大多数的集合类型，例如 Vec, HashMap, 和 HashSet, 都有一个 iter 方法，这个方法返回一个引用该集合的元素的迭代器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let v = vec![1, 2, 3];</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>let mut iter = v.iter();</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>assert_eq!(Some(&amp;1), iter.next());</span></span>
<span class="line"><span>assert_eq!(Some(&amp;2), iter.next());</span></span>
<span class="line"><span>assert_eq!(Some(&amp;3), iter.next());</span></span>
<span class="line"><span>assert_eq!(None, iter.next());</span></span></code></pre></div><p><strong>迭代器方法</strong></p><p>迭代器有许多有用的方法，这些方法可以调用来执行不同的操作：</p><p>map: 对每个元素执行某个操作。 filter: 基于某个条件筛选元素。 collect: 将迭代器转化为其他的集合类型。 count: 计算元素的数量。 next: 获取迭代器的下一个元素。 等等...</p><p><strong>消费迭代器</strong></p><p>迭代器是惰性的，意思是它们不会立即执行。为了获取迭代器的结果，你需要消费它。这可以通过多种方式做到，例如使用 collect 方法或简单地用 for 循环遍历它。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let v = vec![1, 2, 3];</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>// 使用for循环消费迭代器</span></span>
<span class="line"><span>for val in v.iter() {</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, val);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>迭代器的适配性</strong></p><p>迭代器是可适配的，意味着你可以链式地调用多个迭代器方法。这使得在集合上执行复杂操作变得非常简洁。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let v = vec![1, 2, 3, 4, 5];</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>let even_squares: Vec&lt;_&gt; = v.iter()</span></span>
<span class="line"><span>                            .map(|x| x * x)</span></span>
<span class="line"><span>                            .filter(|&amp;x| x % 2 == 0)</span></span>
<span class="line"><span>                            .collect();</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>println!(&quot;{:?}&quot;, even_squares);  // [4, 16]</span></span></code></pre></div><p><strong>迭代器与所有权</strong></p><ol><li><strong>基本的迭代与所有权</strong>： <ul><li>使用 <code>iter()</code> 方法获得的是数据的不可变引用，这样你可以安全地多次并发地读取数据，但不能修改它。</li><li>如果你想遍历并修改数据，你应该使用 <code>iter_mut()</code>，它返回数据的可变引用。但是，在这种情况下，你不能再次借用原始数据，直到迭代器的生命周期结束。</li></ul></li><li><strong>所有权与迭代器的消费</strong>： <ul><li>有些迭代器方法是“消费性”的，这意味着一旦调用，迭代器就不能再被使用。例如，<code>collect</code> 方法就会消耗迭代器，并将元素收集到一个新的容器中。</li><li><code>into_iter</code> 方法是从一个集合创建迭代器的方法，这个方法会获取集合的所有权，因此返回的迭代器产生的项目将是集合的值本身，而不是引用。</li></ul></li><li><strong>方法链与所有权</strong>： <ul><li>Rust 的迭代器允许方法链，如 <code>iter().map(...).filter(...).collect()</code>。这样的链式调用在处理所有权和生命周期时非常明确，确保在整个链中的每一步都是安全的。</li></ul></li><li><strong>迭代器的适配器与所有权</strong>： <ul><li>迭代器有许多“适配器”方法，如 <code>map</code> 和 <code>filter</code>。这些方法通常接受一个函数或闭包，并可能改变迭代器的行为或其产生的值。在使用这些适配器时，闭包中捕获的变量的所有权和生命周期都是有效的，Rust 的编译器会确保这一点。</li></ul></li><li><strong>迭代器中的值的所有权</strong>： <ul><li>当迭代器产生的值是对象的所有权时（例如使用 <code>into_iter</code>），一旦这些值被迭代出来，原始集合就不能再使用了。这确保了在迭代过程中不会违反 Rust 的所有权规则。</li></ul></li></ol><p><strong>迭代器的返回</strong></p><p>迭代器是不能返回值的，迭代器在Rust中是惰性的，并且是消耗性的。当你从迭代器中请求一个元素（例如，通过调用<code>next()</code>方法）时，迭代器会前进到下一个元素，你不能再次“回到”之前的元素。因此，一旦迭代器被完全消耗（例如，通过一个循环），你不能再从中获取元素。</p><p>但是，有几种方式可以再次使用或&quot;重置&quot;迭代器：</p><ol><li><strong>创建一个新的迭代器实例</strong>：如果迭代器是由某种集合（如<code>Vec</code>或<code>String</code>）创建的，你可以简单地再次调用相应的<code>iter</code>方法来获得一个新的迭代器。</li><li><strong>克隆迭代器</strong>：如果迭代器实现了<code>Clone</code> trait，并且它的元素也是克隆的，你可以在开始迭代之前克隆它。这样，你可以保留原始的迭代器并在需要时使用克隆的迭代器。</li><li><strong>使用peekable</strong>：<code>peekable</code>方法返回一个特殊类型的迭代器，它允许你查看下一个元素而不消耗它。这对于某些用例很有用，但并不完全等同于&quot;重置&quot;迭代器。</li><li><strong>使用collect将迭代器转化为集合</strong>：如果你知道你可能需要多次遍历数据，你可以考虑将其收集到<code>Vec</code>或其他集合中。然后，你可以多次迭代这个集合，每次都获得一个新的迭代器。</li></ol><p>要注意的是，不是所有的迭代器都可以轻易地重新获得或克隆。例如，从文件或网络流中读取的迭代器可能不能重置，除非你重新打开文件或重新连接。因此，在设计使用迭代器的代码时，考虑迭代器的消耗性质是很重要的。</p><p><strong>迭代器的类型转换操作</strong></p><p>迭代器提供了一系列的适配器方法，许多这些方法都可以看作是类型转换操作。它们接收一个迭代器并返回一个新的，产生不同类型的值或以不同的方式操作值的迭代器。以下是一些常用的迭代器适配器方法和它们如何进行类型转换：</p><ol><li><p><strong>map</strong>:</p><ul><li><code>map</code> 方法接受一个函数，该函数处理迭代器产生的每个元素，并将其转换为一个新的类型。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3];</span></span>
<span class="line"><span>let squared: Vec&lt;_&gt; = numbers.iter().map(|&amp;x| x * x).collect();</span></span></code></pre></div></li><li><p><strong>filter</strong>:</p><ul><li><code>filter</code> 方法返回一个新的迭代器，只包含使给定谓词为真的元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let even: Vec&lt;_&gt; = numbers.iter().filter(|&amp;&amp;x| x % 2 == 0).collect();</span></span></code></pre></div></li><li><p><strong>flat_map</strong>:</p><ul><li><code>flat_map</code> 用于将每个元素转换为另一个迭代器，然后将这些迭代器的内容平坦化为一个单一的连续迭代器。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let words = vec![&quot;hello&quot;, &quot;world&quot;];</span></span>
<span class="line"><span>let characters: Vec&lt;_&gt; = words.iter().flat_map(|&amp;word| word.chars()).collect();</span></span></code></pre></div></li><li><p><strong>enumerate</strong>:</p><ul><li><code>enumerate</code> 为每个元素提供一个计数器，返回一个元组，其中第一个元素是计数器，第二个元素是原始迭代器的值。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let colors = vec![&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;];</span></span>
<span class="line"><span>for (index, color) in colors.iter().enumerate() {</span></span>
<span class="line"><span>    println!(&quot;Color {}: {}&quot;, index, color);</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>zip</strong>:</p><ul><li><code>zip</code> 方法将两个迭代器合并为一个，产生一个元组，其中第一个元素来自第一个迭代器，第二个元素来自第二个迭代器。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let names = vec![&quot;Alice&quot;, &quot;Bob&quot;];</span></span>
<span class="line"><span>let ages = vec![25, 30];</span></span>
<span class="line"><span>let combined: Vec&lt;_&gt; = names.iter().zip(ages.iter()).collect();</span></span></code></pre></div></li><li><p><strong>collect</strong>:</p><ul><li>虽然 <code>collect</code> 不直接改变每个元素的类型，但它将迭代器转换为集合类型，如 <code>Vec</code>, <code>HashSet</code>, <code>HashMap</code> 等。</li></ul></li></ol><p><strong>迭代器适配器</strong></p><p>迭代器适配器是Rust中的一种强大工具，允许你修改或转换迭代器的行为。这些适配器提供了一种方法，用于操作或处理一个迭代器的元素，然后返回一个新的迭代器。这样，你可以链式地应用多个适配器，形成一个复杂的操作序列。</p><p>以下是一些常用的迭代器适配器：</p><ol><li><p><strong>map</strong>:</p><ul><li>转换每个元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3];</span></span>
<span class="line"><span>let doubled: Vec&lt;_&gt; = numbers.iter().map(|&amp;x| x * 2).collect();</span></span></code></pre></div></li><li><p><strong>filter</strong>:</p><ul><li>仅保留满足某个条件的元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let even: Vec&lt;_&gt; = numbers.iter().filter(|&amp;&amp;x| x % 2 == 0).collect();</span></span></code></pre></div></li><li><p><strong>flat_map</strong>:</p><ul><li>转换每个元素为一个迭代器，然后将这些迭代器的内容合并到一个连续的迭代器中。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let words = vec![&quot;hello&quot;, &quot;world&quot;];</span></span>
<span class="line"><span>let letters: Vec&lt;_&gt; = words.iter().flat_map(|&amp;word| word.chars()).collect();</span></span></code></pre></div></li><li><p><strong>count</strong>:</p><ul><li>计算元素的数量。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3];</span></span>
<span class="line"><span>let total = numbers.iter().count();</span></span></code></pre></div></li><li><p><strong>fold</strong>:</p><ul><li>累积所有元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3];</span></span>
<span class="line"><span>let sum = numbers.iter().fold(0, |acc, &amp;x| acc + x);</span></span></code></pre></div></li><li><p><strong>zip</strong>:</p><ul><li>合并两个迭代器。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let names = vec![&quot;Alice&quot;, &quot;Bob&quot;];</span></span>
<span class="line"><span>let ages = vec![25, 30];</span></span>
<span class="line"><span>let combined: Vec&lt;_&gt; = names.iter().zip(ages.iter()).collect();</span></span></code></pre></div></li><li><p><strong>skip</strong> 和 <strong>take</strong>:</p><ul><li>跳过前N个元素或仅取前N个元素。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let numbers = vec![1, 2, 3, 4, 5];</span></span>
<span class="line"><span>let last_three: Vec&lt;_&gt; = numbers.iter().skip(2).collect();</span></span></code></pre></div></li><li><p><strong>peekable</strong>:</p><ul><li>允许预览下一个元素而不消费它。</li></ul></li><li><p><strong>chain</strong>:</p><ul><li>连接两个迭代器。</li></ul></li></ol><p>\\</p>`,30)]))}const h=a(l,[["render",p]]);export{g as __pageData,h as default};
