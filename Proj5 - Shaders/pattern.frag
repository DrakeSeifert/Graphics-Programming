#version 330 compatibility

uniform float uTime;		// "Time", from Animate( )
uniform float uMin, uMax;
uniform bool uEnableFrag;
in vec2 vST;		// texture coords

const float PI = 	3.14159265;

void
main( )
{
	vec3 myColor = vec3(0.3, 0.8, 0.5);
	
	if(uEnableFrag) {		
		//If in the defined box
		if( vST.s >= uMin && vST.s <= uMax &&
			vST.t >= uMin && vST.t <= uMax) {

			//Set number of stripes
			float divider = (uMax - uMin) / 10*cos(uTime*2*PI);
			
			//Draw color in every other stripe
			int i;
			for(i = 1; i <= 9; i+=2) {
				if( vST.s >= uMin + divider*(i-1) && vST.s <= uMin + divider*i &&
					vST.t >= uMin && vST.t <= uMax) {
						myColor = vec3( 0., 0.1, 1.);
				}
			}
		}
	}
	
	gl_FragColor = vec4( myColor,  1. );
}
