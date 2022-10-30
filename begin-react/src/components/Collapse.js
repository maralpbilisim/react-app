import React, { Component } from 'react'

export default class Collapse extends Component {

     state={
            showContent:false
      
        // this.showMore=()=>{
        //     console.log(this)
        // }
        // this.showMore=this.showMore.bind(this)
    }
    showMore=()=>{
        this.setState({showContent:!this.state.showContent})
        // this.state={
        //     showContent:true
        // }
    }
    componentDidMount(){
        console.log('component oluşturuldu')
    }
    componentDidUpdate(){
        console.log('component güncellendi')
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                  {/* {this.props.children.props.cardTitle} */}
                  {React.Children.map(this.props.children,children=>children.props.cardTitle)}
                </button>
                { this.state.showContent?(
                     <div className="collapse show">
                     <div className="card card-body">
                         {/* {this.props.children} */}
                         {React.Children.map(this.props.children,children=>children)}
                     </div>
                 </div>
                ):"null"}
               
            </div>
        )
    }
}


// import React from "react";

// const Collapse = (props) => {
//     return (
//         <div>
//                 <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls={props.href}>
//                     Link with href
//                 </a>
//             <div className="collapse show" id={props.href}>
//                 <div className="card card-body">
//                    {props.children}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Collapse;