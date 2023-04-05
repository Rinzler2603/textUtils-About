import React from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color:props.mode==="dark"?"white":"black",
    //     backgroundColor:props.mode==="dark"?"grey":"white"
    // });

    let myStyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"#333333":"white"
    }
    
    

    return (
    <div className='container'>
        <h2 className='my-3' style={{color:props.mode==="dark"?"white":"black"}}>About Us</h2>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" style={myStyle}>
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>
                    My Name
                </strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Hey there My name is Hardik Rana.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Why the website?</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Just testing out reaact and its deployment.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Issues Faced</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Wasn't able to deploy a react app with router used in it through gh-pages module. 
                </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}
