type ButtonProps = {
    className: string;
    text?: string | number; 
    buttonColor?: string;
    handler?: () => void;
    textColor?: "yellow" | "silver";
    borderRadius?: number;  
}
              
const Button = ({ handler, text, buttonColor, textColor, borderRadius, className}: ButtonProps) => {
    return(
        <button className={className}
                onClick={handler} 
                style={{
                    background: buttonColor,
                    color: textColor, 
                    borderRadius: borderRadius,
                    border: 0
                }}
        >
           {text}
        </button>
    )
}

export default Button