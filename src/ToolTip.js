// importing stylesheet
import './ToolTip.css';

const ToolTip = (props) => {
    // setting up a style object so that we can style it according to position
    let style;
    switch (props.position) {
        // for top
        case 'top': style = {
            bottom: '100%',
            left: '50%',
            marginLeft: '-150px'
            }
            break;
        // for right
        case 'right': style = {
            top: '-5px',
            left: '105%'    
            }
            break;
        // for left
        case 'left': style = {
            top: '-5%',
            right: '105%'
            }
            break;
        // for bottom
        case 'bottom': style = {
            top: '100%',
            left: '50%',
            marginLeft: '-150px'
            }
            break;
        default:
            break;
    }


    return (
        <div>
            <div className="toolTip"><span style={{borderBottom: '1px dotted #000'}}>Hover over me!</span>
                <span className="toolTipText" style={style}>Thanks for hovering! I'm a tooltip</span>
            </div>
        </div>
    );
}

export default ToolTip;