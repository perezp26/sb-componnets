import './mylabel.css'

export interface MyLabelProps {
     /**
        * Este es el msg que se va a mostar en el Label
    */
    label :  string,

     /**
        * Esta son las opciones del tamaño del texto
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3',
    allCaps?: boolean,
    color?: 'primary' | 'secondary' | 'tertiary',
    fontColor?: string

    backgroundColor?:string,

}


export const MyLabel = ({
    label   = 'Aqui va el texto',
    size    = 'normal',
    allCaps = false,
    color   = 'primary',
    fontColor,
    backgroundColor = 'transparent'
} : MyLabelProps) => {
  return (

        <span 
            className={ `label ${ size } ${'text-' + color}` }
            style = {{ color: fontColor, backgroundColor }}
        >
            { !allCaps ? label : label.toUpperCase() }
        </span>

  )
}


