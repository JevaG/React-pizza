import React from 'react';
import classNames from 'classnames';


const Button = ({ onClick,className,outline,children  }) => {
    console.log(outline)
    return (

        // <button className={`button ${this.props.outline ? 'button-outline' : ''}`}>{this.props.children}</button>
        /*
            with these lines the code becomes cumbersome,
             by installing 'classnames' package, you write cleaner code
             classnames -A simple javascript utility for conditionally joining classNames together.
         */
        /* classname() is a function ,it takes button as an argument then
            if this.props.outline is true, then show 'button--outline' */
        <button
            onMouseEnter={onClick}
            className={classNames('button', className, {
                    'button--outline': outline,
                }
            )}
        >
            {children}
        </button>

    )
}


export default Button;