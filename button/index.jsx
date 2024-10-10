import './button.css';
import "../global.css";

function Button({ children, variant = 'primary', className, loading = false, size = 'medium', disabled, ...props }) {
  return (
    <div className="container">
      <button {...props} className={`button button--${variant} button--${size} ${className}`} disabled={disabled || loading}>
        {children}
      </button>
      {loading && <div className={`loader loader--${variant}`} />}
    </div>
  );
}

export default Button;
