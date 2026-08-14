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
    title: "Risk Wording vs. Retrieved Memory",
    subtitle: "Reproducible LLM Agent Evaluation",
    problem: "An agent can cite retrieved history while the surrounding instruction—not the retrieved facts—actually drives its decision. Without matched controls, plausible rationales are easily mistaken for causal evidence.",
    built: "A three-experiment paired replay that freezes the data, varies retrieval composition and warning severity independently, and retains prompts, responses, manifests, and clean decision ledgers for inspection.",
    methods: ["Paired causal design", "Memory ablation", "Matched guidance controls", "Frozen-data manifests", "Raw trace logging", "Reproducible analysis"],
    result: "Across 855 controlled decisions over three local models, negative-only versus balanced retrieved returns caused no paired action switches in the planned comparisons. A separate 114-decision control showed generic strong-caution wording alone reproduced the Llama action shifts.",
    impact: "Shows why agent-memory evaluations need matched guidance controls before action changes can be credited to retrieved information.",
    artifacts: [
      { label: "Research Draft PDF", href: "/research/risk_wording_trading_agent_replay.pdf" },
      { label: "Study Protocol", href: "https://github.com/Rahulsai2026/llm-memory-ablation-audit/blob/main/followup_preanalysis_plan.md" },
      { label: "GitHub Repo", href: "https://github.com/Rahulsai2026/llm-memory-ablation-audit" },
    ],
  },
  {
    index: "02",
    title: "Cognitive Node Framework",
    subtitle: "Causal Decision Simulation Framework",
    problem: "Modular agent systems can hide look-ahead bias, invalid actions, unexplained fallbacks, and costs behind an impressive architecture diagram. The architecture is not the evaluation.",
    built: "A research MVP with isolated decision nodes, deterministic aggregation and safe fallbacks, trace-and-replay support, causal features, next-open paper execution, explicit costs, and bounded risk controls.",
    methods: ["Time-causal feature design", "Deterministic fallbacks", "Trace replay", "Look-ahead tests", "Execution-cost simulation", "Risk-gate auditing"],
    result: "The recorded paper simulations did not outperform buy-and-hold. That negative result is retained with its full decision trace, making failure modes and assumptions inspectable rather than quietly optimized away.",
    impact: "Demonstrates evaluation-first engineering: a decision system should make timing, constraints, and failure visible before anyone treats it as useful.",
    artifacts: [],
  },
  {
    index: "03",
    title: "Keel",
    subtitle: "Agentic Trading Workflow",
    problem: "Live AI agents can appear successful even when humans made the important decisions. Without attribution controls, agent performance can be overstated.",
    built: "An agentic workflow integrating signal generation, execution, validation, human override, and performance attribution.",
    methods: ["Signal-to-action design", "Constraint checks", "Override tracking", "Decision ledger", "Exchange reconciliation", "Deployment review"],
    result: "Built an attribution framework separating AI-generated actions from human intervention during live trading; it refused to credit human-managed exits to the agent.",
    impact: "Shows how to evaluate an agent as a controlled workflow—with audit logs, execution constraints, and guardrails—rather than as magic.",
    artifacts: [
      { label: "Architecture Diagram", href: "https://github.com/Rahulsai2026/keel#architecture" },
      { label: "Attribution Ledger", href: "https://github.com/Rahulsai2026/keel/blob/main/docs/attribution-ledger.md" },
      { label: "Risk-Control Checklist", href: "https://github.com/Rahulsai2026/keel/blob/main/docs/control-checks.md" },
      { label: "GitHub Repo", href: "https://github.com/Rahulsai2026/keel" },
    ],
  },
  {
    index: "04",
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
