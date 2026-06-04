(function () {
  const rootElement = document.getElementById("react-actions-root");
  if (!rootElement || !window.React || !window.ReactDOM) return;

  const { useMemo, useState } = React;

  const projects = [
    {
      name: "Currency Converter Java",
      type: "Java Console App",
      repo: "https://github.com/Ashvanth2004/CurrencyConverter-Java.git",
      focus: "Input handling, conversion logic, loops, and clean Java basics.",
      stack: ["Java", "Scanner", "Control Flow", "Decimal Logic"],
      command: "javac CurrencyConverter.java && java CurrencyConverter"
    },
    {
      name: "Bank Account Simulation",
      type: "OOP Java System",
      repo: "https://github.com/Ashvanth2004/Bank-Account-Simulation.git",
      focus: "Account classes, deposits, withdrawals, balance checks, and validation.",
      stack: ["Java", "OOP", "Inheritance", "Exception Handling"],
      command: "javac Main.java && java Main"
    },
    {
      name: "Movie Info Finder",
      type: "Frontend API App",
      repo: "https://github.com/Ashvanth2004/Movie-Info-Finder.git",
      focus: "Movie search interface, typed frontend structure, CSS UI, and API data display.",
      stack: ["TypeScript", "CSS", "API", "Responsive UI"],
      command: "npm install && npm run dev"
    }
  ];

  const metrics = [
    ["Backend", "Java + Spring Boot", "88%"],
    ["Frontend", "React + TypeScript", "82%"],
    ["Database", "SQL + MongoDB", "76%"],
    ["Tools", "Git + Docker + Postman", "80%"]
  ];

  function ActionLab() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [copied, setCopied] = useState(false);
    const activeProject = projects[activeIndex];

    const terminalLines = useMemo(() => [
      "$ portfolio --profile java-full-stack",
      "> Loading selected project...",
      `> ${activeProject.name}`,
      `> Stack: ${activeProject.stack.join(" / ")}`,
      `> Run: ${activeProject.command}`
    ], [activeProject]);

    function copyCommand() {
      navigator.clipboard?.writeText(activeProject.command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    }

    return React.createElement(
      "div",
      { className: "react-lab-panel" },
      React.createElement(
        "div",
        { className: "react-lab-copy" },
        React.createElement("p", { className: "eyebrow" }, "Powered by React"),
        React.createElement("h2", null, "Interactive technical workspace."),
        React.createElement(
          "p",
          null,
          "Explore my core Java and frontend projects through live actions, stack indicators, repository links, and terminal-style commands."
        )
      ),
      React.createElement(
        "div",
        { className: "metric-grid" },
        metrics.map((metric) =>
          React.createElement(
            "article",
            { className: "metric-card", key: metric[0] },
            React.createElement("span", null, metric[0]),
            React.createElement("strong", null, metric[1]),
            React.createElement(
              "div",
              { className: "meter", "aria-label": `${metric[0]} level ${metric[2]}` },
              React.createElement("i", { style: { width: metric[2] } })
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "project-switcher" },
        React.createElement(
          "div",
          { className: "project-tabs", role: "tablist", "aria-label": "Project selector" },
          projects.map((project, index) =>
            React.createElement(
              "button",
              {
                className: index === activeIndex ? "active" : "",
                key: project.name,
                onClick: () => setActiveIndex(index),
                type: "button"
              },
              String(index + 1).padStart(2, "0"),
              " ",
              project.name
            )
          )
        ),
        React.createElement(
          "article",
          { className: "active-project-card" },
          React.createElement("p", { className: "project-type" }, activeProject.type),
          React.createElement("h3", null, activeProject.name),
          React.createElement("p", null, activeProject.focus),
          React.createElement(
            "div",
            { className: "project-tags" },
            activeProject.stack.map((item) => React.createElement("span", { key: item }, item))
          ),
          React.createElement(
            "div",
            { className: "react-actions" },
            React.createElement("a", { href: activeProject.repo, target: "_blank", rel: "noopener" }, "Open Repository"),
            React.createElement("button", { onClick: copyCommand, type: "button" }, copied ? "Copied" : "Copy Run Command")
          )
        )
      ),
      React.createElement(
        "div",
        { className: "terminal-card", "aria-label": "Technical command preview" },
        React.createElement(
          "div",
          { className: "terminal-dots" },
          React.createElement("span", null),
          React.createElement("span", null),
          React.createElement("span", null)
        ),
        terminalLines.map((line) => React.createElement("code", { key: line }, line))
      )
    );
  }

  ReactDOM.createRoot(rootElement).render(React.createElement(ActionLab));
})();
