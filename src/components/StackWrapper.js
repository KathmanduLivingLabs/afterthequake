import React, {Component} from 'react';
import * as d3 from 'd3';
import * as mapboxgl from "mapbox-gl";
import $ from 'jquery';


import stack from '../libs/stack.min';

import Section from './Section';
import './StackWrapper.css'



class StackWrapper extends Component {
    constructor(){
        super();
    
        this.state = {

        }

        this.myRef = React.createRef();

        this.sectionLabels = ["firstMap", "secondMap"]

        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.initStack = this.initStack.bind(this);
        // this.getSlideShowConfig = this.getSlideShowConfig.bind(this);

        this.firstMapMagic = this.firstMapMagic.bind(this);
        this.bringBgToFront = this.bringBgToFront.bind(this);
        this.sectionConfig = [
            {
                sectionName: "firstMap",
                backgroundNode: "firstMapBg",
                magicFunction: this.firstMapMagic  
            },     
            {
                sectionName: "secondMap",
                backgroundNode: "secondMapBg",
                magicFunction: this.firstMapMagic  
            }
        ]


    }

    componentWillMount() {
        // window.scrollTo(0,0);
    }

    componentDidMount(){
        // console.log(">>>>>>",d3.selectAll(".slide")[0].length)



        mapboxgl.accessToken = 'pk.eyJ1IjoiYXJrb2Jsb2ciLCJhIjoiY2pmZ2RsNGpqNDE1OTJxazdrNzVxNnl2ZSJ9.Qj1ryjt2_OWUmlTKlcEmtA';
        const map = new mapboxgl.Map({
          container: 'firstMapBg', // container id
          style: 'mapbox://styles/arkoblog/cjoaqjmuv1jt12snvg459eoj3', // stylesheet location
          center: [85.324, 27.7172], // starting position [lng, lat]
          zoom: 2 // starting zoom
        });        


        // this.animateLine = (timestamp) => {



        //     map.setPaintProperty('shake-contours', 'line-color',['get', 'color'])

            
        //     // map.setPaintProperty('point', 'circle-radius', Math.abs(Math.sin(timestamp/600)/2)*maxRadius + minRadius);
        //     // map.setPaintProperty('point', 'circle-opacity', Math.abs(Math.cos(timestamp/600)/2)+minOpacity)

        //     requestAnimationFrame(this.animateLine);

        // }

        const point = {
            "type": "Point",
            "coordinates": [
                84.731, 28.231
            ]
          }


        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });

        d3.select(".scroll-ready")
            .style("visibility", "hidden");

        // $("html, body").keydown(function(event) { 
        //     return false;
        // });

        map.on("load", () => {
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
            map.flyTo({

                center: [85.324, 27.7172], // starting position [lng, lat]
                zoom: 2 // starting zoom
            })

            d3.select(".scroll-ready")
                .style("visibility", "visible")
                .transition()
                .duration(1000);
    
            // $("html, body").keydown(function(event) { 
            //     return stack.keydown();
            // });
    
            
            map.addSource('point', {
                "type": "geojson",
                "data": point
            });
            map.addLayer({
                "id": "point",
                "source": "point",
                "type": "circle",
                "paint": {
                    "circle-radius": 5,
                    "circle-color": "orange"
                }
            });



            map.addLayer({
                "id": "shake-contours",
                "source": {
                    type: 'vector',
                    url: 'mapbox://arkoblog.7itt0jea'
                },
                "source-layer": "contour_clipped_geo-ciayjh",
                "type": "line",
                "paint": {
                    "line-color": ['get', 'color'],
                    "line-width": ['*', ['get', 'value'], 0.8],
                    "line-opacity": 0,
                    // "line-blur": 20,
                    // "line-opacity":['*', ['get', 'value'], 0.5]
                }
            });

            map.addSource('dem', {
                "type": "raster-dem",
                "url": "mapbox://mapbox.terrain-rgb"
                });
            map.addLayer({
                "id": "hillshading",
                "source": "dem",
                "type": "hillshade"
                // insert below waterway-river-canal-shadow;
                // where hillshading sits in the Mapbox Outdoors style
            }, 'waterway-river-canal-shadow');
            const animate = (timestamp) => {

                const maxRadius = 120;
                const minRadius = 5;
                const minOpacity= 0.0;
    
                map.setPaintProperty('point', 'circle-radius', Math.abs(Math.sin(timestamp/600)/2)*maxRadius + minRadius);
                map.setPaintProperty('point', 'circle-opacity', Math.abs(Math.cos(timestamp/600)/2)+minOpacity)
                map.setPaintProperty('shake-contours', 'line-opacity', Math.abs(Math.sin(timestamp/600)) * 1)
    
    
                requestAnimationFrame(animate);
    
            }
    

        
            animate(0);



        })

        
        this.map = map;
        // console.log("Mount");
        
        // this.deactivate();
        this.initStack();    
    }

    firstMapMagic(position) {
        
        // console.log(position);
        const {map} = this;

        switch(position) {
            case 0:
                this.map.flyTo({
                    center: [
                          85.1420,
                          28.2104
                        ],
                    zoom: 9,
                });

                console.log("isStyleLoaded", this.map.isStyleLoaded());
                if(this.map.isStyleLoaded()) {

                this.map.setLayoutProperty('shake-contours', 'visibility', 'none');
                this.map.setLayoutProperty('point', 'visibility', 'visible');
                                }
                                                // this.map.on("load", ()=> {
                    // this.animateMarker(0);
                // })
                break;
            case 1:
                this.map.flyTo({
                    center: [
                            85.1420,
                            28.2104
                        ],
                    zoom: 7,
                });
                    console.log("isStyleLoaded", this.map.isStyleLoaded());
                if(this.map.isStyleLoaded()) {

                    // this.map.setLayoutProperty('point', 'visibility', 'none');
                    this.map.setLayoutProperty('shake-contours', 'visibility', 'visible');
                }
            

                    
            
            // if(this.map) {
                    
                //     const {map} = this;
                    
                //     map.flyTo({
                //         center: [
                //           85.1420,
                //           28.2104
                //         ],
                //         zoom: 6,
                //     });




                //     map.on("load", ()=> {

                //         })

                //     console.log("End of case 1");

                // }
                break;
            case 2:

                    this.map.flyTo({
                        center: [
                              85.1420,
                              28.2104
                            ],
                        zoom: 9,
                    });

                    if(this.map.isStyleLoaded()) {

                        this.map.setLayoutProperty('point', 'visibility', 'none');
                        this.map.setLayoutProperty('shake-contours', 'visibility', 'none');
                    }
                
                // console.log("Hoohal");
                break;
            default:
                break;
        }
        

    }

    getSlideShowConfig2(presentIndex) {

        const sectionsWithSlidePositions = {sectionBySection: {}}
        const {sectionConfig} = this;

        const allPositionsWithBg = []; 
        const newObj = {};
        sectionConfig.forEach((item, i)=>{
            const htmlNodes = d3.selectAll('.'+ item.sectionName)
            const totalNodes = htmlNodes[0].length;
            const section = d3.selectAll("section") 
            const positions = []
            
            for(let k=0; k<totalNodes; k++) {
                const index = section[0].indexOf(htmlNodes[0][k]);

                newObj[index] = {...item, position: k};

                positions.push(section[0].indexOf(htmlNodes[0][k]));
            };

          
            sectionsWithSlidePositions.sectionBySection[item.sectionName] = {
                sectionName:item.sectionName,
                positions: positions, 
                backgroundNode: sectionConfig[i].backgroundNode,
                magicFunction: sectionConfig[i].magicFunction
            };

            allPositionsWithBg.push(...positions)
        })
        

        

        const totalSlides = d3.selectAll(".slide")[0].length;

        const finalObj = {}
        for (let j = 0 ; j < totalSlides; j++) {
            if(allPositionsWithBg.indexOf(j) !== -1) {
                finalObj[j] = {
                    ...newObj[j]
                }
            } else {
                finalObj[j] = null
            }
        }

        // console.log(finalObj);

        return finalObj[presentIndex]

    }

    bringBgToFront(config) {
        console.log("config", config, )

        if(true) {
            d3.select("."+config.backgroundNode)
                .style("z-index", 3);
        }

        d3.selectAll("."+config.sectionName)
            .filter(function(d, i){return i==config.position;})
            .style("z-index", 300)
            .style("background-color", "rgba(0,0,0,0)");


    }

    sendBgBack() {
        console.log("sendBgBack")
        this.sectionConfig.forEach((item)=>{
            d3.select("."+item.backgroundNode)
                .style("z-index", -1);

        })
    }

    // activate function - slide specific extra stuff
    activate(d, i) {

        const config = this.getSlideShowConfig2(i);
        // console.log(">>>>>", this.getSlideShowConfig2(i));
        
        if(config !== null) {
            this.bringBgToFront(config);

            this.props.isReady && config.magicFunction(config.position)        
        } else {
            this.sendBgBack();
        }

    }
    
    // deactivate function - slide specific extra stuff
    deactivate(d, i) {

    }
    
    initStack() {
        
        this.mystack = stack()
            .on("activate", this.activate)
            .on("deactivate", this.deactivate);
        
    }


    render() {
        return (
            <div ref={this.myRef} className="body">

                {this.sectionConfig.map((item)=>{
                    return <div key={item.backgroundNode} id={item.backgroundNode} className={item.backgroundNode + " test"}></div>
                })}


                <Section id="test" background = "https://dl.dropboxusercontent.com/s/a2njgu1jbms5ia4/risk_bg.jpg">
                            <p className="largeText"><b>What comes after.</b></p>
                            <p className="smallText">The purpose of this website is to *insert purpose here*. This was submitted as part of *insert details her* and produced jointly by arogya, karen and sabine.</p>
                            <p className="grey scroll-ready">Scroll down to continue.</p>
                </Section>

                <Section className={this.sectionConfig[0].sectionName}>
                    <p className="mediumText">On April 25, 2015, <br/> a M<sub>w</sub> 7.8 earthquake <br/> struck central Nepal.</p>
                    <p className="smallText">The epicenter of the earthquake was identified to be the village of Barpak, just XX kilometers from Kathmandu, the nation's capital and most populated city.</p>
                </Section>



                <Section className={this.sectionConfig[0].sectionName}>
                    <p className="mediumText">Shaking could be felt across most of the country.</p>
                    <p className="smallText">Shaking intensity from <a href="">USGS Shakemap</a></p>
                </Section>


                <Section className={this.sectionConfig[0].sectionName}>
                    <p className="mediumText">This caused widespread damage to buildings all over. </p>
                    <p className="smallText">Map to the right shows average damage of all homes within each Village Develeopment Committees for the 11 hardest hit districts.</p>

                </Section>
                <Section className={this.sectionConfig[0].sectionName}>
                    <p className="mediumText">Areas in the mountains were most severely damaged.</p>
                    <p className="smallText">This was for different reasons: worse construction, more intense shaking, and...</p>
                </Section>
                <Section className={this.sectionConfig[0].sectionName}><p className="mediumText">several landslides that were triggered from the earthquake.</p></Section>
                <Section>
                    <p className="mediumText">Following the earthquake, a Post Disaster Needs Assessment was conducted. 
                    </p>
                    <p className="smallText">It was estimated that $4 billion in aid was needed to fund recovery. The Government of Nepal presented this at the international donors conference, and the international community met this with a pledge for $4 billion.</p>

                </Section>
                <Section><p className="mediumText">Part of the $4 billion was distributed to homeowners to reconstruct damaged or collapsed homes. A damaged home got $1,000 and collapsed homes received $3,000.</p></Section>
                <Section>
                    <p className="mediumText">
                        More than 4 years later, a lot of progress has been made on reconstruction. 
                    </p>
                    <p className="smallText">As of July 2019, 416,000 out of 638,000 beneficiaries have completed construction. Scroll over each district to see how construction has progressed over time.</p>
                    </Section>
                {/* <Section className={this.sectionLabels[1]}><h1>Hello</h1></Section> */}

            </div>
        ) 
    }
}

export default StackWrapper;