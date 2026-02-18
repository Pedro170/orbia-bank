type Props = {
  status: "ativo" | "inativo";
};

const StatusBadge = ({ status }: Props) => {
  const config = {
    ativo: {
      label: "Ativo",
      className: "badge-ativo"
    },
    inativo: {
      label: "Inativo",
      className: "badge-inativo"
    }
  };

  const { label, className } = config[status];

  return (
    <span className={`status-badge ${className}`}>
      <span className="status-dot" />
      {label}
    </span>
  );
};

export default StatusBadge;
