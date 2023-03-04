import { ButtonProps } from "./types";
import './style.css';

export default function Blink(props: ButtonProps): JSX.Element {
    const { className = '', children, ...rest} = props;
    return <div className={`annouing blink ${className}`} {...rest}>{children}</div>
}