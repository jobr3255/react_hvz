import React, { Component } from 'react';

export default class Rules extends Component {
  render() {
    return(
      <div className="lightslide">
      	<div className="container">
      		<div className="row">
        		<div className="content lightslide-box white">
        			<h2><strong>Weeklong</strong></h2>
        			<div>
        				<h5>1. Don’t be a douchebag</h5>
        				- Don’t use non-players as human shields <br/>
        				- Don’t remove your bandana to avoid being killed <br/>
        				- Don’t deny that you weren’t tagged/stunned <br/>
        				- Don’t make mountains out of mole hills, this is a game, not life or death <br/>
        			</div>
              <br/>
        			<div>
        				<h5>2. Wear your bandana when you are playing</h5>
        				- Humans wear bandanas on their arms, zombies wear bandanas around their heads
        				<div>
        					<img className="width-30" src="images/bandana_arm.png" alt="Arm bandana"/>
        					<img className="width-50" src="images/bandana_head.png" alt="Head bandana"/>
        				</div>
        			</div>
              <br/>
        			<div>
        				<h5>Don’t involve non players in the game</h5>
        				- If someone isn’t wearing a bandana (bright orange and provided by us) don’t try to involve them in the game in anyway <br/>
        				- We can only host these games if the whole CU community feels safe <br/>
        			</div>
              <br/>
        			<div>
        				<h5>4. Only play within the game limits</h5>
        				- All buildings are off-limits <br/>
        				- Gameplay will only be on campus and at designated parks around Boulder <br/>
        				<div><img className="width-50" src="images/play_area.png" alt="Play area"/></div>
        			</div>
              <br/>
        			<div>
        				<h5>5. <strong>No nerf on campus!</strong></h5>
        				- We wish we could use nerf too but unfortunately no nerf is allowed on campus at all!!! <br/>
        				- You can protect yourself with rolled up socks, blowguns (must be shorter than 3 feet) or thrown darts and other soft projectiles. <br/>
        			</div>
              <br/>
        			<div>
        				<h5>6. Only play within game times, Monday-Friday 8:00-5:00</h5>
        				- There will also be an off-campus mission at 5 in a park in Boulder. <br/>
        				- During these mission Nerf is allowed but only at these off-campus missions. <br/>
        			</div>
              <br/>
        			<div>
        				<h5>7. Always have your player code on you to give to a zombie when you get tagged</h5>
        				- Have your code on a notecard, a screenshot on your phone, any way you can quickly access it is fine. <br/>
        			</div>
        		</div>
          </div>
      	</div>
      </div>
    );
  }
}
