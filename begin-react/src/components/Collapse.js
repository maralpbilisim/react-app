import React from "react";

const Collapse = (props) => {
    return (
        <div>
                <a className="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls={props.href}>
                    Link with href
                </a>
            <div className="collapse" id={props.href}>
                <div class="card card-body">
                   {props.children}
                </div>
            </div>
        </div>
    )
}
export default Collapse;