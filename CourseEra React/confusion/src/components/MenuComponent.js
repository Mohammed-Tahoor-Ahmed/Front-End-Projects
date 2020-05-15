import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import DishDetail from '/components/DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        console.log('MenuComponent Constructor is invoked.');
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    componentDidMount(){
        console.log('MenuComponent componentDidMount is invoked.');
    }
    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                {DishDetail}
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log('MenuComponent Render is invoked.');
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return  (
            <div className="container">
                <div className="row">
                    {menu}  
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;