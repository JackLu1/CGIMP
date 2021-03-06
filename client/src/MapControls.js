import React, { Component } from "react";
import FacetedSearch from './Facets';
import IntersectUserData from './IntersectUserData';

/*
This code is part of the CGIMP distribution
(https://github.com/Boyle-Lab/CGIMP) and is governed by its license.
Please see the LICENSE file that should have been included as part of this
package. If not, see <https://www.gnu.org/licenses/>.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

CONTACT: Adam Diehl, adadiehl@umich.edu
*/


class MapControls extends Component {
    render() {
        return (
		<div>
		<FacetedSearch
	            onDataChange={this.props.onDataChange}
	            onMapDataChange={this.props.onMapDataChange}
	            onNewSearchAction={this.props.onNewSearchAction}
	            updateParentState={this.props.updateParentState}
		/>
		<IntersectUserData
	            data={this.props.displayedData}
	            onDataChange={this.props.onDataChange}
	            onMapDataChange={this.props.onMapDataChange}
	            onNewSearchAction={this.props.onNewSearchAction}
	            dataIsLoaded={this.props.dataIsLoaded}
	            updateParentState={this.props.updateParentState}
		/>
		
		</div>
        );
    }
}

export default MapControls;
