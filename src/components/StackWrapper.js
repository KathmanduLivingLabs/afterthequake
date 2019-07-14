import React, { Component } from "react";
import * as d3 from "d3";
import * as mapboxgl from "mapbox-gl";
import $ from "jquery";
import ClipLoader from "react-spinners/ClipLoader";



import stack from "../libs/stack.min";

import Section from "./Section";
import "./StackWrapper.css";

class StackWrapper extends Component {
	constructor() {
		super();

		this.state = {};

		this.myRef = React.createRef();

		this.sectionLabels = ["firstMap", "secondMap"];

		this.activate = this.activate.bind(this);
		this.deactivate = this.deactivate.bind(this);
		this.initStack = this.initStack.bind(this);

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
		];
	}

	componentWillMount() {}

	componentDidMount() {
		mapboxgl.accessToken =
			"pk.eyJ1IjoiYWZ0ZXJ0aGVxdWFrZSIsImEiOiJjankxeGg3dzEwNnJtM2Nyemp6a3U5OXJ6In0.aA7Az96tDYkdreQiI5dn_w";
		const map = new mapboxgl.Map({
			container: "firstMapBg", // container id
			style: "mapbox://styles/afterthequake/cjy2z0w5b28591dqvy4g7iw9t", // stylesheet location
			center: [85.324, 27.7172], // starting position [lng, lat]
			zoom: 4 // starting zoom
		});

		const point = {
			type: "Point",
			coordinates: [84.731, 28.231]
		};

		$("html, body").css({
			overflow: "hidden",
			height: "100%"
		});

		d3.select(".scroll-ready").style("visibility", "hidden");

		map.on("load", () => {
			map.flyTo({
				center: [85.324, 27.7172], // starting position [lng, lat]
				zoom: 4 // starting zoom
			});

			map.addSource("point", {
				type: "geojson",
				data: point
			});
			map.addLayer({
				id: "point",
				source: "point",
				type: "circle",
				paint: {
					"circle-radius": 5,
					"circle-color": "orange"
				}
			});

			map.addLayer({
				id: "shaking-intensity",
				source: {
					type: "vector",
					url: "mapbox://afterthequake.53b7infa"
				},
				"source-layer": "shakingintensity_updated-8xrpym",
				type: "fill",
				paint: {
					"fill-color": ["get", "color"],
					"fill-opacity": 0.6,
					"fill-outline-color": "#fff"
				}
			});

			map.addLayer({
				id: "vdcs",
				source: {
					type: "vector",
					url: "mapbox://afterthequake.bhwygfry"
				},
				"source-layer": "vdc_shp_updated-1hhls4",
				type: "fill",
				paint: {
					"fill-color": ["get", "color"],
					"fill-opacity": 0.7
				}
			});

			map.addLayer({
				id: "langtang",
				source: {
					type: "vector",
					url: "mapbox://afterthequake.6x1w6i1n"
				},
				"source-layer": "langtang_vdc-d7sith",
				type: "fill",
				paint: {
					"fill-color": ["get", "color"],
					"fill-opacity": 0.7,
					"fill-outline-color": ["get", "line"]
				}
			});

			map.addLayer({
				id: "landslides",
				source: {
					type: "vector",
					url: "mapbox://afterthequake.3uw55vup"
				},
				"source-layer": "landslides_updated-2mbant",
				type: "fill",
				paint: {
					"fill-color": ["get", "color"],
					"fill-opacity": 0.7
				}
			});

			map.addLayer({
				id: "11-dists",
				source: {
					type: "vector",
					url: "mapbox://afterthequake.3j3p40y7"
				},
				"source-layer": "dist11_shp_updated-77f0vk",
				type: "fill",
				paint: {
					"fill-color": ["get", "color"],
					"fill-outline-color": "#fff",
					"fill-opacity": 0.7
				}
			});

			const animate = timestamp => {
				const maxRadius = 120;
				const minRadius = 5;
				const minOpacity = 0.1;

				map.setPaintProperty(
					"point",
					"circle-radius",
					Math.abs(Math.sin(timestamp / 600) / 2) * maxRadius +
						minRadius
				);
				map.setPaintProperty(
					"point",
					"circle-opacity",
					Math.abs(Math.cos(timestamp / 600) / 2) + minOpacity
				);
				map.setPaintProperty(
					"shaking-intensity",
					"fill-opacity",
					Math.abs(Math.sin(timestamp / 600)) * 1
				);

				requestAnimationFrame(animate);
			};

			this.map.setLayoutProperty(
				"shaking-intensity",
				"visibility",
				"none"
			);
			this.map.setLayoutProperty("point", "visibility", "none");
			this.map.setLayoutProperty("vdcs", "visibility", "none");
			this.map.setLayoutProperty("langtang", "visibility", "none");
			this.map.setLayoutProperty("landslides", "visibility", "none");
			this.map.setLayoutProperty("11-dists", "visibility", "none");

			animate(0);

			$("html, body").css({
				overflow: "auto",
				height: "auto"
			});
			d3.select(".scroll-ready").style("visibility", "visible");

			d3.select(".loadingScreen")
				.transition("ease")
				.style("opacity", "0")
				.duration(1000)
				.style("z-index", "-1");

			console.log("end of map.onload");
		});
		map.once("style.load", () => {
			console.log("end of map.onstyleload");
		});

		this.map = map;
		this.initStack();
	}

	toTitleCase(str) {
		return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	firstMapMagic(position) {
		switch (position) {
			case 0:
				// this.map.flyTo({
				//     center: [85.142, 28.2104],
				//     zoom: 9
				// });

				if (this.map.isStyleLoaded()) {
					this.map.fitBounds(
						[
							[80.7249999999999943, 26.3711699546563878],
							[88.1835507091418265, 30.4307314125281145]
						],
						{ padding: 100, offset: [-100, 0] }
					);
					this.map.setLayoutProperty(
						"shaking-intensity",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"point",
						"visibility",
						"visible"
					);
					this.map.setLayoutProperty("vdcs", "visibility", "none");
					this.map.setLayoutProperty(
						"langtang",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"landslides",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"11-dists",
						"visibility",
						"none"
					);
				}

				break;

			case 1:
				// this.map.flyTo({
				//     center: [85.142, 28.2104],
				//     zoom: 7
				// });

				if (this.map.isStyleLoaded()) {
					//   fit bounds
					this.map.fitBounds(
						[
							[80.7249999999999943, 26.3711699546563878],
							[88.1835507091418265, 30.4307314125281145]
						],
						{ padding: 100, offset: [-100, 0] }
					);

					this.map.setLayoutProperty(
						"shaking-intensity",
						"visibility",
						"visible"
					);
					this.map.setLayoutProperty(
						"point",
						"visibility",
						"visible"
					);
					this.map.setLayoutProperty("vdcs", "visibility", "none");
					this.map.setLayoutProperty(
						"langtang",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"landslides",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"11-dists",
						"visibility",
						"none"
					);
				}
				break;
			case 2:
				if (this.map.isStyleLoaded()) {
					this.map.fitBounds(
						[
							[84.4187401620000628, 26.9229091520000452],
							[86.6857055750000427, 28.7505129480000505]
						],
						{ padding: 100, offset: [-100, 0] }
					);

					this.map.setLayoutProperty(
						"shaking-intensity",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty("point", "visibility", "none");
					this.map.setLayoutProperty("vdcs", "visibility", "visible");
					this.map.setLayoutProperty(
						"langtang",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"landslides",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"11-dists",
						"visibility",
						"none"
					);
				}

				break;
			case 3:
				// this.map.fitBounds([[85.3995589610000820,28.1292153560000315], [ 85.8001092160000667,28.3862116340000625]], {padding:100})

				if (this.map.isStyleLoaded()) {
					this.map.fitBounds(
						[
							[84.4187401620000628, 26.9229091520000452],
							[86.6857055750000427, 28.7505129480000505]
						],
						{ padding: 100, offset: [-100, 0] }
					);

					this.map.setLayoutProperty(
						"shaking-intensity",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty("point", "visibility", "none");
					this.map.setLayoutProperty("vdcs", "visibility", "visible");
					this.map.setLayoutProperty(
						"langtang",
						"visibility",
						"visible"
					);
					this.map.setLayoutProperty(
						"landslides",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"11-dists",
						"visibility",
						"none"
					);
				}

				break;
			case 4:
				if (this.map.isStyleLoaded()) {
					this.map.fitBounds(
						[
							[85.399558961000082, 28.1292153560000315],
							[85.8001092160000667, 28.3862116340000625]
						],
						{ padding: 100, offset: [-100, 0] }
					);

					this.map.setLayoutProperty(
						"shaking-intensity",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty("point", "visibility", "none");
					this.map.setLayoutProperty("vdcs", "visibility", "none");
					this.map.setLayoutProperty(
						"langtang",
						"visibility",
						"visible"
					);
					this.map.setLayoutProperty(
						"landslides",
						"visibility",
						"visible"
					);
					this.map.setLayoutProperty(
						"11-dists",
						"visibility",
						"none"
					);
				}

				break;

			case 5:
                    d3.select(".exceptionLayer").style("z-index", 5);
                    d3.select(".firstMapBg").style("z-index", 4);
                    // d3.select("section").style('z-index','unset');
				if (this.map.isStyleLoaded()) {
					this.map.fitBounds(
						[
							[84.4187401620000628, 26.9229091520000452],
							[86.6857055750000427, 28.7505129480000505]
						],
						{ padding: 100, offset: [-100, 0] }
					);

					this.map.setLayoutProperty(
						"shaking-intensity",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty("point", "visibility", "none");
					this.map.setLayoutProperty("vdcs", "visibility", "none");
					this.map.setLayoutProperty(
						"langtang",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"landslides",
						"visibility",
						"none"
					);
					this.map.setLayoutProperty(
						"11-dists",
						"visibility",
						"visible"
					);
				}



				this.map.on("mousemove", "11-dists", e => {
					const features = this.map.queryRenderedFeatures(e.point, {
						layers: ["11-dists"]
					});
					const district = features[0].properties["DNAME.x"];
					const code = features[0].properties["DCODE"];
					console.log(features[0].properties);
					d3.select(".exceptionInfo").style("z-index", 5).html(`<div>
                        <h5>
                        ${this.toTitleCase(district)} - Reconstruction Progress
                        </h5>    
                        <img class="img-responsive" width="100%" src=${
							process.env.PUBLIC_URL
						}/img/${code}.jpg/>
                        </div>
                        `);
					// const locationName = getTranslationForLocationName(features[0].properties.dist_id || 'all', features[0].properties.code, language);
					// d3.select('#info')
					//   .text(`${localeFunction.mapOutLineOnHover[language](locationName, features[0].properties.attribute.toFixed(1))}`);
				});

				this.map.on("mouseout", "11-dists", e => {
					d3.select(".exceptionInfo").style("z-index", -1);
					// d3.select('#info')
					//   .text(locale.mapInteractionHelper[language]);
				});

				break;
			default:
				break;
		}
	}

	getSlideShowConfig2(presentIndex) {
		const sectionsWithSlidePositions = { sectionBySection: {} };
		const { sectionConfig } = this;

		const allPositionsWithBg = [];
		const newObj = {};
		sectionConfig.forEach((item, i) => {
			const htmlNodes = d3.selectAll("." + item.sectionName);
			const totalNodes = htmlNodes[0].length;
			const section = d3.selectAll("section");
			const positions = [];

			for (let k = 0; k < totalNodes; k++) {
				const index = section[0].indexOf(htmlNodes[0][k]);

				newObj[index] = { ...item, position: k };

				positions.push(section[0].indexOf(htmlNodes[0][k]));
			}

			sectionsWithSlidePositions.sectionBySection[item.sectionName] = {
				sectionName: item.sectionName,
				positions: positions,
				backgroundNode: sectionConfig[i].backgroundNode,
				magicFunction: sectionConfig[i].magicFunction
			};

			allPositionsWithBg.push(...positions);
		});

		const totalSlides = d3.selectAll(".slide")[0].length;

		const finalObj = {};
		for (let j = 0; j < totalSlides; j++) {
			if (allPositionsWithBg.indexOf(j) !== -1) {
				finalObj[j] = {
					...newObj[j]
				};
			} else {
				finalObj[j] = null;
			}
		}

		return finalObj[presentIndex];
	}

	bringBgToFront(config) {
		if (true) {
			d3.select("." + config.backgroundNode).style("z-index", 3);
		}

		d3.selectAll("." + config.sectionName)
			.filter(function(d, i) {
				return i === config.position;
			})
			.style("z-index", 3)
			.style("background-color", "rgba(0,0,0,0)");
	}

	sendBgBack() {
		console.log("sendBgBack");
		this.sectionConfig.forEach(item => {
			d3.select("." + item.backgroundNode).style("z-index", -1);
		});
	}

	// activate function - slide specific extra stuff
	activate(d, i) {
		const config = this.getSlideShowConfig2(i);

		if (config !== null) {
			this.bringBgToFront(config);
            d3.select(".exceptionLayer").style("z-index", -1);
            d3.select(".exceptionInfo").style("z-index", -1);
            this.props.isReady && config.magicFunction(config.position);
            
		} else {
            d3.select(".exceptionLayer").style("z-index", -1);
            d3.select(".exceptionInfo").style("z-index", -1);
			this.sendBgBack();
		}
		
	}

	// deactivate function - slide specific extra stuff
	deactivate(d, i) {}

	initStack() {
		this.mystack = stack()
			.on("activate", this.activate)
			.on("deactivate", this.deactivate);
	}

	render() {
		return (
			<div ref={this.myRef} className="body">
				{this.sectionConfig.map(item => {
					return (
						<div
							key={item.backgroundNode}
							id={item.backgroundNode}
							className={item.backgroundNode + " test"}
						></div>
					);
				})}

				<div className="row d-flex loadingScreen">
					<div className="col-sm-2 offset-md-5 align-self-center">
						<div className="text-center">
                            <ClipLoader
							// css={override}
							sizeUnit={"px"}
                            size={170}
                            margin= "0 auto"
							color={"#fff"}
							loading={true}
						/>

                        </div>
					</div>
				</div>

				<div className="exceptionLayer">
					<p className="mediumText">
						More than 4 years later, the country has made
						significant progress on their reconstruction.
					</p>
					<p className="smallText">
						As of July 2019, 387,500 out of 726,000 eligible
						beneficiaries have completed construction. received NPR
						300000 (~USD $3000).
					</p>

					<p className="grey ">
						Move your mouse over a district to learn more.
					</p>

					<p className="tinyText">
						Source: the{" "}
						<a
							href="https://ehrpinspection.nra.gov.np/moud/combined-chart"
							rel="noopener noreferrer"
							target="_blank"
						>
							Earthquake Housing Reconstruction Registration
							Program
						</a>{" "}
						has tracked reconstruction progress.
					</p>
				</div>

				<div className="exceptionInfo"></div>
				<Section
					id="test"
					// background="https://dl.dropboxusercontent.com/s/a2njgu1jbms5ia4/risk_bg.jpg"
				>
					<p className="largeText">
						<b>Nepal after the quake.</b>
					</p>
					<p className="mediumTextLight">
						Exploring the impacts and reconstruction of the 2015
						Gorkha earthquake.
					</p>
					<p className="mediumTextLight">
						Submitted as part of the{" "}
						<a
							href="https://understandrisk.org/vizrisk/"
							rel="noopener noreferrer"
							target="_blank"
						>
							#VizRisk
						</a>{" "}
						challenge by Arogya Koirala, Sabine Loos, and Karen
						Barns
					</p>
					<p className="grey scroll-ready">
						Press the down arrow of your keyboard to begin.
					</p>
				</Section>

				<Section className={this.sectionConfig[0].sectionName}>
					<p className="mediumText">
						On April 25, 2015 a Mw7.8 earthquake struck central
						Nepal.
					</p>
					<p className="smallText">
						The epicenter of the earthquake was in the village of
						Barpak, only 175 km away from the Nepal’s largest city,
						Kathmandu.
					</p>
				</Section>

				<Section className={this.sectionConfig[0].sectionName}>
					<p className="mediumText">
						Shaking could be felt across most of the country..
					</p>
					<p className="smallText">
						Here is the shaking intensity from the{" "}
						<a
							href="https://earthquake.usgs.gov/earthquakes/eventpage/us20002926/executive#shakemap?source=us&code=us20002926"
							target="_blank"
							rel="noopener noreferrer"
						>
							USGS Shakemap
						</a>
						. An intensity as low as five can cause objects to fall
						from homes’ shelves and windows to crack.
					</p>
				</Section>

				<Section className={this.sectionConfig[0].sectionName}>
					<p className="mediumText">
						..and it severely damaged homes across 11 districts.
					</p>
					<p className="smallText">
						This is the average damage of all homes with each
						village of the 11 hardest hit districts outside of
						Kathmandu Valley. Here, a damage level of five means all
						the homes within that village collapsed.{" "}
					</p>
					<p className="tinyText">
						Source: The Government of Nepal surveyed the household
						impact for each home outside of Kathmandu Valley, made
						publicly available{" "}
						<a
							href="http://eq2015.npc.gov.np"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							here
						</a>
						. Blank areas due to unsurveyed locations or missing
						geometries.
					</p>
				</Section>
				<Section className={this.sectionConfig[0].sectionName}>
					<p className="mediumText">
						Mountainous regions were particularly affected
					</p>
					<p className="smallText">
						Many homes in the Himalayas to the north were also
						impacted by landslides triggered by the earthquake.
					</p>
				</Section>
				<Section className={this.sectionConfig[0].sectionName}>
					<p className="mediumText">
						Langtang village alone had 291 landslides{" "}
					</p>
					<p className="smallText">
						Here you can see the areas where landslides occurred in
						the month following the earthquake.
					</p>
					<p className="tinyText">
						Source: The United States Geological Survey used pre-
						and post-event satellite imagery to map landslides,
						available{" "}
						<a
							href="https://www.sciencebase.gov/catalog/item/582c74fbe4b04d580bd377e8"
							rel="noopener noreferrer"
							target="_blank"
						>
							here.
						</a>
					</p>
				</Section>
				<Section background="https://www.dl.dropboxusercontent.com/s/mctsnz7ctrp3z5e/langtang_bg.jpg">
					<p className="mediumText">
						The village was almost entirely buried.
					</p>

					<p className="smallText">
						After an avalanche hit the villages of Ghodatabela and
						Langtang, nearly 250 people were reported missing. Since
						Langtang is a popular terkking route, casualties
						included a large number of domestic and international
						tourists, as well as locals from the region.
					</p>
					<p className="tinyText">
						Photo by{" "}
						<a
							href="https://www.flickr.com/photos/markhorrell/33657429816/in/photostream/"
							rel="noopener noreferrer"
							target="_blank"
						>
							Mark Horell on flickr
						</a>
						, CC BY-NC-SA 2.0
					</p>
				</Section>
				<Section>
					<p className="mediumText">
						Damages and losses from the earthquake were estimated at
						NPR 706 billion (USD$7 billion).
					</p>
					<p className="smallText">
						Three weeks after the earthquake struck, the Government
						of Nepal led a Post Disaster Needs Assessment to
						estimate their recovery needs.{" "}
					</p>
					<p className="tinyText">
						Source: The Post Disaster Needs Assessment can be found{" "}
						<a
							href="https://www.npc.gov.np/images/category/PDNA_volume_BFinalVersion.pdf"
							rel="noopener noreferrer"
							target="_blank"
						>
							here.
						</a>
					</p>
				</Section>
				<Section>
					<p className="mediumText">
						The international community responded with a pledge for
						NPR 480 billion (USD$4 billion).
					</p>
					<p className="smallText">
						The International Conference on Nepal’s Reconstruction
						brought together representatives from over 60 countries
						exactly two months after the earthquake.
					</p>
					<p className="tinyText">
						Source: a briefing of the conference is{" "}
						<a
							href="https://kathmandupost.ekantipur.com/news/2015-06-25/44-bn-aid-pledged-during-donor-conference.html"
							rel="noopener noreferrer"
							target="_blank"
						>
							in The Kathmandu Post.
						</a>
					</p>
				</Section>

				<Section>
					<p className="mediumText">
						Part of this funding was distributed to homeowners to
						reconstruct.
					</p>
					<p className="smallText">
						The National Reconstruction Authority of Nepal provided
						aid for eligible homeowners. A damaged home received NPR
						100000 (~USD $1000) and a collapsed home received NPR
						300000 (~USD $3000)
					</p>
					<p className="tinyText">
						Source: the full grant disbursement procedure is{" "}
						<a
							href="https://drive.google.com/file/d/0B1aJ_HQvgE5rcTFHcHN0bWZ0VUU/view"
							rel="noopener noreferrer"
							target="_blank"
						>
							here
						</a>
					</p>
				</Section>

				<Section
					className={this.sectionConfig[0].sectionName}
				></Section>

				<Section full>
					<p className="mediumText">
						From financing, to getting construction materials,
						organizing the reconstruction for a large part of the
						population is a massive effort.
					</p>
					<br />
					<p className="mediumText">
						Given the scale, the reconstruction is progressing well.{" "}
					</p>
					<br />
					<p className="mediumText">
						However, reconstruction is only one component of
						recovery… it also encompasses aspects such as
						livelihoods, the economy and well-being, some of which
						may be difficult to measure and show on a map but is
						equally as important.
					</p>
				</Section>
			</div>
		);
	}
}

export default StackWrapper;
