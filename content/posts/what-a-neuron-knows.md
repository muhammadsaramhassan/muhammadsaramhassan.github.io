---
title: "What a neuron knows, and what it takes to prove it"
dek: "A short, practical tour of linear probes, causal interventions, and the quiet case for taking ablations more seriously than feature-attribution maps."
date: "2026-04-18"
tags: ["Interpretability"]
readTime: 14
featured: true
pinned: false
---

The standard story goes like this: you train a model, you look at which inputs activate a particular neuron most strongly, and you call the neuron a "dog detector" or a "syntax node" or whatever pattern fits your imagination. Then you publish the figure, the reviewers nod, and the field moves on.

I find this unsatisfying, and the dissatisfaction is worth unpacking: it points at a real methodological gap.

## What we mean by "knows"

When we say a neuron "knows" something, we usually mean one of two very different things:

1. **Correlation**: the neuron activates when the concept is present in the input.
2. **Causation**: suppressing or manipulating the neuron changes the model's behavior with respect to that concept.

Most interpretability papers are quietly about (1) when they should be about (2). The gap between correlation and causation is where most of the interesting, difficult work lives.

<div style={{margin: '2.5em 0', padding: '28px 24px 18px', background: 'rgba(253,248,236,0.9)', border: '1px solid rgba(42,26,14,0.12)', borderRadius: '3px'}}>
  <svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', display: 'block'}}>
    <rect x="12" y="14" width="176" height="88" rx="2" fill="none" stroke="#7a1f2b" strokeWidth="1.5" strokeDasharray="5 3"/>
    <text x="100" y="40" textAnchor="middle" fill="#7a1f2b" fontSize="9" letterSpacing="2.5" fontFamily="monospace">CORRELATION</text>
    <text x="100" y="62" textAnchor="middle" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">neuron fires when</text>
    <text x="100" y="80" textAnchor="middle" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">concept is present</text>
    <line x1="192" y1="58" x2="230" y2="58" stroke="#b8860b" strokeWidth="1" strokeDasharray="3 2"/>
    <polygon points="227,53 237,58 227,63" fill="#b8860b"/>
    <text x="280" y="48" textAnchor="middle" fill="#b8860b" fontSize="8.5" letterSpacing="1.5" fontFamily="monospace">THE INTERESTING</text>
    <text x="280" y="62" textAnchor="middle" fill="#b8860b" fontSize="8.5" letterSpacing="1.5" fontFamily="monospace">WORK LIVES </text>   <text x="280" y="76" textAnchor="middle" fill="#b8860b" fontSize="8.5" letterSpacing="1.5" fontFamily="monospace">HERE </text>
    <line x1="324" y1="58" x2="362" y2="58" stroke="#b8860b" strokeWidth="1" strokeDasharray="3 2"/>
    <polygon points="359,53 369,58 359,63" fill="#b8860b"/>
    <rect x="372" y="14" width="176" height="88" rx="2" fill="none" stroke="#b8860b" strokeWidth="1.5"/>
    <text x="460" y="40" textAnchor="middle" fill="#b8860b" fontSize="9" letterSpacing="2.5" fontFamily="monospace">CAUSATION</text>
    <text x="460" y="62" textAnchor="middle" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">manipulating neuron</text>
    <text x="460" y="80" textAnchor="middle" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">changes behavior</text>
    <text x="100" y="122" textAnchor="middle" fill="#8b7558" fontSize="8.5" letterSpacing="1" fontFamily="monospace">MOST PAPERS STOP HERE</text>
    <text x="460" y="122" textAnchor="middle" fill="#8b7558" fontSize="8.5" letterSpacing="1" fontFamily="monospace">INTERESTING PAPERS REACH HERE</text>
  </svg>
</div>

## Linear probes: useful, but limited

A linear probe is the workhorse of interpretability. You take a residual stream or an MLP output, train a linear classifier on top of it, and check whether some feature is linearly decodable from the representation. If yes, you conclude the representation "contains" that feature.

This is a reasonable starting point. But notice what the probe actually tells you:

- **Yes**: the information is _linearly extractable_ from that layer's representation at that position.
- **Doesn't tell you**: whether the model is _using_ that information downstream, whether it's causally relevant to output behavior, or whether it's a representation artifact from training.

High probe accuracy is necessary but not sufficient for causal relevance.

## Causal interventions: the real test

The stronger test is a **causal intervention**: you directly manipulate the representation and check whether the expected output changes.

Concretely: if you believe neuron _n_ is a "number parity" detector, then you should be able to:

1. Find an input where the model correctly identifies parity.
2. Patch neuron _n_ to its mean activation (or to its activation from a different example).
3. Observe the model now getting parity wrong.

