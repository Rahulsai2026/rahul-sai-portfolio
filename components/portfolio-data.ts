export type Project = {
  index: string;
  title: string;
  subtitle: string;
  problem: string;
  built: string;
  methods: string[];
  result: string;
  impact: string;
  artifacts: Array<{ label: string; href?: string }>;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Counterfactual Ablation",
    subtitle: "LLM Agent Validation Method",
    problem: "LLM agents often cite memory, but it is unclear whether retrieved memory causally affects decisions or merely appears in rationales.",
    built: "A deterministic paired-audit protocol comparing identical agent decisions with and without specific memory blocks. The framework isolates whether episodic memory, semantic framing, or retrieved context changes the final decision.",
    methods: ["Paired causal audit design", "Memory ablation", "Structured outputs", "Adversarial baselines", "Null checks", "Trace logging"],
    result: "In a corrected Llama-3 audit, negatively curated memory was acknowledged in rationales but produced 0 decision switches across 128 paired comparisons.",
    impact: "Distinguishes actual causal influence from convincing post-hoc explanation in agent memory, faithfulness, and guardrail evaluations.",
    artifacts: [
      { label: "Research Checkpoint PDF", href: "/research/corrected_memory_audit_manuscript.pdf" },
      { label: "Methodology Notes", href: "https://github.com/Rahulsai2026/llm-memory-ablation-audit/blob/main/preanalysis_plan.md" },
      { label: "GitHub Repo", href: "https://github.com/Rahulsai2026/llm-memory-ablation-audit" },
    ],
  },
  {
    index: "02",
    title: "Keel",
    subtitle: "Agentic Trading Workflow",
    problem: "Live AI agents can appear successful even when humans made the important decisions. Without attribution controls, agent performance can be overstated.",
    built: "An agentic workflow integrating signal generation, execution, validation, human override, and performance attribution.",
    methods: ["Signal-to-action design", "Constraint checks", "Override tracking", "Decision ledger", "Exchange reconciliation", "Deployment review"],
    result: "Built an attribution framework separating AI-generated actions from human intervention during live trading; it refused to credit human-managed exits to the agent.",
    impact: "Shows how to evaluate an agent as a controlled workflow—with audit logs, execution constraints, and guardrails—rather than as magic.",
    artifacts: [
      { label: "Architecture Diagram" },
      { label: "Attribution Ledger" },
      { label: "Risk-Control Checklist" },
      { label: "GitHub Repo" },
    ],
  },
  {
    index: "03",
    title: "TPAAM",
    subtitle: "Regime-Aware Allocation Framework",
    problem: "Market models can invent patterns from noise. A model that looks intelligent under favorable data may fail under null conditions.",
    built: "A regime-aware allocation framework integrating non-exclusive regime detection, probabilistic asymmetry scoring, dynamic weights, and validation controls.",
    methods: ["Regime detection", "MMAC posterior blending", "GBM null testing", "Three-arm pre-registration", "Failure-mode documentation"],
    result: "The GBM null test exposed PANIC over-detection (38.3%) and an Innovation detection gap (0.0%). MMAC runs in parallel while a pre-registered three-arm test compares regime-conditional, equal-weight, and blended weights.",
    impact: "Applies adversarial null testing and pre-registration to distinguish demonstrated behavioral controls from unvalidated mathematical parameters.",
    artifacts: [
      { label: "Framework Overview", href: "https://github.com/Rahulsai2026/TPAAM-Framework#architecture" },
      { label: "Validation Notes", href: "https://github.com/Rahulsai2026/TPAAM-Framework#validation-program" },
      { label: "Failure Mode Table", href: "https://github.com/Rahulsai2026/TPAAM-Framework#known-deficiencies-explicit" },
      { label: "GitHub Repo", href: "https://github.com/Rahulsai2026/TPAAM-Framework" },
    ],
  },
];

export const roleFits = [
  ["01", "Evals & Guardrails", "Designing tests that reveal when AI agents are unfaithful, brittle, overconfident, or unsafe."],
  ["02", "Agent Orchestration", "Understanding workflows where models, tools, memory, context, human review, and execution constraints interact."],
  ["03", "Context & Memory Reliability", "Testing whether retrieved context changes decisions, merely appears in rationales, or creates hidden failure modes."],
  ["04", "Governance & Auditability", "Bringing finance-grade documentation, lineage, control testing, and attribution discipline to AI systems."],
];
