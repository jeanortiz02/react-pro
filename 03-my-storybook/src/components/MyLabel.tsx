import './MyLabel.css';


export interface Props {

    /**
     * Label to Display
     */
    label: string;
    
    /**
     * Size of the label
     */
    size?: 'nomal' | 'h1' | 'h2' | 'h3';

    /**
     * All characters to display in uppercase
     */
    allCaps?: boolean;

    /**
     * Color of the text
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    
    /**
     * Color of the text
     */
    fontColor?: string;
}

export const MyLabel = ({
    label, 
    size = 'nomal',
    allCaps = false,
    color = 'text-primary',
    fontColor
} : Props) => {

  return (
    <span 
        className={`${size} ${color} label` } 
        style={{
            color: fontColor || undefined,
            textTransform: allCaps? 'uppercase' : 'none'
        }}
    >{label}</span>
  )
}
