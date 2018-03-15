import React from "react"

class Title extends React.Component {

  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event){
    this.props.handleSelectChange(event.target.value)
  }

  render() {

    return(
      <div className="title-header">
        <h1>Harry, Harry Potter the wizard boy</h1>
        <select onChange={this.handleChange}>
          <option disabled selected>Select a house</option>
          {this.props.houses.map(house => {
            return <option key={house} value={house}>{house}</option>
          })}
        </select>
      </div>
    )
  }
}

export default Title
