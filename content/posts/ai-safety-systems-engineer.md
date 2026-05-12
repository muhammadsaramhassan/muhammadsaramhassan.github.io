---
title: "Thinking about AI safety like a systems engineer"
dek: "Alignment, a taxonomy of failure modes, and the parts I think deserve more infrastructure attention than they're currently getting."
date: "2026-03-10"
tags: ["AI Safety", "ML Systems"]
readTime: 12
pinned: true
---

I came to AI safety from an ML systems background: the part of the stack that worries about whether the training loop terminates, whether gradients explode on edge cases, whether the data pipeline silently corrupts 0.1% of batches. That background has shaped how I read alignment arguments, and I think the framing it suggests is underused.

The safety discourse tends to be structured around _what the model might do_. The systems framing asks instead: _how would we detect it, and what would we do?_

## A taxonomy of failure modes

When I think about ways an AI system can cause harm, I find it useful to separate:

**1. Training failures**: the model learned something subtly wrong. Specification gaming, reward hacking, mesa-optimization. These are failures in the mapping from human intent to training objective.

**2. Inference failures**: the model's behavior at deployment diverges from its behavior during evaluation. Distribution shift, context-length sensitivity, multi-turn drift. These are failures in the mapping from training performance to real-world performance.

**3. Infrastructure failures**: the surrounding system behaves unexpectedly. Rate limits, caching bugs, prompt injection, tool use side effects. These are failures in the mapping from model behavior to user-visible system behavior.

Most alignment writing is about (1). Most production incidents are about (2) and (3).

<div style={{margin: '2.5em 0', padding: '24px 20px 20px', background: 'rgba(253,248,236,0.9)', border: '1px solid rgba(42,26,14,0.12)', borderRadius: '3px'}}>
  <svg viewBox="0 0 560 196" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', display: 'block'}}>
    <rect x="12" y="10" width="394" height="52" rx="2" fill="#7a1f2b" fillOpacity="0.07" stroke="#7a1f2b" strokeWidth="1.5"/>
    <text x="28" y="30" fill="#7a1f2b" fontSize="9" letterSpacing="2.5" fontFamily="monospace">1 · TRAINING FAILURES</text>
    <text x="28" y="50" fill="#5b4432" fontSize="12.5" fontFamily="Georgia, serif" fontStyle="italic">specification gaming · reward hacking · mesa-optimization</text>
    <text x="420" y="34" fill="#7a1f2b" fontSize="9" fontFamily="monospace">most alignment</text>
    <text x="420" y="47" fill="#7a1f2b" fontSize="9" fontFamily="monospace">writing is here</text>

    <rect x="12" y="74" width="394" height="52" rx="2" fill="#b8860b" fillOpacity="0.07" stroke="#b8860b" strokeWidth="1.5"/>
    <text x="28" y="94" fill="#b8860b" fontSize="9" letterSpacing="2.5" fontFamily="monospace">2 · INFERENCE FAILURES</text>
    <text x="28" y="114" fill="#5b4432" fontSize="12.5" fontFamily="Georgia, serif" fontStyle="italic">distribution shift · context-length sensitivity · multi-turn drift</text>
    <text x="420" y="97" fill="#b8860b" fontSize="9" fontFamily="monospace">most production</text>
    <text x="420" y="110" fill="#b8860b" fontSize="9" fontFamily="monospace">incidents are here</text>

    <rect x="12" y="138" width="394" height="52" rx="2" fill="#2a1a0e" fillOpacity="0.05" stroke="rgba(42,26,14,0.35)" strokeWidth="1.5"/>
    <text x="28" y="158" fill="#2a1a0e" fontSize="9" letterSpacing="2.5" fontFamily="monospace">3 · INFRASTRUCTURE FAILURES</text>
    <text x="28" y="178" fill="#5b4432" fontSize="12.5" fontFamily="Georgia, serif" fontStyle="italic">rate limits · prompt injection · tool-use side effects</text>
    <text x="420" y="161" fill="#8b7558" fontSize="9" fontFamily="monospace">and here too,</text>
    <text x="420" y="174" fill="#8b7558" fontSize="9" fontFamily="monospace">mostly invisible</text>

  </svg>
</div>

## Where systems thinking helps

A systems engineer's instinct, faced with a complex failure, is to ask: where are the detection points? What invariants should hold at each layer? Where does the blast radius of a failure stay local versus propagate?

Applied to AI safety:

- **Monitoring**: we log model outputs routinely but rarely log _when model behavior changes_. Drift detection on production behavior is standard in MLOps, but rarely applied to alignment-relevant outputs.
- **Sandboxing**: the principle of least privilege (give the model only the access it needs) is widely understood but poorly implemented in current agentic systems.
- **Circuit breakers**: in distributed systems, a circuit breaker stops retrying a failing dependency and returns a known-safe default. AI systems rarely have equivalent mechanisms for "this model is behaving strangely; do not execute its recommendations."

None of this is a substitute for getting the training right. But the assumption that we'll solve alignment purely at training time seems fragile. Defense in depth is a principle for a reason.

## The thing I think deserves more attention

**Interpretability infrastructure, not just interpretability research.**

Most interpretability work produces results in a research notebook. Those results rarely make it back into the training loop, into monitoring systems, or into deployment decisions. The gap between "we identified a circuit that mediates this behavior" and "we turned that circuit into a runtime check" is mostly unexplored.

Building that bridge is an infrastructure problem as much as a research problem. It requires the same kind of unglamorous work that makes production ML systems reliable: clean abstractions, thorough logging, careful testing, rollback capabilities.

I think this is where we would want to spend the next few years.