If you can do this cleanly, you have something real. If you can't (if the model compensates via other paths), then your "parity detector" is either one of many redundant representations, or it's not actually being used.

## Why ablation studies are undersold

My running complaint about feature attribution maps (saliency, attention, gradient-based) is that they tell you what the model _attends to_ but not what it _acts on_. An ablation is brutally direct: remove a component, measure the performance drop.

The reason ablations are underused is probably that they're expensive and fiddly. You have to define a reasonable baseline, handle position-specific interventions, and run enough experiments to separate noise from signal. It's unglamorous work.

But it's the work that produces sentences like: "Ablating layers 8-12 on this circuit causes a 40-point drop on the indirect object identification task." That sentence is load-bearing in a way that a heatmap isn't.

> "The most useful interpretability result isn't a picture. It's a sentence that survives an ablation."

## A practical protocol I've settled on

When I encounter a claim about what a representation encodes, I now ask:

1. Does a linear probe confirm decodability? _(probe accuracy)_
2. Does causal intervention in the expected direction change output? _(causal test)_
3. Does the effect generalize beyond the probing distribution? _(distribution check)_
4. Is there a parsimonious circuit-level account? _(mechanistic story)_

<div style={{margin: '2em 0', padding: '24px 24px 16px', background: 'rgba(42,26,14,0.03)', border: '1px solid rgba(42,26,14,0.1)', borderRadius: '3px'}}>
  <svg viewBox="0 0 540 172" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', display: 'block'}}>
    <g transform="translate(0,0)">
      <rect x="12" y="8" width="30" height="28" rx="2" fill="#7a1f2b" fillOpacity="0.1" stroke="#7a1f2b" strokeWidth="1"/>
      <text x="27" y="27" textAnchor="middle" fill="#7a1f2b" fontSize="11" fontFamily="monospace" fontWeight="600">01</text>
      <text x="58" y="18" fill="#2a1a0e" fontSize="9" letterSpacing="2" fontFamily="monospace">PROBE ACCURACY</text>
      <text x="58" y="33" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">Is the feature linearly decodable from this layer?</text>
      <text x="530" y="26" textAnchor="end" fill="#7a1f2b" fontSize="8.5" fontFamily="monospace">most published work</text>
    </g>
    <g transform="translate(0,43)">
      <rect x="12" y="8" width="30" height="28" rx="2" fill="#b8860b" fillOpacity="0.1" stroke="#b8860b" strokeWidth="1"/>
      <text x="27" y="27" textAnchor="middle" fill="#b8860b" fontSize="11" fontFamily="monospace" fontWeight="600">02</text>
      <text x="58" y="18" fill="#2a1a0e" fontSize="9" letterSpacing="2" fontFamily="monospace">CAUSAL TEST</text>
      <text x="58" y="33" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">Does intervening in the expected direction change output?</text>
      <text x="530" y="26" textAnchor="end" fill="#b8860b" fontSize="8.5" fontFamily="monospace">interesting papers</text>
    </g>
    <g transform="translate(0,86)">
      <rect x="12" y="8" width="30" height="28" rx="2" fill="#b8860b" fillOpacity="0.1" stroke="#b8860b" strokeWidth="1"/>
      <text x="27" y="27" textAnchor="middle" fill="#b8860b" fontSize="11" fontFamily="monospace" fontWeight="600">03</text>
      <text x="58" y="18" fill="#2a1a0e" fontSize="9" letterSpacing="2" fontFamily="monospace">DISTRIBUTION CHECK</text>
      <text x="58" y="33" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">Does the effect hold beyond the probing distribution?</text>
      <text x="530" y="26" textAnchor="end" fill="#b8860b" fontSize="8.5" fontFamily="monospace">interesting papers</text>
    </g>
    <g transform="translate(0,129)">
      <rect x="12" y="8" width="30" height="28" rx="2" fill="#2a1a0e" fillOpacity="0.06" stroke="#2a1a0e" strokeWidth="1"/>
      <text x="27" y="27" textAnchor="middle" fill="#2a1a0e" fontSize="11" fontFamily="monospace" fontWeight="600">04</text>
      <text x="58" y="18" fill="#2a1a0e" fontSize="9" letterSpacing="2" fontFamily="monospace">MECHANISTIC STORY</text>
      <text x="58" y="33" fill="#5b4432" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">Is there a circuit-level account of how it works?</text>
      <text x="530" y="26" textAnchor="end" fill="#8b7558" fontSize="8.5" fontFamily="monospace">almost nothing yet</text>
    </g>
  </svg>
</div>

Most published work passes (1). The interesting papers pass (2) and (3). Almost nothing passes (4) yet. That's where the field is heading.

---

If you found something wrong with this framing, I'd genuinely like to hear it. The email address is in the footer.
