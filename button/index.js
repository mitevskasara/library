import './button.css';

function Button({ children, variant = 'primary', className, size = 'medium', ...props }) {
  return (
    <button {...props} className={`button button--${variant} button--${size} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
