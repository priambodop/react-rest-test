import react, { PureComponent } from "react";

class Button extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button>Click Me!</button>
            </div>
        );
    }
}