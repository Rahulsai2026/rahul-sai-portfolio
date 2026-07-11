const steps = ["Input / Signal", "Agentic Workflow", "Decision / Recommendation", "Validation Layer", "Attribution + Guardrails + Audit Log", "Action or Human Review"];

export function WorkflowDiagram() {
  return (
    <div className="workflow" aria-label="Workflow from input signal to action or human review">
      {steps.map((step, index) => (
        <div className="workflow-step" key={step}>
          <div className="workflow-node"><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>
          {index < steps.length - 1 && <div className="workflow-arrow" aria-hidden="true">→</div>}
        </div>
      ))}
    </div>
  );
}
