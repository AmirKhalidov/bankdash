interface ToggleProps {
  checked: boolean | undefined;
  onChange: (checked: boolean) => void;
}

export default function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      onClick={() => onChange(!checked)}
      style={{
        width: 56,
        height: 30,
        background: checked ? "#16DBCC" : "#ccc",
        border: "none",
        borderRadius: 30,
        padding: 2,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      <span
        style={{
          display: "block",
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "#fff",
          transform: checked ? "translateX(26px)" : "translateX(0)",
          transition: "transform 0.2s",
        }}
      />
    </button>
  );
}
