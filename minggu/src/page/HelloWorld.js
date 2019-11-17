import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        nama: 'Code',
        age: 16,
        gender: 'Men',
        number: 0
    }

    //Metode lain inisiasi state
    //contructor(props) {
    //    super(props)
    //    this.state = {
    //        nama: 'zalellele'
    //    }
    //}

    componentDidMount() {
        this.setState({
            nama: 'HALOOOOO',
            age: 25,
            gender: 'Lalaki'
        })
    }

    handleAddValue() {
        if (this.state.number < 10) 
        {
            this.setState({
                number: this.state.number + 1
            })   
        }
    }
    handleMinValue() {
        if (this.state.number > 0) 
        {
            this.setState({
                number: this.state.number - 1
            })   
        }
    }
    handleResetValue() {
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World {this.state.nama}My age is: {this.state.age}My gender is: {this.state.gender}</h1>

                <div>
                    <h1><b>{this.state.number}</b></h1>

                    <button onClick={() => this.handleAddValue()}>Tambahkan 1</button>
                    <button onClick={() => this.handleMinValue()}>Kurangkan 1</button>
                    <button onClick={() => this.handleResetValue()}>Reset Value</button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;