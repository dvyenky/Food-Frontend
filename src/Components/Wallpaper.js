import React from 'react';
import '../Styles/home.css';

class Wallpaper extends React.Component {
    handleLocationChange = (event) => {
        const locationId = event.target.value;
        sessionStorage.setItem('locationId', locationId);
    }

    render() {
        const { locationsData } = this.props;
        return (
            <div>
                {/* Adding Wallpaper */}
                <img src="./Assets/homepageimg.png" width="100%" height="450" />
                <div>

                    <div className="logo">
                        <p>e!</p>
                    </div>

                    <div className="headings">
                        Find the best restaurants, cafes, bars
                    </div>

                    <div className="locationSelector">
                        <select className="locationDropdown" onChange={this.handleLocationChange}>
                            <option value="0">Select</option>
                            {locationsData.map((item) => {
                                return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                            })}
                        </select>
                        <div>
                            <span className="glyphicon glyphicon-search search"></span>
                            <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallpaper;