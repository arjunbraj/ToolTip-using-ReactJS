import './ToolTip.css';

const ToolTip = (props) => {
    let style;
    switch (props.position) {
        case 'top': style = {
            // width: '1px',
            bottom: '100%',
            left: '50%',
            marginLeft: '-150px'
            }
            break;
        case 'right': style = {
            top: '-5px',
            left: '105%'    
            }
            break;
        case 'left': style = {
            top: '-5%',
            right: '105%'
            }
            break;
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