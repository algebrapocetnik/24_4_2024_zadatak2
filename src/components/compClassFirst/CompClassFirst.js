
import React from "react";

export default class CompClassFirs extends React.Component {
render () {

const {korisnik } = this.props
    return <>
    <p>{korisnik.ime} - {korisnik.godine}</p>
    </>;
}
}