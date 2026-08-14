export type Project = {
  index: string;
  title: string;
  subtitle: string;
  problem: string;
  built: string;
  methods: string[];
  result: string;
  artifacts: Array<{ label: string; href?: string }>;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Risk Wording vs. Retrieved Memory",
    subtitle: "Reproducible LLM Agent Evaluation",
    problem: "An agent can cite retrieved history while the surrounding instruction—not the retrieved facts—actually drives its decision. Without matched controls, plausible rationales are easily mistaken for causal evidence.",
    built: "A three-experiment paired replay that freezes the data, varies retrieval composition and warning severity independently, and retains prompts, responses, manifests, and clean decision ledgers for inspection.",
    methods: ["Paired causal design", "Memory ablation", "Matched guidance controls", "Frozen-data manifests", "Raw trace logging", "Reproducible analysis"],
    result: "Established that all 12 planned retrieval comparisons produced no action switches, while generic strong-caution wording alone reproduced the Llama action shifts in a separate control. The evidence, prompts, and decision ledger are retained for inspection.",
    artifacts: [
      { label: "Research Draft PDF", href: "/research/risk_wording_trading_agent_replay.pdf" },
      { label: "Study Protocol", href: "https://github.com/Rahulsai2026/llm-memory-ablation-audit/blob/main/followup_preanalysis_plan.md" },
      { label: "GitHub Repo", href: "https://github.com/Rahulsai2026/llm-memory-ablation-audit" },
    ],
  },
  {
    index: "02",
    title: "Regulatory Artifact Automation",
    subtitle: "GenAI + Python Workflow",
    problem: "Regulatory data-governance work depends on detailed, audit-ready artifacts, but preparing and reviewing them manually creates slow, repetitive control work.",
    built: "A multi-layered GenAI workflow for UCDD preparation, an AI report-extraction tool, and a Python QA engine that validates UCDD and UCPDE artifacts against reporting standards.",
    methods: ["Prompt architecture", "Regulatory text extraction", "Python QA", "Standards validation", "Audit-ready artifacts", "Process automation"],
    result: "Reduced UCDD preparation from four hours to 30 minutes per report, improved report-extraction efficiency by 60%, and put two automation tools into team-wide use. The QA engine checks artifacts spanning 10 to 5,000+ line items in one pass.",
    artifacts: [],
  },
  {
    index: "03",
    title: "Cognitive Node Framework",
    subtitle: "Causal Decision Simulation Framework",
    problem: "Modular agent systems can hide look-ahead bias, invalid actions, unexplained fallbacks, and costs behind an impressive architecture diagram. The architecture is not the evaluation.",
    built: "A research MVP with isolated decision nodes, deterministic aggregation and safe fallbacks, trace-and-replay support, causal features, next-open paper execution, explicit costs, and bounded risk controls.",
    methods: ["Time-causal feature design", "Deterministic fallbacks", "Trace replay", "Look-ahead tests", "Execution-cost simulation", "Risk-gate auditing"],
    result: "Delivered a simulator that records timing, risk gates, costs, and every decision. Its paper simulations did not outperform buy-and-hold, and that negative result remains in the trace rather than being optimized out of the record.",
    artifacts: [],
  },
  {
    index: "04",
    title: "Keel",
    subtitle: "Agentic Trading Workflow",
    problem: "Live AI agents can appear successful even when humans made the important decisions. Without attribution controls, agent performance can be overstated.",
    built: "An agentic workflow integrating signal generation, execution, validation, human override, and performance attribution.",
    methods: ["Signal-to-action design", "Constraint checks", "Override tracking", "Decision ledger", "Exchange reconciliation", "Deployment review"],
    result: "Built an attribution ledger that separates AI-generated actions from human intervention and refuses to credit human-managed exits to the agent.",
    artifacts: [
      { label: "Architecture Diagram", href: "https://github.com/Rahulsai2026/keel#architecture" },
      { label: "Attribution Ledger", href: "https://github.com/Rahulsai2026/keel/blob/main/docs/attribution-ledger.md" },
      { label: "Risk-Control Checklist", href: "https://github.com/Rahulsai2026/keel/blob/main/docs/control-checks.md" },
      { label: "GitHub Repo", href: "https://github.com/Rahulsai2026/keel" },
    ],
  },
  {
    index: "05",
    title: "TPAAM",
    subtitle: "Regime-Aware Allocation Framework",
    problem: "Market models can invent patterns from noise. A model that looks intelligent under favorable data may fail under null conditions.",
    built: "A regime-aware allocation framework integrating non-exclusive regime detection, probabilistic asymmetry scoring, dynamic weights, and validation controls.",
    methods: ["Regime detection", "MMAC posterior blending", "GBM null testing", "Three-arm pre-registration", "Failure-mode documentation"],
    result: "Exposed PANIC over-detection at 38.3% and an Innovation detection gap at 0.0% in the GBM null test, then documented both before continuing the three-arm evaluation program.",
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
